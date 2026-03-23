/* ============================================================
   ZureFX — notes.js  (v2)
   Carga progresiva por chunks — igual que app.js y tags.js.
   Filtra section:"notes", agrupa por subsection, búsqueda
   en tiempo real. Mismo formato de card que tags.js.
   Depende de app.js: getRootPrefix(), SECTION_COLOR_MAP,
   fmtDate(), capitalize().
   ============================================================ */

(function () {

  /* ── DOM refs ── */
  var grid      = document.getElementById('notes-grid');
  var filtersEl = document.getElementById('notes-filters');
  var searchEl  = document.getElementById('notes-search');
  var emptyEl   = document.getElementById('notes-empty');
  var totalEl   = document.getElementById('notesTotal');
  if (!grid) return;

  /* ── Estado de chunks ── */
  var _notes_posts   = [];
  var _notes_chunk   = 0;
  var _notes_loaded  = false;
  var _notes_loading = false;
  var MAX_CHUNKS_N   = 50;

  /* ── Cargar siguiente chunk ── */
  async function notesLoadNextChunk() {
    if (_notes_loaded || _notes_loading) return [];
    if (_notes_chunk >= MAX_CHUNKS_N) { _notes_loaded = true; return []; }

    _notes_loading = true;
    var nextIdx = _notes_chunk + 1;
    var url = getRootPrefix() + 'data/posts-' + nextIdx + '.json?v=' + Date.now();

    try {
      var res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) { _notes_loaded = true; _notes_loading = false; return []; }

      var incoming = await res.json();
      if (!Array.isArray(incoming) || !incoming.length) {
        _notes_loaded = true; _notes_loading = false; return [];
      }

      var existing = {};
      _notes_posts.forEach(function(p) { existing[p.id] = true; });
      var unique = incoming.filter(function(p) { return !existing[p.id]; });

      _notes_posts   = _notes_posts.concat(unique);
      _notes_chunk   = nextIdx;
      _notes_loading = false;
      return unique;
    } catch (e) {
      _notes_loaded = true; _notes_loading = false; return [];
    }
  }

  /* ── Cargar todos los chunks (necesitamos todas las notes) ── */
  async function notesLoadAll() {
    while (!_notes_loaded) {
      var added = await notesLoadNextChunk();
      if (!added.length) break;
    }
  }

  /* ── Helpers ── */
  function escN(s) {
    return String(s || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── State de filtros ── */
  var activeSub   = 'all';
  var searchQuery = '';

  /* ── Build compact row (mismo formato que tags.js) ── */
  /* ── Build card (formato grid — .note-card en .notes-grid) ── */
  function buildCard(note, index) {
    var a = document.createElement('a');
    a.className = index === 0 ? 'note-card note-featured' : 'note-card';
    a.href = note.permalink || '#';
    a.style.animationDelay = (0.03 + index * 0.04) + 's';

    var sub  = (note.subsection || '').trim();
    var tags = (note.tags || []).slice(0, 5);

    var tagsHTML = tags.map(function(t) {
      return '<span class="note-card-tag">#' + escN(t) + '</span>';
    }).join('');

    var imgHTML = note.image
      ? '<div class="note-card-img-wrap">' +
          '<img class="note-card-img" src="' + escN(note.image) + '" alt="' + escN(note.title) + '" loading="lazy"' +
          ' onerror="this.closest(\'.note-card-img-wrap\').remove()">' +
        '</div>'
      : '';

    a.innerHTML =
      imgHTML +
      '<div class="note-card-body">' +
        (sub ? '<span class="note-card-sub">' + escN(sub) + '</span>' : '') +
        '<h2 class="note-card-title">' + escN(note.title) + '</h2>' +
        '<p class="note-card-desc">' + escN(note.description || '') + '</p>' +
        (tagsHTML ? '<div class="note-card-tags">' + tagsHTML + '</div>' : '') +
        '<div class="note-card-foot">' +
          '<span class="note-card-date">' + fmtDate(note.date) + '</span>' +
          '<span class="note-card-arrow" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M9 18l6-6-6-6"/>' +
            '</svg>' +
          '</span>' +
        '</div>' +
      '</div>';

    return a;
  }

  /* ── Render filtrado → directo al grid ── */
  function render(notes) {
    var q = searchQuery.toLowerCase();

    var filtered = notes.filter(function(note) {
      var noteSub  = (note.subsection || '').trim();
      var matchSub = activeSub === 'all' || noteSub === activeSub;
      var matchQ   = !q ||
        note.title.toLowerCase().includes(q) ||
        (note.description || '').toLowerCase().includes(q) ||
        (note.tags || []).some(function(t) { return t.toLowerCase().includes(q); });
      return matchSub && matchQ;
    });

    grid.innerHTML = '';

    if (!filtered.length) {
      emptyEl && emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl && emptyEl.classList.add('hidden');

    /* Las cards van directo al #notes-grid — el CSS hace el grid */
    filtered.forEach(function(note, i) { grid.appendChild(buildCard(note, i)); });
  }

  /* ── Skeleton ── */
  function showSkeleton() {
    grid.innerHTML =
      '<div style="display:flex;flex-direction:column;gap:6px">' +
      Array(6).fill('<div class="note-skeleton"></div>').join('') +
      '</div>';
  }

  /* ── Boot ── */
  showSkeleton();

  notesLoadAll().then(function() {
    var notes = _notes_posts
      .filter(function(p) { return p.section === 'notes'; })
      .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

    if (totalEl) totalEl.querySelector('span').textContent =
      notes.length + ' note' + (notes.length !== 1 ? 's' : '');

    /* Botones de filtro por subsection */
    var subCount = new Map();
    notes.forEach(function(n) {
      var sub = (n.subsection || '').trim();
      if (sub) subCount.set(sub, (subCount.get(sub) || 0) + 1);
    });

    Array.from(subCount.entries())
      .sort(function(a, b) { return a[0].localeCompare(b[0]); })
      .forEach(function(entry) {
        var btn = document.createElement('button');
        btn.className   = 'notes-filter-btn';
        btn.dataset.sub = entry[0];
        btn.innerHTML   = escN(entry[0]) + ' <span class="fc">' + entry[1] + '</span>';
        filtersEl.appendChild(btn);
      });

    render(notes);

    /* Filter clicks */
    filtersEl.addEventListener('click', function(e) {
      var btn = e.target.closest('.notes-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.notes-filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeSub = btn.dataset.sub || 'all';
      render(notes);
    });

    /* Search */
    if (searchEl) {
      searchEl.addEventListener('input', function(e) {
        searchQuery = e.target.value.trim();
        render(notes);
      });
    }

  }).catch(function(err) {
    console.error('[notes.js]', err);
    grid.innerHTML = '<div class="notes-empty">Could not load notes.</div>';
  });

})();