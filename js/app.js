/* ═══════════════════════════════════════════════════════════════════════════
   ZureFX — app.js  (performance-optimised)
   • background-image → <img> real con loading="lazy" / fetchpriority="high"
   • Espacio reservado via aspect-ratio → CLS ≈ 0
   • decoding="async" en todas las imágenes → no bloquea el hilo principal
   • Primera imagen (above-the-fold) recibe fetchpriority="high" para LCP
   • Resto de la lógica (chunks, paginación, picks, tags) intacta
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */

var SECTION_COLOR_MAP = {
  'writeups':     '#cc2b2b',
  'research':     '#7c3aed',
  'scripting':    '#16a34a',
  'notes':        '#ca8a04',
  'cheat-sheets': '#0891b2',
  'tools':        '#db2777',
  'projects':     '#0891b2'
};

var SECTION_LABEL = {
  'research':     'Research',
  'writeups':     'Writeups',
  'notes':        'Notes',
  'scripting':    'Scripting',
  'cheat-sheets': 'Cheat Sheets',
  'tools':        'Tools',
  'projects':     'Project'
};

var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var SECTIONS = ['for-you', 'all', 'writeups', 'research', 'scripting', 'notes'];

/* ── POSTS PER PAGE ─────────────────────────────────────────────────────── */
var FOR_YOU_LIMIT = 6;
var PAGE_LIMIT    = 9;

/* ── CHUNK CONFIG ────────────────────────────────────────────────────────── */
var CHUNK_SIZES = { 1: 9, default: 12 };
var MAX_CHUNKS  = 50;

/* ── STATE ───────────────────────────────────────────────────────────────── */
var POSTS           = [];
var currentChunk    = 0;
var allChunksLoaded = false;
var loadingChunk    = false;

var currentSection  = 'for-you';
var currentView     = 'grid';
var currentPage     = 1;

/*
 * Contador global de imágenes renderizadas en el render actual.
 * Se resetea en cada llamada a render() para identificar la primera
 * imagen above-the-fold y darle fetchpriority="high".
 */
var _imgRenderIndex = 0;

/* ── DOM REFS ────────────────────────────────────────────────────────────── */
var container;
var paginator;
var picksContainer;
var tagsCloud;
var btnGrid;
var btnList;
var sideMenu;
var menuOverlay;

var TAG_LIMIT = 30;

/* ── HELPERS ─────────────────────────────────────────────────────────────── */

function isMobile() { return window.innerWidth <= 640; }

