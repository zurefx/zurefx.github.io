/* ═══════════════════════════════════════════════════════════════════════════
   ZureFX — app.js  (v2)
   Sistema de carga plana por sección.
   Archivos cargados según sección activa:
     for-you   → data/for-you.json
     all       → data/posts.json
     writeups  → data/writeups.json
     research  → data/research.json
     scripting → data/scripting.json
     notes     → data/notes.json
   Las cards NO cargan imágenes — el visual es solo color/tint.
   Las cards SÍ muestran tags como badges no-clickables.
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

/* JSON file for each section */
var SECTION_FILE = {
  'for-you':  'for-you.json',
  'all':      'posts.json',
  'writeups': 'writeups.json',
  'research': 'research.json',
  'scripting':'scripting.json',
  'notes':    'notes.json',
  'tools':    'tools.json'
};

var MONTHS   = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var SECTIONS = ['for-you', 'all', 'writeups', 'research', 'scripting', 'notes'];

/* ── POSTS PER PAGE ─────────────────────────────────────────────────────── */
var PAGE_LIMIT = 12;

/* ── STATE ───────────────────────────────────────────────────────────────── */
var CACHE          = {};   /* section → posts[] once loaded */
var currentSection = 'for-you';
var currentView    = 'grid';
var currentPage    = 1;
var loading        = false;

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

function sectionColor(sec) { return SECTION_COLOR_MAP[sec] || '#cc2b2b'; }

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

/* ── TAG BADGES (no-click, display only) ────────────────────────────────── */

function buildTagBadges(tags, sec) {
  if (!Array.isArray(tags) || tags.length === 0) return '';
  var color = sectionColor(sec);
  var html  = '<div class="card-tags">';
  tags.slice(0, 4).forEach(function(t) {
    html += '<span class="card-tag" style="'
      + 'color:' + color + ';'
      + 'border-color:' + color + '33;'
      + 'background:' + color + '0f'
      + '">' + t + '</span>';
  });
  html += '</div>';
  return html;
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
  fetch(prefix + 'data/ticker.json', { cache: 'default' })
    .then(function(res) { return res.json(); })
    .then(function(data) { buildTicker(data.items || []); })
    .catch(function() {});
}

/* ══════════════════════════════════════════════════════════════════════════
   FLAT JSON LOADER
   ══════════════════════════════════════════════════════════════════════════ */

async function loadSection(sec) {
  if (CACHE[sec]) return CACHE[sec];

  var file = SECTION_FILE[sec];
  if (!file) { CACHE[sec] = []; return []; }

  var url = getRootPrefix() + 'data/' + file + '?v=' + Date.now();
  try {
    var res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) { CACHE[sec] = []; return []; }
    var data = await res.json();
    CACHE[sec] = Array.isArray(data) ? data : [];
    console.log('[ZFX] Loaded ' + file + ' — ' + CACHE[sec].length + ' posts');
    return CACHE[sec];
  } catch (err) {
    console.warn('[ZFX] Could not load ' + file + ':', err);
    CACHE[sec] = [];
    return [];
  }
}

/* ══════════════════════════════════════════════════════════════════════════
   RENDER GRID — sin imágenes, solo color/tint + tags
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

    card.innerHTML =
      '<div class="pg-visual" style="--tint:' + tint + '">' +
        '<div class="pg-visual-label"></div>' +
      '</div>' +
      '<div class="pg-body">' +
        '<div class="pg-cat" style="color:' + color + ';--cat-dot:' + color + '">' + label + '</div>' +
        '<div class="pg-title">' + p.title + '</div>' +
        '<div class="pg-desc">'  + p.description + '</div>' +
        buildTagBadges(p.tags, p.section) +
        '<div class="pg-footer">' + buildStats('grid') + '</div>' +
      '</div>';

    card.addEventListener('click', (function(href) {
      return function() { window.location.href = href; };
    })(p.permalink));

    grid.appendChild(card);
    updateCardStats(card, { words: p.words || null, timeLabel: p.readTime || null });
  });

  return grid;
}

/* ══════════════════════════════════════════════════════════════════════════
   RENDER LIST — sin imágenes, solo color/tint + tags
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

    item.innerHTML =
      '<div class="pl-visual" style="--tint:' + tint + '">' +
        '<div class="pl-grid-lines"></div>' +
        '<div class="pl-fade"></div>' +
      '</div>' +
      '<div class="pl-body">' +
        '<div class="pl-meta">' +
          '<span class="pl-cat" style="color:' + color + ';--dot-c:' + color + '">' + label + '</span>' +
          '<span class="pl-date">' + fmtDate(p.date) + '</span>' +
        '</div>' +
        '<div class="pl-title">' + p.title + '</div>' +
        '<div class="pl-desc">'  + p.description + '</div>' +
        buildTagBadges(p.tags, p.section) +
        '<div class="pl-foot">'  + buildStats('list') + '</div>' +
      '</div>';

    item.addEventListener('click', (function(href) {
      return function() { window.location.href = href; };
    })(p.permalink));

    list.appendChild(item);
    updateCardStats(item, { words: p.words || null, timeLabel: p.readTime || null });
  });

  return list;
}

/* ── RENDER PICKS ────────────────────────────────────────────────────────── */

var PICK_TINTS = ['pt1', 'pt2', 'pt3'];

