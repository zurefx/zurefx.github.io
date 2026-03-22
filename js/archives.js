/* ============================================================
   ZureFX — archives.js
   Carga todos los posts de /data/post.json, los agrupa por mes
   y los renderiza con pl-item (igual que tags.js).
   Depende de app.js (debe cargarse antes).
   ============================================================ */

/* ── Root prefix ── */
function getRootPrefixArchives() {
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

/* ── Helpers ── */
var MONTHS_ARC = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var SECTION_COLOR_MAP_ARC = {
  'writeups':     '#cc2b2b',
  'research':     '#7c3aed',
  'scripting':    '#16a34a',
  'notes':        '#ca8a04',
  'cheat-sheets': '#0891b2',
  'tools':        '#db2777'
};

function escArc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmtDateArc(d) {
  var parts = d.split('-');
  var m = parseInt(parts[1], 10) - 1;
  return MONTHS_ARC[m] + ' ' + parts[0];
}

function capitalizeArc(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function sectionColorArc(sec) {
  return SECTION_COLOR_MAP_ARC[sec] || '#cc2b2b';
}

function buildTintArc(sec) {
  var hex = SECTION_COLOR_MAP_ARC[sec];
  if (!hex) return 'rgba(10,10,10,0.78)';
  var r = parseInt(hex.slice(1,3), 16);
  var g = parseInt(hex.slice(3,5), 16);
  var b = parseInt(hex.slice(5,7), 16);
  var f = 0.14;
  return 'rgba(' + Math.round(r*f) + ',' + Math.round(g*f) + ',' + Math.round(b*f) + ',0.14)';
}

function monthKey(dateString) {
  return dateString.slice(0, 7); /* "YYYY-MM" */
}

function formatMonthHeading(key) {
  try {
    var parts = key.split('-').map(Number);
    var d = new Date(parts[0], parts[1] - 1, 1);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
  } catch (_) { return key; }
}

/* ── Icons ── */
var iconWordsArc = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
var iconTimeArc  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

function buildStatsArc() {
  return (
    '<span class="pl-stat stat-words">' + iconWordsArc + '<span>— w</span></span>' +
    '<span class="pl-dot"></span>' +
    '<span class="pl-stat stat-time">' + iconTimeArc + '<span>? min</span></span>'
  );
}

function updateStatsArc(item, data) {
  if (!data) return;
  var wordSpan = item.querySelector('.stat-words span');
  var timeSpan = item.querySelector('.stat-time span');
  if (wordSpan) wordSpan.textContent = data.words     ? data.words.toLocaleString() + ' w' : '— w';
  if (timeSpan) timeSpan.textContent = data.timeLabel ? data.timeLabel + ' read'            : '? min';
}

/* ── Build pl-item — stats desde post.json, sin fetch ── */
function buildPlItemArc(p) {
  var color = sectionColorArc(p.section);
  var tint  = buildTintArc(p.section);
  var label = capitalizeArc(p.section);

  var item = document.createElement('div');
  item.className = 'pl-item';
  item.style.cursor = 'pointer';

  item.innerHTML =
    '<div class="pl-visual" style="--tint:' + tint + '">' +
      '<div class="pl-grid-lines"></div>' +
      '<div class="pl-fade"></div>' +
    '</div>' +
    '<div class="pl-body">' +
      '<div class="pl-meta">' +
        '<span class="pl-cat" style="color:' + color + ';--dot-c:' + color + '">' + escArc(label) + '</span>' +
        '<span class="pl-date">' + fmtDateArc(p.date) + '</span>' +
      '</div>' +
      '<div class="pl-title">' + escArc(p.title) + '</div>' +
      '<div class="pl-desc">' + escArc(p.description || '') + '</div>' +
      '<div class="pl-foot">' + buildStatsArc() + '</div>' +
    '</div>';

  item.addEventListener('click', (function(href) {
    return function() { window.location.href = href; };
  })(p.permalink));

  updateStatsArc(item, {
    words:     p.words    || null,
    timeLabel: p.readTime || null
  });

  return item;
}

/* ── Skeleton ── */
function renderSkeletonArc(container) {
  container.innerHTML =
    '<div class="arc-skeleton-group">' +
      '<div class="arc-skeleton-heading"></div>' +
      '<div class="arc-skeleton-row"></div>' +
      '<div class="arc-skeleton-row"></div>' +
      '<div class="arc-skeleton-row"></div>' +
    '</div>' +
    '<div class="arc-skeleton-group">' +
      '<div class="arc-skeleton-heading"></div>' +
      '<div class="arc-skeleton-row"></div>' +
      '<div class="arc-skeleton-row"></div>' +
    '</div>';
}

/* ── Update stats pill ── */
function updateArchivesStats(text) {
  var el = document.getElementById('archivesTotal');
  if (el) el.querySelector('span').textContent = text;
}

/* ── Main ── */
async function loadArchives() {
  var container = document.getElementById('archivesContainer');
  if (!container) return;

  renderSkeletonArc(container);

  var prefix = getRootPrefixArchives();

  try {
    var res = await fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var raw   = await res.json();
    var posts = Array.isArray(raw) ? raw : (raw.posts || []);

    /* excluir projects */
    posts = posts.filter(function(p) { return p.section !== 'projects'; });
    posts.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

    updateArchivesStats(posts.length + ' post' + (posts.length !== 1 ? 's' : ''));

    if (!posts.length) {
      container.innerHTML =
        '<div class="archives-empty">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
            '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' +
          '</svg>' +
          '<h3>No posts yet</h3>' +
          '<p>Check back soon.</p>' +
        '</div>';
      return;
    }

    /* ── Agrupar por mes ── */
    var groupMap = new Map();
    posts.forEach(function(p) {
      var key = monthKey(p.date);
      if (!groupMap.has(key)) groupMap.set(key, []);
      groupMap.get(key).push(p);
    });

    var frag = document.createDocumentFragment();

    groupMap.forEach(function(groupPosts, key) {
      var group = document.createElement('div');
      group.className = 'archive-group';

      var heading = document.createElement('div');
      heading.className = 'archive-month-heading';
      heading.innerHTML =
        '<div class="archive-month-left">' +
          '<span class="archive-month-dot"></span>' +
          '<span class="archive-month-label">' + formatMonthHeading(key) + '</span>' +
        '</div>' +
        '<span class="archive-month-count">' +
          groupPosts.length + ' post' + (groupPosts.length !== 1 ? 's' : '') +
        '</span>';

      var list = document.createElement('div');
      list.className = 'archive-post-list';

      groupPosts.forEach(function(p) {
        list.appendChild(buildPlItemArc(p));
      });

      group.appendChild(heading);
      group.appendChild(list);
      frag.appendChild(group);
    });

    container.innerHTML = '';
    container.appendChild(frag);

  } catch (err) {
    console.error('[archives.js]', err);
    container.innerHTML =
      '<div class="archives-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/>' +
          '<line x1="12" y1="8" x2="12" y2="12"/>' +
          '<line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>Could not load archives</h3>' +
        '<p>Check that <code>/data/post.json</code> exists and is valid JSON.</p>' +
      '</div>';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadArchives);
} else {
  loadArchives();
}