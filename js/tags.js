/* ============================================================
   ZureFX — tags.js
   Tags index + filter by #tagname via URL hash
   Usa el mismo renderList de app.js (pl-item) para los posts
   URL: /page/tags.html        → muestra todos los tags
   URL: /page/tags.html#CTF   → filtra posts por tag "CTF"
   ============================================================ */

/* ── Root prefix ── */
function getRootPrefixTags() {
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

/* ── Helpers (mismos que app.js) ── */
var MONTHS_T = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

var SECTION_COLOR_MAP_T = {
  'writeups':     '#cc2b2b',
  'research':     '#7c3aed',
  'scripting':    '#16a34a',
  'notes':        '#ca8a04',
  'cheat-sheets': '#0891b2',
  'tools':        '#db2777'
};

function fmtDateTags(d) {
  var parts = d.split('-');
  var m = parseInt(parts[1], 10) - 1;
  return MONTHS_T[m] + ' ' + parts[0];
}

function capitalizeTags(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function escTags(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function sectionColorTags(sec) {
  return SECTION_COLOR_MAP_T[sec] || '#cc2b2b';
}

function buildTintTags(sec) {
  var hex = SECTION_COLOR_MAP_T[sec];
  if (!hex) return 'rgba(10,10,10,0.78)';
  var r = parseInt(hex.slice(1,3), 16);
  var g = parseInt(hex.slice(3,5), 16);
  var b = parseInt(hex.slice(5,7), 16);
  var f = 0.14;
  return 'rgba(' + Math.round(r*f) + ',' + Math.round(g*f) + ',' + Math.round(b*f) + ',0.14)';
}

/* ── Icons (iguales a app.js) ── */
var iconWords_t = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>';
var iconTime_t  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';

function buildStatsList_t() {
  return (
    '<span class="pl-stat stat-words">' + iconWords_t + '<span>— w</span></span>' +
    '<span class="pl-dot"></span>' +
    '<span class="pl-stat stat-time">' + iconTime_t + '<span>? min</span></span>'
  );
}

function updateCardStatsTags(item, data) {
  if (!data) return;
  var wordSpan = item.querySelector('.stat-words span');
  var timeSpan = item.querySelector('.stat-time span');
  if (wordSpan) wordSpan.textContent = data.words     ? data.words.toLocaleString() + ' w' : '— w';
  if (timeSpan) timeSpan.textContent = data.timeLabel ? data.timeLabel + ' read'            : '? min';
}

/* ── Build pl-item — stats desde post.json, sin fetch ── */
function buildPlItem(p) {
  var color = sectionColorTags(p.section);
  var tint  = buildTintTags(p.section);
  var label = capitalizeTags(p.section);

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
        '<span class="pl-cat" style="color:' + color + ';--dot-c:' + color + '">' + escTags(label) + '</span>' +
        '<span class="pl-date">' + fmtDateTags(p.date) + '</span>' +
      '</div>' +
      '<div class="pl-title">' + escTags(p.title) + '</div>' +
      '<div class="pl-desc">' + escTags(p.description || '') + '</div>' +
      '<div class="pl-foot">' + buildStatsList_t() + '</div>' +
    '</div>';

  item.addEventListener('click', (function(href) {
    return function() { window.location.href = href; };
  })(p.permalink));

  updateCardStatsTags(item, {
    words:     p.words    || null,
    timeLabel: p.readTime || null
  });

  return item;
}

/* ── Build post list para una sección ── */
function buildPostList(posts) {
  var wrap = document.createElement('div');
  wrap.className = 'tag-post-list';
  posts.forEach(function(p) {
    wrap.appendChild(buildPlItem(p));
  });
  return wrap;
}

/* ── Skeleton ── */
function renderSkeleton(container) {
  container.innerHTML =
    '<div class="tag-skeleton-group">' +
      '<div class="tag-skeleton-heading"></div>' +
      '<div class="tag-skeleton-row"></div>' +
      '<div class="tag-skeleton-row"></div>' +
      '<div class="tag-skeleton-row"></div>' +
    '</div>' +
    '<div class="tag-skeleton-group">' +
      '<div class="tag-skeleton-heading"></div>' +
      '<div class="tag-skeleton-row"></div>' +
      '<div class="tag-skeleton-row"></div>' +
    '</div>';
}

/* ── Get current tag from hash ── */
function getHashTag() {
  var raw = location.hash.slice(1).trim();
  return raw ? decodeURIComponent(raw) : '';
}

/* ── Update stats pill ── */
function updateTagsStats(text) {
  var el = document.getElementById('tagsTotal');
  if (el) el.querySelector('span').textContent = text;
}

/* ── Render: filter mode (single tag) ── */
function renderFilter(posts, tag, container) {
  var filtered = posts.filter(function(p) {
    return (p.tags || []).some(function(t) {
      return t.trim().toLowerCase() === tag.toLowerCase();
    });
  });

  /* Reescribir header */
  document.title = '#' + tag + ' | Zurefx';
  var header = document.getElementById('tagsHeader');
  if (header) {
    header.innerHTML =
      '<div class="tags-header-top">' +
        '<div>' +
          '<a href="tags.html" class="tags-back">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M19 12H5M12 5l-7 7 7 7"/>' +
            '</svg>' +
            'All tags' +
          '</a>' +
          '<p class="tags-eyebrow">Tag</p>' +
          '<h1 class="tags-title"># <em>' + escTags(tag) + '</em></h1>' +
          '<p class="tags-subtitle">Posts tagged with this topic.</p>' +
        '</div>' +
        '<div class="tags-stats">' +
          '<span class="tags-stat" id="tagsTotal">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>' +
            '<span>' + filtered.length + ' post' + (filtered.length !== 1 ? 's' : '') + '</span>' +
          '</span>' +
        '</div>' +
      '</div>';
  }

  if (!filtered.length) {
    container.innerHTML =
      '<div class="tags-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>No posts found</h3>' +
        '<p>No posts tagged <strong>#' + escTags(tag) + '</strong> yet.</p>' +
      '</div>';
    return;
  }

  container.innerHTML = '';
  container.appendChild(buildPostList(filtered));
}

/* ── Render: index mode (todos los tags) ── */
function renderIndex(posts, container) {
  /* Agrupar por tag */
  var tagMap = new Map();
  for (var i = 0; i < posts.length; i++) {
    var p    = posts[i];
    var tags = (p.tags || []).map(function(t) { return t.trim(); }).filter(Boolean);
    if (!tags.length) {
      if (!tagMap.has('untagged')) tagMap.set('untagged', []);
      tagMap.get('untagged').push(p);
    } else {
      for (var j = 0; j < tags.length; j++) {
        var tg = tags[j];
        if (!tagMap.has(tg)) tagMap.set(tg, []);
        tagMap.get(tg).push(p);
      }
    }
  }

  /* Sort alfabético */
  var sorted = Array.from(tagMap.entries()).sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });

  document.title = 'Tags | Zurefx';
  updateTagsStats(sorted.length + ' tag' + (sorted.length !== 1 ? 's' : ''));

  /* Tag cloud pills */
  var cloudWrap = document.createElement('div');
  cloudWrap.className = 'tags-cloud-wrap';
  var cloud = document.createElement('div');
  cloud.className = 'tags-cloud';

  sorted.forEach(function(entry) {
    var tg = entry[0], tp = entry[1];
    var btn = document.createElement('button');
    btn.className = 'tags-cloud-pill';
    btn.dataset.tag = tg;
    btn.innerHTML = escTags(tg) + '<span class="pill-count">' + tp.length + '</span>';
    btn.addEventListener('click', function() {
      window.location.hash = encodeURIComponent(btn.dataset.tag);
    });
    cloud.appendChild(btn);
  });

  cloudWrap.appendChild(cloud);

  /* Fragment para todas las secciones */
  var frag = document.createDocumentFragment();
  frag.appendChild(cloudWrap);

  sorted.forEach(function(entry) {
    var tg = entry[0], tp = entry[1];

    var section = document.createElement('div');
    section.className = 'tag-section';
    section.id = 'tag-' + encodeURIComponent(tg);

    var heading = document.createElement('a');
    heading.className = 'tag-section-heading';
    heading.href = 'tags.html#' + encodeURIComponent(tg);
    heading.innerHTML =
      '<div class="tag-section-left">' +
        '<span class="tag-section-dot"></span>' +
        '<span class="tag-section-name">' + escTags(tg) + '</span>' +
      '</div>' +
      '<span class="tag-section-count">' + tp.length + ' post' + (tp.length !== 1 ? 's' : '') + '</span>';

    section.appendChild(heading);
    section.appendChild(buildPostList(tp));
    frag.appendChild(section);
  });

  container.innerHTML = '';
  container.appendChild(frag);
}

/* ── Cache ── */
var _postsCache = null;

async function getPosts() {
  if (_postsCache) return _postsCache;
  var prefix = getRootPrefixTags();
  var res = await fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  var raw   = await res.json();
  var posts = Array.isArray(raw) ? raw : (raw.posts || []);
  /* excluir projects de los tags */
  posts = posts.filter(function(p) { return p.section !== 'projects'; });
  posts.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  _postsCache = posts;
  return posts;
}

/* ── Main render ── */
async function renderTags() {
  var container = document.getElementById('tagsContainer');
  if (!container) return;

  renderSkeleton(container);

  try {
    var posts = await getPosts();
    var tag   = getHashTag();
    if (tag) {
      renderFilter(posts, tag, container);
    } else {
      renderIndex(posts, container);
    }
  } catch (err) {
    console.error('[tags.js]', err);
    container.innerHTML =
      '<div class="tags-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>Could not load tags</h3>' +
        '<p>Check that <code>/data/post.json</code> exists and is valid JSON.</p>' +
      '</div>';
  }
}

/* ── hashchange ── */
window.addEventListener('hashchange', renderTags);

/* ── Arranque ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTags);
} else {
  renderTags();
}