function renderPicks(posts) {
  if (!picksContainer) return;
  var picks = posts.filter(function(p) { return p.pick === 1; }).slice(0, 3);
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
    li.innerHTML =
      '<span class="pick-num">0' + (i + 1) + '</span>' +
      '<div class="pick-thumb ' + PICK_TINTS[i] + '"></div>' +
      '<div class="pick-info">' +
        '<span class="pick-title">' + p.title + '</span>' +
        '<span class="pick-sub">' + p.description.slice(0, 85) + '…</span>' +
        '<div class="pick-meta">' +
          '<span class="tag tag-xs" style="color:' + color + ';border-color:' + color + '44;background:' + color + '12">' + sectionLabel + '</span>' +
        '</div>' +
      '</div>';

    li.addEventListener('click', (function(href) {
      return function() { window.location.href = href; };
    })(p.permalink));

    picksContainer.appendChild(li);
  });
}

/* ── RENDER TAGS CLOUD ───────────────────────────────────────────────────── */

function renderTags(posts) {
  if (!tagsCloud) return;
  var seen = {};
  var tags = [];
  posts.forEach(function(p) {
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

  paginator.appendChild(mkBtn(svgFirst, cur === 1,          1));
  paginator.appendChild(mkBtn(svgPrev,  cur === 1,          cur - 1));
  var badge = document.createElement('span');
  badge.className = 'pg-current';
  badge.textContent = cur;
  paginator.appendChild(badge);
  paginator.appendChild(mkBtn(svgNext, cur === totalPages, cur + 1));
  paginator.appendChild(mkBtn(svgLast, cur === totalPages, totalPages));
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

function render(posts) {
  if (!container) return;

  /* for-you: muestra todo lo que venga del JSON (máx 9), sin paginación */
  if (currentSection === 'for-you') {
    container.innerHTML = '';
    var v = isMobile() ? 'list' : currentView;
    container.appendChild(v === 'grid' ? renderGrid(posts) : renderList(posts));
    if (paginator) paginator.innerHTML = '';
    return;
  }

  /* resto de secciones: paginación */
  var total = Math.max(1, Math.ceil(posts.length / PAGE_LIMIT));
  if (currentPage < 1)     currentPage = 1;
  if (currentPage > total) currentPage = total;

  var slice = posts.slice((currentPage - 1) * PAGE_LIMIT, currentPage * PAGE_LIMIT);
  container.innerHTML = '';
  var v2 = isMobile() ? 'list' : currentView;
  container.appendChild(v2 === 'grid' ? renderGrid(slice) : renderList(slice));
  renderPaginator(total, currentPage);
}

/* ── RENDER WITH LOADER ──────────────────────────────────────────────────── */

async function renderWithLoader() {
  if (!container || loading) return;
  loading = true;
  showLoader();

  var posts = await loadSection(currentSection);
  render(posts);

  /* sidebar: picks + tags siempre desde posts.json (feed global) */
  var allPosts = CACHE['all'] || await loadSection('all');
  renderPicks(allPosts);
  renderTags(allPosts);

  loading = false;
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

  if (themeBtn)   themeBtn.addEventListener('click',   function() { applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); });
  if (menuToggle) menuToggle.addEventListener('click', function() { applyTheme(htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); });

  /* ── Side menu ── */
  function openMenu()  { sideMenu?.classList.add('open');    menuOverlay?.classList.add('open');    document.body.style.overflow = 'hidden'; }
  function closeMenu() { sideMenu?.classList.remove('open'); menuOverlay?.classList.remove('open'); document.body.style.overflow = ''; }

  document.getElementById('hamburgerBtn')?.addEventListener('click', openMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  if (!container) return;

  /* ── View toggle (solo re-renderiza desde caché, sin refetch) ── */
  if (btnGrid) btnGrid.addEventListener('click', function() {
    currentView = 'grid'; currentPage = 1;
    btnGrid.classList.add('active'); btnList.classList.remove('active');
    var cached = CACHE[currentSection];
    if (cached) render(cached);
  });
  if (btnList) btnList.addEventListener('click', function() {
    currentView = 'list'; currentPage = 1;
    btnList.classList.add('active'); btnGrid.classList.remove('active');
    var cached = CACHE[currentSection];
    if (cached) render(cached);
  });

  window.addEventListener('hashchange', handleHash);

  document.querySelectorAll('[data-section]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      history.pushState(null, '', '#' + el.dataset.section);
      setSection(el.dataset.section);
      forceScrollTop();
      closeMenu();
    });
  });

  document.querySelectorAll('.footer-link').forEach(function(el) {
    el.addEventListener('click', function(e) {
      var sec = (el.getAttribute('href') || '').replace('#', '');
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
    rt = setTimeout(function() {
      var cached = CACHE[currentSection];
      if (cached) render(cached);
    }, 120);
  });

  /* ── Bootstrap: carga for-you + posts.json en paralelo ── */
  (async function boot() {
    if (!container) return;
    showLoader();
    try {
      /* for-you.json y posts.json en paralelo desde el arranque */
      await Promise.all([loadSection('for-you'), loadSection('all')]);

      var allPosts = CACHE['all'] || [];
      renderPicks(allPosts);
      renderTags(allPosts);

      handleHash();   /* decide sección según URL hash y renderiza */

    } catch (err) {
      console.error('[ZFX] Boot failed:', err);
      if (container) {
        container.innerHTML =
          '<p style="color:var(--text-3);padding:32px;font-family:var(--mono);font-size:0.65rem;letter-spacing:0.08em;">' +
          'FAILED TO LOAD POSTS — CHECK /data/for-you.json</p>';
      }
    }
  })();

});