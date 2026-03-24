/* ============================================================
   ZureFX — tags.js  (v5 — tags-only, ultra-fast)
   Solo muestra el índice de tags como pills. Sin renderizado
   de posts. Lee data/tags.json y construye el cloud.
   Depende de app.js (cargado antes): getRootPrefix().
   ============================================================ */

var _tags_index  = null;
var _tags_loaded = false;

function escT(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════════════════════
   LOAD — lee data/tags.json (objeto indexado por tag)
   ══════════════════════════════════════════════════════ */
function tagsLoadIndex() {
  if (_tags_loaded) return Promise.resolve(_tags_index);

  var url = getRootPrefix() + 'data/tags.json?v=' + Date.now();
  return fetch(url, { cache: 'no-store' })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      _tags_index  = (data && typeof data === 'object' && !Array.isArray(data)) ? data : {};
      _tags_loaded = true;
      console.log('[ZFX] tags — loaded ' + Object.keys(_tags_index).length + ' tags');
      return _tags_index;
    })
    .catch(function(err) {
      console.warn('[tags.js] Could not load tags.json:', err);
      _tags_index  = {};
      _tags_loaded = true;
      return {};
    });
}

/* ── Update stats pill ── */
function updateTagsStats(text) {
  var el = document.getElementById('tagsTotal');
  if (el) el.querySelector('span').textContent = text;
}

/* ── Skeleton mínimo ── */
function renderTagsSkeleton(container) {
  container.innerHTML =
    '<div class="tag-skeleton-group">' +
      '<div class="tag-skeleton-heading"></div>' +
    '</div>';
}

/* ══════════════════════════════════════════════════════════════
   RENDER: solo tag cloud (pills)
   ══════════════════════════════════════════════════════════════ */
function renderIndex(index, container) {
  var entries = Object.entries(index);

  document.title = 'Tags — ZureFX';
  updateTagsStats(entries.length + ' tag' + (entries.length !== 1 ? 's' : ''));

  var cloud = document.createElement('div');
  cloud.className = 'tags-cloud';

  entries.forEach(function(entry) {
    var tg = entry[0], count = entry[1].length;
    var btn = document.createElement('a');
    btn.className   = 'tags-cloud-pill';
    btn.dataset.tag = tg;
    btn.href        = 'tags.html#' + encodeURIComponent(tg);
    btn.innerHTML   = escT(tg) + '<span class="pill-count">' + count + '</span>';
    cloud.appendChild(btn);
  });

  container.innerHTML = '';
  container.appendChild(cloud);
}

/* ══════════════════════════════════════════════════════════════
   MAIN ENTRY POINT
   ══════════════════════════════════════════════════════════════ */
async function renderTagsPage() {
  var container = document.getElementById('tagsContainer');
  if (!container) return;

  renderTagsSkeleton(container);

  try {
    var index = await tagsLoadIndex();
    renderIndex(index, container);
  } catch (e) {
    console.error('[tags.js]', e);
    container.innerHTML =
      '<div class="tags-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>Could not load tags</h3>' +
        '<p>Check that <code>/data/tags.json</code> exists and is valid JSON.</p>' +
      '</div>';
  }
}

/* ── Arranque ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTagsPage);
} else {
  renderTagsPage();
}