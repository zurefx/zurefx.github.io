/* ============================================================
   ZureFX — tags.js  (v3)
   Tags index + filter by #tagname via URL hash.
   Carga plana desde data/posts.json (mismo patrón que app.js).
   Depende de app.js (cargado antes): getRootPrefix(),
   SECTION_COLOR_MAP, fmtDate(), capitalize(), isMobile().
   ============================================================ */

/* ── Cache compartido — evita re-fetch si ya está cargado ── */
var _tags_posts     = [];
var _tags_loaded    = false;

/* ── Helpers locales ── */
function escT(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════════════════════
   LOAD — carga plana desde data/posts.json
   ══════════════════════════════════════════════════════ */
function tagsLoadPosts() {
  if (_tags_loaded) return Promise.resolve(_tags_posts);

  var url = getRootPrefix() + 'data/posts.json?v=' + Date.now();
  return fetch(url, { cache: 'no-store' })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      _tags_posts  = Array.isArray(data) ? data : [];
      _tags_loaded = true;
      console.log('[ZFX] tags — loaded posts.json — ' + _tags_posts.length + ' posts');
      return _tags_posts;
    })
    .catch(function(err) {
      console.warn('[tags.js] Could not load posts.json:', err);
      _tags_posts  = [];
      _tags_loaded = true;
      return [];
    });
}

/* ── Build tag-row ── */
function buildPlItemT(p) {
  var color = SECTION_COLOR_MAP[p.section] || '#cc2b2b';
  var label = capitalize(p.section);
  var words = p.words ? p.words.toLocaleString() + ' w' : '— w';
  var time  = p.readTime ? p.readTime : '? min';

  var item = document.createElement('div');
  item.className = 'tag-row';
  item.style.cssText = [
    'display:flex', 'align-items:flex-start', 'gap:14px',
    'padding:14px 16px',
    'background:var(--bg-card)',
    'cursor:pointer',
    'animation:fadeInUp .3s ease both'
  ].join(';');

  var bar = document.createElement('div');
  bar.style.cssText = [
    'flex-shrink:0', 'width:3px', 'border-radius:2px',
    'background:' + color,
    'align-self:stretch', 'min-height:44px'
  ].join(';');

  var body = document.createElement('div');
  body.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column;gap:4px';

  var meta = document.createElement('div');
  meta.style.cssText = 'display:flex;align-items:center;gap:8px;flex-wrap:wrap';
  meta.innerHTML =
    '<span style="' +
      'font-family:var(--mono);font-size:.5rem;font-weight:600;' +
      'letter-spacing:.1em;text-transform:uppercase;' +
      'color:' + color + ';' +
      'display:flex;align-items:center;gap:4px;line-height:1' +
    '">' +
      '<span style="width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;display:block"></span>' +
      escT(label) +
    '</span>' +
    '<span style="font-family:var(--mono);font-size:.48rem;color:var(--text-3);margin-left:auto">' +
      fmtDate(p.date) +
    '</span>';

  var title = document.createElement('div');
  title.style.cssText = [
    'font-family:var(--display)', 'font-weight:700', 'font-size:.95rem',
    'color:var(--text-1)', 'line-height:1.25',
    'white-space:nowrap', 'overflow:hidden', 'text-overflow:ellipsis',
    'transition:color .15s'
  ].join(';');
  title.textContent = p.title;

  var desc = document.createElement('div');
  desc.style.cssText = [
    'font-family:var(--body)', 'font-size:.72rem',
    'color:var(--text-2)', 'line-height:1.5',
    'display:-webkit-box', '-webkit-line-clamp:2',
    '-webkit-box-orient:vertical', 'overflow:hidden'
  ].join(';');
  desc.textContent = p.description || '';

  var foot = document.createElement('div');
  foot.style.cssText = 'display:flex;align-items:center;gap:6px;margin-top:2px';
  foot.innerHTML =
    '<span style="font-family:var(--mono);font-size:.52rem;color:var(--text-3);display:flex;align-items:center;gap:3px">' +
      '<svg style="width:10px;height:10px;opacity:.5;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
      words +
    '</span>' +
    '<span style="width:3px;height:3px;border-radius:50%;background:var(--border);flex-shrink:0"></span>' +
    '<span style="font-family:var(--mono);font-size:.52rem;color:var(--text-3);display:flex;align-items:center;gap:3px">' +
      '<svg style="width:10px;height:10px;opacity:.5;flex-shrink:0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
      time +
    '</span>';

  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(foot);
  item.appendChild(bar);
  item.appendChild(body);

  item.addEventListener('mouseenter', function() {
    item.style.borderColor = 'rgba(' +
      parseInt(color.slice(1,3),16) + ',' +
      parseInt(color.slice(3,5),16) + ',' +
      parseInt(color.slice(5,7),16) + ',.35)';
    item.style.transform   = 'translateY(-1px)';
    title.style.color      = color;
  });
  item.addEventListener('mouseleave', function() {
    item.style.borderColor = '';
    item.style.transform   = '';
    title.style.color      = '';
  });

  item.addEventListener('click', (function(href) {
    return function() { window.location.href = href; };
  })(p.permalink));

  return item;
}

/* ── Skeleton ── */
function renderTagsSkeleton(container) {
  container.innerHTML =
    '<div class="tag-skeleton-group">' +
      '<div class="tag-skeleton-heading"></div>' +
      '<div class="tag-skeleton-row"></div>' +
      '<div class="tag-skeleton-row"></div>' +
    '</div>' +
    '<div class="tag-skeleton-group">' +
      '<div class="tag-skeleton-heading"></div>' +
      '<div class="tag-skeleton-row"></div>' +
    '</div>';
}