function fmtDate(d) {
  var parts = d.split('-');
  var m = parseInt(parts[1], 10) - 1;
  return MONTHS[m] + ' ' + parts[0];
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function forceScrollTop() {
  setTimeout(function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 20);
}

function sectionColor(sec) {
  return SECTION_COLOR_MAP[sec] || '#cc2b2b';
}

function buildTint(sec) {
  var hex = SECTION_COLOR_MAP[sec];
  if (!hex) return 'rgba(10,10,10,0.78)';
  var r = parseInt(hex.slice(1,3), 16);
  var g = parseInt(hex.slice(3,5), 16);
  var b = parseInt(hex.slice(5,7), 16);
  var f = 0.14;
  return 'rgba(' + Math.round(r*f) + ',' + Math.round(g*f) + ',' + Math.round(b*f) + ',0.14)';
}

function getRootPrefix() {
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

/* ── ICONS ───────────────────────────────────────────────────────────────── */

var iconWords = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
var iconTime  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

function buildStats(context) {
  var cls = context === 'grid' ? 'pg-stat' : 'pl-stat';
  var dot = context === 'grid' ? '<span class="pg-dot"></span>' : '<span class="pl-dot"></span>';
  return (
    '<span class="' + cls + ' stat-words">' + iconWords + '<span>— w</span></span>' +
    dot +
    '<span class="' + cls + ' stat-time">' + iconTime + '<span>? min</span></span>'
  );
}

function updateCardStats(card, data) {
  if (!data) return;
  var wordSpan = card.querySelector('.stat-words span');
  var timeSpan = card.querySelector('.stat-time span');
  if (wordSpan) wordSpan.textContent = data.words     ? data.words.toLocaleString() + ' w' : '— w';
  if (timeSpan) timeSpan.textContent = data.timeLabel ? data.timeLabel + ' read'            : '? min';
}

/* ══════════════════════════════════════════════════════════════════════════
   IMAGEN OPTIMIZADA
   Reemplaza background-image por un <img> real dentro del visual div.
   Beneficios:
     • loading="lazy"  → el browser no descarga imágenes off-screen
     • fetchpriority="high" en la primera → LCP más rápido
     • decoding="async" → no bloquea el hilo principal
     • El contenedor tiene altura fija en CSS → CLS = 0 (sin layout shift)
   ══════════════════════════════════════════════════════════════════════════ */

/**
 * Crea un <img> optimizado para la thumbnail del post.
 *
 * @param {string}  src       - ruta de la imagen (p.image del JSON)
 * @param {string}  alt       - texto alternativo (título del post)
 * @param {boolean} isPriority - true solo para la primera imagen visible
 * @returns {HTMLImageElement}
 */
function buildOptimizedImg(src, alt, isPriority) {
  var prefix = getRootPrefix();
  var img    = document.createElement('img');

  /* Ruta: si ya es absoluta la dejamos, si es relativa añadimos el prefix */
  img.src = (src && src.startsWith('/')) ? prefix + src.slice(1) : (src || '');
  img.alt = alt || '';

  /* Siempre async para no bloquear el parser */
  img.decoding = 'async';

  if (isPriority) {
    /* Primera imagen visible → queremos que el browser la descargue YA */
    img.fetchPriority = 'high';
    img.loading       = 'eager';
  } else {
    /* Resto → lazy, el browser las descarga solo cuando están near-viewport */
    img.loading = 'lazy';
  }

  /* Estilos: cubre el contenedor exactamente como background-size:cover */
  img.style.cssText = [
    'position:absolute',
    'inset:0',
    'width:100%',
    'height:100%',
    'object-fit:cover',
    'object-position:center',
    'display:block',
    /* Fade-in suave una vez cargada — evita flash blanco */
    'opacity:0',
    'transition:opacity .35s ease'
  ].join(';');

  img.addEventListener('load', function() {
    img.style.opacity = '1';
  });

  /* Si la imagen falla, se queda el fondo oscuro del contenedor — sin roto */
  img.addEventListener('error', function() {
    img.style.display = 'none';
  });

  return img;
}

/* ── TICKER ──────────────────────────────────────────────────────────────── */

function buildTicker(items) {
  var track = document.getElementById('tickerTrack');
  if (!track) return;
  var all  = items.concat(items);
  var html = '';
  all.forEach(function(item) {
    html += '<span>' + item + '</span><span class="sep"> — </span>';
  });
  track.innerHTML = html;
}

function loadTicker() {
  var prefix = getRootPrefix();
  fetch(prefix + 'data/ticker.json?v=' + Date.now(), { cache: 'no-store' })
    .then(function(res) { return res.json(); })
    .then(function(data) { buildTicker(data.items || []); })
    .catch(function() {});
}

/* ══════════════════════════════════════════════════════════════════════════
   SISTEMA DE CARGA PROGRESIVA (LAZY CHUNKS) — sin cambios
   ══════════════════════════════════════════════════════════════════════════ */

async function loadNextChunk() {
  if (allChunksLoaded) return [];
  if (loadingChunk)    return [];
  if (currentChunk >= MAX_CHUNKS) { allChunksLoaded = true; return []; }

  loadingChunk = true;
  var nextIdx  = currentChunk + 1;
  var prefix   = getRootPrefix();
  var url      = prefix + 'data/posts-' + nextIdx + '.json?v=' + Date.now();

  try {
    var res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) { allChunksLoaded = true; loadingChunk = false; return []; }

    var newPosts = await res.json();
    if (!Array.isArray(newPosts) || newPosts.length === 0) {
      allChunksLoaded = true; loadingChunk = false; return [];
    }

    var existingIds = {};
    POSTS.forEach(function(p) { existingIds[p.id] = true; });
    var unique = newPosts.filter(function(p) { return !existingIds[p.id]; });

    POSTS        = POSTS.concat(unique);
    currentChunk = nextIdx;
    loadingChunk = false;

    console.log('[ZFX] Chunk ' + nextIdx + ' cargado — ' + unique.length + ' posts nuevos (total: ' + POSTS.length + ')');
    return unique;

  } catch (err) {
    console.warn('[ZFX] No se pudo cargar posts-' + nextIdx + '.json:', err.message);
    allChunksLoaded = true; loadingChunk = false; return [];
  }
}

async function ensurePostsForSection(section, needed) {
  function countForSection(sec) {
    if (sec === 'for-you') return POSTS.length;
    if (sec === 'all')     return POSTS.length;
    return POSTS.filter(function(p) { return p.section === sec; }).length;
  }
  while (countForSection(section) < needed && !allChunksLoaded) {
    var added = await loadNextChunk();
    if (added.length === 0) break;
  }
}

function preloadNextChunk() {
  if (allChunksLoaded || loadingChunk) return;
  setTimeout(function() { loadNextChunk().catch(function() {}); }, 800);
}

/* ── FILTER ──────────────────────────────────────────────────────────────── */

function filterPosts(sec) {
  if (sec === 'for-you') return POSTS.slice(0, FOR_YOU_LIMIT);
  if (sec === 'all')     return POSTS;
  return POSTS.filter(function(p) { return p.section === sec; });
}

/* ══════════════════════════════════════════════════════════════════════════
   RENDER GRID
   Cambio clave: .pg-visual ya no usa background-image inline.
   En su lugar tiene position:relative y contiene un <img> real.
   ══════════════════════════════════════════════════════════════════════════ */

function renderGrid(posts) {
  var grid = document.createElement('div');
  grid.className = 'posts-grid';
  if (posts.length === 1) grid.classList.add('cards-1');
  if (posts.length === 2) grid.classList.add('cards-2');

  posts.forEach(function(p) {
    var color = sectionColor(p.section);
    var tint  = buildTint(p.section);
    var label = capitalize(p.section);
    var card  = document.createElement('article');
    card.className = 'pg-card';

    /* ── Visual container ──
       Ya NO ponemos background-image aquí.
       El <img> va dentro; el tint overlay y la grid van encima (z-index). */
    var visual = document.createElement('div');
    visual.className = 'pg-visual';
    /* Eliminamos background-image del inline style.
       Solo mantenemos la variable --tint para el pseudo-elemento ::before */
    visual.style.setProperty('--tint', tint);

    /* Imagen real optimizada */
    if (p.image) {
      var isPriority = (_imgRenderIndex === 0); /* solo la primera */
      var img = buildOptimizedImg(p.image, p.title, isPriority);
      visual.appendChild(img);
      _imgRenderIndex++;
    }

    /* Label dentro del visual (estaba en el HTML original, lo mantenemos) */
    var visualLabel = document.createElement('div');
    visualLabel.className = 'pg-visual-label';
    visual.appendChild(visualLabel);

    /* ── Card body (sin cambios) ── */
    var body = document.createElement('div');
    body.className = 'pg-body';
    body.innerHTML =
      '<div class="pg-cat" style="color:' + color + ';--cat-dot:' + color + '">' + label + '</div>' +
      '<div class="pg-title">' + p.title + '</div>' +
      '<div class="pg-desc">' + p.description + '</div>' +
      '<div class="pg-footer">' + buildStats('grid') + '</div>';

    card.appendChild(visual);
    card.appendChild(body);

    card.addEventListener('click', (function(permalink) {
      return function() { window.location.href = permalink; };
    })(p.permalink));

    grid.appendChild(card);
    updateCardStats(card, { words: p.words || null, timeLabel: p.readTime || null });
  });

  return grid;
}

/* ══════════════════════════════════════════════════════════════════════════
   RENDER LIST
   Mismo cambio: .pl-visual sin background-image inline, <img> real dentro.
   ══════════════════════════════════════════════════════════════════════════ */

function renderList(posts) {
  var list = document.createElement('div');
  list.className = 'posts-list';

  posts.forEach(function(p) {
    var color = sectionColor(p.section);
    var tint  = buildTint(p.section);
    var label = capitalize(p.section);
    var item  = document.createElement('div');
    item.className = 'pl-item';

    /* ── Visual container ── */
    var visual = document.createElement('div');
    visual.className = 'pl-visual';
    visual.style.setProperty('--tint', tint);

    if (p.image) {
      /* En la lista, la primera imagen también es candidata a LCP */
      var isPriority = (_imgRenderIndex === 0);
      var img = buildOptimizedImg(p.image, p.title, isPriority);
      visual.appendChild(img);
      _imgRenderIndex++;
    }

    /* Grid lines y fade overlay (mantienen z-index sobre la imagen) */
    var gridLines = document.createElement('div');
    gridLines.className = 'pl-grid-lines';
    var fade = document.createElement('div');
    fade.className = 'pl-fade';
    visual.appendChild(gridLines);
    visual.appendChild(fade);

    /* ── Body (sin cambios) ── */
    var body = document.createElement('div');
    body.className = 'pl-body';
    body.innerHTML =
      '<div class="pl-meta">' +
        '<span class="pl-cat" style="color:' + color + ';--dot-c:' + color + '">' + label + '</span>' +
        '<span class="pl-date">' + fmtDate(p.date) + '</span>' +
      '</div>' +
      '<div class="pl-title">' + p.title + '</div>' +
      '<div class="pl-desc">' + p.description + '</div>' +
      '<div class="pl-foot">' + buildStats('list') + '</div>';

    item.appendChild(body);   /* order:1 en CSS */
    item.appendChild(visual); /* order:2 en CSS */

    item.addEventListener('click', (function(permalink) {
      return function() { window.location.href = permalink; };
    })(p.permalink));

    list.appendChild(item);
    updateCardStats(item, { words: p.words || null, timeLabel: p.readTime || null });
  });

  return list;
}

/* ── RENDER PICKS ────────────────────────────────────────────────────────── */

var PICK_TINTS = ['pt1', 'pt2', 'pt3'];

function renderPicks() {
  var picks = POSTS.filter(function(p) { return p.pick === 1; }).slice(0, 3);
  picksContainer.innerHTML = '';

  picks.forEach(function(p, i) {
    var sectionLabel = capitalize(p.section);
    var color        = sectionColor(p.section);

    if (i > 0) {
      var sep = document.createElement('div');
      sep.className = 'pick-sep';
      picksContainer.appendChild(sep);
    }

    var li = document.createElement('li');
    li.className = 'pick';

    /* Thumbnail: también <img> real con lazy loading */
    var thumb = document.createElement('div');
    thumb.className = 'pick-thumb ' + PICK_TINTS[i];

    if (p.image) {
      var tImg = buildOptimizedImg(p.image, p.title, false); /* picks = siempre lazy */
      /* Override de tamaño para el thumb pequeño (48×48) */
      tImg.style.borderRadius = '3px';
      thumb.appendChild(tImg);
    }

    var info = document.createElement('div');
    info.className = 'pick-info';
    info.innerHTML =
      '<span class="pick-title">' + p.title + '</span>' +
      '<span class="pick-sub">' + p.description.slice(0, 85) + '…</span>' +
      '<div class="pick-meta">' +
        '<span class="tag tag-xs" style="color:' + color + ';border-color:' + color + '44;background:' + color + '12">' + sectionLabel + '</span>' +
      '</div>';

    li.innerHTML = '<span class="pick-num">0' + (i + 1) + '</span>';
    li.appendChild(thumb);
    li.appendChild(info);

    li.addEventListener('click', (function(permalink) {
      return function() { window.location.href = permalink; };
    })(p.permalink));

    picksContainer.appendChild(li);
  });
}

/* ── RENDER TAGS ─────────────────────────────────────────────────────────── */

function renderTags() {
  var seen = {};
  var tags = [];
  POSTS.forEach(function(p) {
    if (Array.isArray(p.tags)) {
      p.tags.forEach(function(t) {
        var clean = t.toLowerCase().trim();
        if (clean && !seen[clean]) { seen[clean] = true; tags.push(clean); }
      });
    }
  });

  tags = tags.slice(0, TAG_LIMIT);
  tagsCloud.innerHTML = '';
  tags.forEach(function(t) {
    var a = document.createElement('a');
    a.className = 'tag';
    a.textContent = t;
    a.href = 'page/tags.html#' + encodeURIComponent(t);
    tagsCloud.appendChild(a);
  });
}

/* ── PAGINATOR ───────────────────────────────────────────────────────────── */

function renderPaginator(totalPages, cur) {
  paginator.innerHTML = '';
  if (totalPages <= 1) return;

  var svgFirst = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>';
  var svgPrev  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>';
  var svgNext  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';
  var svgLast  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>';

  function mkBtn(html, disabled, targetPg) {
    var b = document.createElement('button');
    b.className = 'pg-btn';
    b.innerHTML = html;
    if (disabled) {
      b.disabled = true;
    } else {
      b.addEventListener('click', (function(pg) {
        return function() { goPage(pg); };
      })(targetPg));
    }
    return b;
  }

  paginator.appendChild(mkBtn(svgFirst, cur === 1,           1));
  paginator.appendChild(mkBtn(svgPrev,  cur === 1,           cur - 1));
  var badge = document.createElement('span');
  badge.className = 'pg-current';
  badge.textContent = cur;
  paginator.appendChild(badge);
  paginator.appendChild(mkBtn(svgNext, cur === totalPages,  cur + 1));
  paginator.appendChild(mkBtn(svgLast, cur === totalPages,  totalPages));
}

function goPage(p) {
  currentPage = p;
  renderWithLoader();
  forceScrollTop();
}

/* ── LOADING INDICATOR ───────────────────────────────────────────────────── */

function showLoader() {
  if (!container) return;
  container.innerHTML =
    '<div style="padding:48px;text-align:center;font-family:var(--mono);' +
    'font-size:0.62rem;letter-spacing:0.1em;color:var(--text-3)">LOADING…</div>';
  if (paginator) paginator.innerHTML = '';
}

/* ── MAIN RENDER ─────────────────────────────────────────────────────────── */

function render() {
  /* Resetear el contador de imágenes para que la primera
     del render actual reciba fetchpriority="high" */
  _imgRenderIndex = 0;

  var all = filterPosts(currentSection);

  if (currentSection === 'for-you') {
    container.innerHTML = '';
    var v = isMobile() ? 'list' : currentView;
    container.appendChild(v === 'grid' ? renderGrid(all) : renderList(all));
    paginator.innerHTML = '';
    return;
  }

  var total = Math.max(1, Math.ceil(all.length / PAGE_LIMIT));
  if (currentPage < 1)     currentPage = 1;
  if (currentPage > total) currentPage = total;

  var slice = all.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT);
  container.innerHTML = '';
  var v2 = isMobile() ? 'list' : currentView;
  container.appendChild(v2 === 'grid' ? renderGrid(slice) : renderList(slice));
  renderPaginator(total, currentPage);
}

