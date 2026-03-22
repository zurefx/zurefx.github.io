/* ═══════════════════════════════════════════════════════════════════════════
   ZureFX — app.js
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── CONSTANTS ───────────────────────────────────────────────────────────── */

var SECTION_COLOR_MAP = {
  'writeups':     '#cc2b2b',
  'research':     '#7c3aed',
  'scripting':    '#16a34a',
  'notes':        '#ca8a04',
  'cheat-sheets': '#0891b2',
  'tools':        '#db2777'
};

var SECTION_LABEL = {
  'research':     'Research',
  'writeups':     'Writeups',
  'notes':        'Notes',
  'scripting':    'Scripting',
  'cheat-sheets': 'Cheat Sheets',
  'tools':        'Tools'
};

var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var SECTIONS = ['for-you', 'all', 'writeups', 'research', 'scripting', 'notes'];

/* ── STATE ───────────────────────────────────────────────────────────────── */

var POSTS          = [];
var currentSection = 'for-you';
var currentView    = 'grid';
var currentPage    = 1;

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
  r = Math.round(r * f);
  g = Math.round(g * f);
  b = Math.round(b * f);

  return 'rgba(' + r + ',' + g + ',' + b + ',0.14)';
}

/* ── ROOT PREFIX — calcula ../ según profundidad de ruta ─────────────────── */

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

  var wordsStat =
    '<span class="' + cls + ' stat-words">' +
      iconWords +
      '<span>— w</span>' +
    '</span>';

  var timeStat =
    '<span class="' + cls + ' stat-time">' +
      iconTime +
      '<span>? min</span>' +
    '</span>';

  return wordsStat + dot + timeStat;
}

/* ── CARD STATS — lee words y readTime desde post.json ───────────────────── */

function updateCardStats(card, data) {
  if (!data) return;
  var wordSpan = card.querySelector('.stat-words span');
  var timeSpan = card.querySelector('.stat-time span');
  if (wordSpan) wordSpan.textContent = data.words     ? data.words.toLocaleString() + ' w' : '— w';
  if (timeSpan) timeSpan.textContent = data.timeLabel ? data.timeLabel + ' read'            : '? min';
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
    .catch(function() { /* ticker es decorativo, fallo silencioso */ });
}

/* ── FILTER ──────────────────────────────────────────────────────────────── */

function filterPosts(sec) {
  if (sec === 'for-you') return POSTS.slice(0, 6);
  if (sec === 'all')     return POSTS;
  return POSTS.filter(function(p) { return p.section === sec; });
}

/* ── RENDER GRID ─────────────────────────────────────────────────────────── */

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
        '<div class="pg-desc">' + p.description + '</div>' +
        '<div class="pg-footer">' + buildStats('grid') + '</div>' +
      '</div>';

    card.addEventListener('click', (function(permalink) {
      return function() { window.location.href = permalink; };
    })(p.permalink));

    grid.appendChild(card);

    updateCardStats(card, {
      words:     p.words    || null,
      timeLabel: p.readTime || null
    });
  });

  return grid;
}

/* ── RENDER LIST ─────────────────────────────────────────────────────────── */

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
        '<div class="pl-desc">' + p.description + '</div>' +
        '<div class="pl-foot">' + buildStats('list') + '</div>' +
      '</div>';

    item.addEventListener('click', (function(permalink) {
      return function() { window.location.href = permalink; };
    })(p.permalink));

    list.appendChild(item);

    updateCardStats(item, {
      words:     p.words    || null,
      timeLabel: p.readTime || null
    });
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

    li.innerHTML =
      '<span class="pick-num">0' + (i + 1) + '</span>' +
      '<div class="pick-thumb ' + PICK_TINTS[i] + '"></div>' +
      '<div class="pick-info">' +
        '<span class="pick-title">' + p.title + '</span>' +
        '<span class="pick-sub">' + p.description.slice(0, 85) + '…</span>' +
        '<div class="pick-meta">' +
          '<span class="tag tag-xs" style="' +
            'color:' + color + ';' +
            'border-color:' + color + '44;' +
            'background:' + color + '12' +
          '">' + sectionLabel + '</span>' +
        '</div>' +
      '</div>';

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
        if (clean && !seen[clean]) {
          seen[clean] = true;
          tags.push(clean);
        }
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
  render();
  forceScrollTop();
}

/* ── MAIN RENDER ─────────────────────────────────────────────────────────── */

function render() {
  var all = filterPosts(currentSection);

  if (currentSection === 'for-you') {
    container.innerHTML = '';
    var v = isMobile() ? 'list' : currentView;
    container.appendChild(v === 'grid' ? renderGrid(all) : renderList(all));
    paginator.innerHTML = '';
    return;
  }

  var limit = 9;
  var total = Math.max(1, Math.ceil(all.length / limit));
  if (currentPage < 1)     currentPage = 1;
  if (currentPage > total) currentPage = total;

  var slice = all.slice((currentPage - 1) * limit, currentPage * limit);
  container.innerHTML = '';
  var v2 = isMobile() ? 'list' : currentView;
  container.appendChild(v2 === 'grid' ? renderGrid(slice) : renderList(slice));
  renderPaginator(total, currentPage);
}

/* ── SECTION MANAGEMENT ──────────────────────────────────────────────────── */

function setSection(sec) {
  if (SECTIONS.indexOf(sec) === -1) sec = 'for-you';
  currentSection = sec;
  currentPage    = 1;
  document.querySelectorAll('[data-section]').forEach(function(el) {
    el.classList.toggle('active', el.dataset.section === sec);
  });
  render();
}

function handleHash() {
  var hash = window.location.hash.replace('#', '');
  setSection(SECTIONS.indexOf(hash) !== -1 ? hash : 'for-you');
}

/* ── BOOT ────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function() {

  container      = document.getElementById('postsContainer');
  paginator      = document.getElementById('paginator');
  picksContainer = document.getElementById('picksContainer');
  tagsCloud      = document.getElementById('tagsCloud');
  btnGrid        = document.getElementById('btnGrid');
  btnList        = document.getElementById('btnList');
  sideMenu       = document.getElementById('sideMenu');
  menuOverlay    = document.getElementById('menuOverlay');

  /* ── Ticker — funciona en todas las páginas ── */
  loadTicker();

  /* ── Theme toggle — funciona en todas las páginas ── */
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

  /* ── Side menu — funciona en todas las páginas ── */
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

  /* ── Guard: solo continúa si estamos en el index ── */
  if (!container) return;

  /* View toggle */
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

  /* ── Fetch post.json & boot ── */
  var prefix = getRootPrefix();
  fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      POSTS = data
        .filter(function(p) { return p.section !== 'projects'; })
        .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
      renderPicks();
      renderTags();
      handleHash();
    })
    .catch(function(err) {
      console.error('Failed to load post.json:', err);
      container.innerHTML =
        '<p style="color:var(--text-3);padding:32px;font-family:var(--mono);' +
        'font-size:0.65rem;letter-spacing:0.08em;">' +
        'FAILED TO LOAD POSTS — CHECK /data/post.json</p>';
    });
});