/* ── Hash helper ── */
function getHashTag() {
  var raw = location.hash.slice(1).trim();
  return raw ? decodeURIComponent(raw) : '';
}

/* ── Update stats pill ── */
function updateTagsStats(text) {
  var el = document.getElementById('tagsTotal');
  if (el) el.querySelector('span').textContent = text;
}

/* ══════════════════════════════════════════════════════════════
   RENDER: FILTER MODE  (tags.html#CTF)
   ══════════════════════════════════════════════════════════════ */
async function renderFilter(tag, container) {
  document.title = '#' + tag + ' — ZureFX';
  var header = document.getElementById('tagsHeader');
  if (header) {
    header.innerHTML =
      '<div class="tags-header-top">' +
        '<div>' +
          '<a href="tags.html" class="tags-back">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' +
            'All tags' +
          '</a>' +
          '<p class="tags-eyebrow">Tag</p>' +
          '<h1 class="tags-title"># <em>' + escT(tag) + '</em></h1>' +
          '<p class="tags-subtitle">Posts tagged with this topic.</p>' +
        '</div>' +
        '<div class="tags-stats"><span class="tags-stat" id="tagsTotal">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>' +
          '<span>loading…</span>' +
        '</span></div>' +
      '</div>';
  }

  renderTagsSkeleton(container);

  var posts = await tagsLoadPosts();

  var filtered = posts.filter(function(p) {
    return (p.tags || []).some(function(t) {
      return t.trim().toLowerCase() === tag.toLowerCase();
    });
  });

  updateTagsStats(filtered.length + ' post' + (filtered.length !== 1 ? 's' : ''));

  if (!filtered.length) {
    container.innerHTML =
      '<div class="tags-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>No posts found</h3>' +
        '<p>No posts tagged <strong>#' + escT(tag) + '</strong> yet.</p>' +
      '</div>';
    return;
  }

  var list = document.createElement('div');
  list.className = 'tag-post-list';
  list.style.cssText = 'display:flex;flex-direction:column;gap:6px';
  filtered.forEach(function(p) { list.appendChild(buildPlItemT(p)); });
  container.innerHTML = '';
  container.appendChild(list);
}

/* ══════════════════════════════════════════════════════════════
   RENDER: INDEX MODE  (tags.html)
   ══════════════════════════════════════════════════════════════ */
function renderIndex(posts, container) {
  var tagMap = new Map();
  for (var i = 0; i < posts.length; i++) {
    var p    = posts[i];
    var tags = (p.tags || []).map(function(t) { return t.trim(); }).filter(Boolean);
    if (!tags.length) {
      if (!tagMap.has('untagged')) tagMap.set('untagged', []);
      tagMap.get('untagged').push(p);
    } else {
      tags.forEach(function(tg) {
        if (!tagMap.has(tg)) tagMap.set(tg, []);
        tagMap.get(tg).push(p);
      });
    }
  }

  var sorted = Array.from(tagMap.entries()).sort(function(a, b) {
    return a[0].localeCompare(b[0]);
  });

  document.title = 'Tags — ZureFX';
  updateTagsStats(sorted.length + ' tag' + (sorted.length !== 1 ? 's' : ''));

  /* Tag cloud pills */
  var cloudWrap = document.createElement('div');
  cloudWrap.className = 'tags-cloud-wrap';
  var cloud = document.createElement('div');
  cloud.className = 'tags-cloud';

  sorted.forEach(function(entry) {
    var tg = entry[0], count = entry[1].length;
    var btn = document.createElement('button');
    btn.className   = 'tags-cloud-pill';
    btn.dataset.tag = tg;
    btn.innerHTML   = escT(tg) + '<span class="pill-count">' + count + '</span>';
    btn.addEventListener('click', function() {
      window.location.hash = encodeURIComponent(btn.dataset.tag);
    });
    cloud.appendChild(btn);
  });
  cloudWrap.appendChild(cloud);

  /* Secciones por tag */
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
        '<span class="tag-section-name">' + escT(tg) + '</span>' +
      '</div>' +
      '<span class="tag-section-count">' + tp.length + ' post' + (tp.length !== 1 ? 's' : '') + '</span>';

    var list = document.createElement('div');
    list.className = 'tag-post-list';
    list.style.cssText = 'display:flex;flex-direction:column;gap:6px';
    tp.forEach(function(p) { list.appendChild(buildPlItemT(p)); });

    section.appendChild(heading);
    section.appendChild(list);
    frag.appendChild(section);
  });

  container.innerHTML = '';
  container.appendChild(frag);
}

/* ══════════════════════════════════════════════════════════════
   MAIN ENTRY POINT
   ══════════════════════════════════════════════════════════════ */
async function renderTagsPage() {
  var container = document.getElementById('tagsContainer');
  if (!container) return;

  var tag = getHashTag();

  renderTagsSkeleton(container);

  try {
    if (tag) {
      await renderFilter(tag, container);
    } else {
      var posts = await tagsLoadPosts();
      renderIndex(posts, container);
    }
  } catch (e) {
    console.error('[tags.js]', e);
    container.innerHTML =
      '<div class="tags-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>Could not load tags</h3>' +
        '<p>Check that <code>/data/posts.json</code> exists and is valid JSON.</p>' +
      '</div>';
  }
}

/* ── hashchange ── */
window.addEventListener('hashchange', renderTagsPage);

/* ── Arranque ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTagsPage);
} else {
  renderTagsPage();
}