/* ── RENDER WITH LOADER ──────────────────────────────────────────────────── */

async function renderWithLoader() {
  if (!container) return;

  var neededSection = currentSection;
  var neededCount;

  if (currentSection === 'for-you') {
    neededCount   = FOR_YOU_LIMIT;
    neededSection = 'all';
  } else {
    neededCount = currentPage * PAGE_LIMIT;
  }

  var currentCount = (neededSection === 'all')
    ? POSTS.length
    : POSTS.filter(function(p) { return p.section === neededSection; }).length;

  if (currentCount < neededCount && !allChunksLoaded) {
    showLoader();
  }

  await ensurePostsForSection(neededSection, neededCount);

  render();

  if (picksContainer) renderPicks();
  if (tagsCloud)      renderTags();

  preloadNextChunk();
}

/* ── SECTION MANAGEMENT ──────────────────────────────────────────────────── */

function setSection(sec) {
  if (SECTIONS.indexOf(sec) === -1) sec = 'for-you';
  currentSection = sec;
  currentPage    = 1;
  document.querySelectorAll('[data-section]').forEach(function(el) {
    el.classList.toggle('active', el.dataset.section === sec);
  });
  renderWithLoader();
}

function handleHash() {
  var hash = window.location.hash.replace('#', '');
  setSection(SECTIONS.indexOf(hash) !== -1 ? hash : 'for-you');
}

/* ══════════════════════════════════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {

  container      = document.getElementById('postsContainer');
  paginator      = document.getElementById('paginator');
  picksContainer = document.getElementById('picksContainer');
  tagsCloud      = document.getElementById('tagsCloud');
  btnGrid        = document.getElementById('btnGrid');
  btnList        = document.getElementById('btnList');
  sideMenu       = document.getElementById('sideMenu');
  menuOverlay    = document.getElementById('menuOverlay');

  loadTicker();

  /* ── Theme toggle ── */
  var htmlEl     = document.documentElement;
  var themeBtn   = document.getElementById('themeBtn');
  var menuToggle = document.getElementById('menuThemeToggle');
  var menuText   = document.getElementById('menuThemeText');
  var savedTheme = localStorage.getItem('zfx-theme');
  if (savedTheme) htmlEl.setAttribute('data-theme', savedTheme);

  function applyTheme(t) {
    htmlEl.setAttribute('data-theme', t);
    localStorage.setItem('zfx-theme', t);
    if (menuText) menuText.textContent = t === 'dark' ? 'Switch to Light' : 'Switch to Dark';
  }
  applyTheme(htmlEl.getAttribute('data-theme') || 'dark');

  if (themeBtn) {
    themeBtn.addEventListener('click', function() {
      applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── Side menu ── */
  function openMenu() {
    if (sideMenu)    sideMenu.classList.add('open');
    if (menuOverlay) menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (sideMenu)    sideMenu.classList.remove('open');
    if (menuOverlay) menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  var hamBtn = document.getElementById('hamburgerBtn');
  if (hamBtn)      hamBtn.addEventListener('click', openMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

  if (!container) return;

  /* ── View toggle ── */
  if (btnGrid) {
    btnGrid.addEventListener('click', function() {
      currentView = 'grid'; currentPage = 1;
      btnGrid.classList.add('active'); btnList.classList.remove('active');
      render();
    });
  }
  if (btnList) {
    btnList.addEventListener('click', function() {
      currentView = 'list'; currentPage = 1;
      btnList.classList.add('active'); btnGrid.classList.remove('active');
      render();
    });
  }

  window.addEventListener('hashchange', handleHash);

  document.querySelectorAll('[data-section]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var sec = el.dataset.section;
      history.pushState(null, '', '#' + sec);
      setSection(sec);
      forceScrollTop();
      closeMenu();
    });
  });

  document.querySelectorAll('.footer-link').forEach(function(el) {
    el.addEventListener('click', function(e) {
      var href = el.getAttribute('href') || '';
      var sec  = href.replace('#', '');
      if (SECTIONS.indexOf(sec) !== -1) {
        e.preventDefault();
        history.pushState(null, '', '#' + sec);
        setSection(sec);
        forceScrollTop();
      }
    });
  });

  var rt;
  window.addEventListener('resize', function() {
    clearTimeout(rt);
    rt = setTimeout(render, 120);
  });

  /* ── Bootstrap ── */
  (async function boot() {
    var prefix = getRootPrefix();
    showLoader();

    try {
      var res = await fetch(prefix + 'data/posts-1.json?v=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);

      var data = await res.json();
      POSTS        = data;
      currentChunk = 1;

      if (picksContainer) renderPicks();
      if (tagsCloud)      renderTags();
      handleHash();

      preloadNextChunk();

    } catch (err) {
      console.error('[ZFX] Failed to load posts-1.json:', err);
      container.innerHTML =
        '<p style="color:var(--text-3);padding:32px;font-family:var(--mono);' +
        'font-size:0.65rem;letter-spacing:0.08em;">' +
        'FAILED TO LOAD POSTS — CHECK /data/posts-1.json</p>';
    }
  })();

});