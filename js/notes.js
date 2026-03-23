/* ============================================================
   ZureFX — notes.js  (v3)
   Carga en paralelo todos los chunks, filtra solo notes,
   renderiza de golpe con DocumentFragment. Sin skeleton,
   sin animationDelay, sin imágenes.
   Depende de app.js: getRootPrefix(), fmtDate(), capitalize().
   ============================================================ */

(function () {

  /* ── DOM refs ── */
  var grid      = document.getElementById('notes-grid');
  var filtersEl = document.getElementById('notes-filters');
  var searchEl  = document.getElementById('notes-search');
  var emptyEl   = document.getElementById('notes-empty');
  var totalEl   = document.getElementById('notesTotal');
  if (!grid) return;

  /* ── Config ── */
  var MAX_CHUNKS = 50;

  /* ── Helpers ── */
  function escN(s) {
    return String(s || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── State de filtros ── */
  var allNotes  = [];   /* todas las notes cargadas, ordenadas por fecha */
  var activeSub = 'all';
  var searchQ   = '';

  /* ══════════════════════════════════════════════════════
     CARGA EN PARALELO
     Lanza todos los fetches a la vez con Promise.all.
     Cada chunk que falle (404) simplemente devuelve [].
     No hay lazy loading — queremos todo de golpe.
     ══════════════════════════════════════════════════════ */
  function fetchChunk(idx) {
    var url = getRootPrefix() + 'data/posts-' + idx + '.json';
    return fetch(url, { cache: 'no-cache' })
      .then(function(res) { return res.ok ? res.json() : []; })
      .catch(function()   { return []; });
  }

  /* Carga chunks 1..MAX_CHUNKS en paralelo y para en el primero vacío */
  async function loadAllChunks() {
    var seen  = {};
    var posts = [];

    /* Carga secuencialmente hasta encontrar un chunk vacío (404 / [])
       Así no hacemos 50 requests innecesarios — paramos en cuanto
       hay un hueco. Más rápido que lazy pero sin over-fetching. */
    for (var i = 1; i <= MAX_CHUNKS; i++) {
      var chunk = await fetchChunk(i);
      if (!Array.isArray(chunk) || chunk.length === 0) break;
      chunk.forEach(function(p) {
        if (!seen[p.id]) { seen[p.id] = true; posts.push(p); }
      });
    }

    return posts;
  }

  /* ══════════════════════════════════════════════════════
     BUILD CARD — sin imagen, sin animationDelay
     Igual que antes pero sin el delay por índice
     y sin el bloque de imagen.
     ══════════════════════════════════════════════════════ */
  function buildCard(note, featured) {
    var a = document.createElement('a');
    a.className = featured ? 'note-card note-featured' : 'note-card';
    a.href      = note.permalink || '#';

    var sub  = (note.subsection || '').trim();
    var tags = (note.tags || []).slice(0, 5);

    var tagsHTML = tags.map(function(t) {
      return '<span class="note-card-tag">#' + escN(t) + '</span>';
    }).join('');

    a.innerHTML =
      '<div class="note-card-body">' +
        (sub ? '<span class="note-card-sub">' + escN(sub) + '</span>' : '') +
        '<h2 class="note-card-title">' + escN(note.title) + '</h2>' +
        '<p class="note-card-desc">'   + escN(note.description || '') + '</p>' +
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

  /* ══════════════════════════════════════════════════════
     RENDER con DocumentFragment
     Una sola escritura al DOM — sin reflows intermedios.
     ══════════════════════════════════════════════════════ */
  function render() {
    var q = searchQ.toLowerCase();

    var filtered = allNotes.filter(function(note) {
      var noteSub  = (note.subsection || '').trim();
      var matchSub = activeSub === 'all' || noteSub === activeSub;
      var matchQ   = !q ||
        note.title.toLowerCase().includes(q) ||
        (note.description || '').toLowerCase().includes(q) ||
        (note.tags || []).some(function(t) { return t.toLowerCase().includes(q); });
      return matchSub && matchQ;
    });

    /* Una sola asignación a innerHTML para limpiar */
    grid.innerHTML = '';

    if (!filtered.length) {
      emptyEl && emptyEl.classList.remove('hidden');
      return;
    }
    emptyEl && emptyEl.classList.add('hidden');

    /* DocumentFragment → una sola inserción al DOM */
    var frag = document.createDocumentFragment();
    filtered.forEach(function(note, i) {
      frag.appendChild(buildCard(note, i === 0));
    });
    grid.appendChild(frag);
  }

  /* ══════════════════════════════════════════════════════
     BOOT — sin skeleton, muestra loading mínimo
     ══════════════════════════════════════════════════════ */
  grid.innerHTML =
    '<div style="padding:40px 0;text-align:center;font-family:var(--mono);' +
    'font-size:0.58rem;letter-spacing:0.1em;color:var(--text-3)">LOADING…</div>';

  loadAllChunks().then(function(allPosts) {

    /* Filtrar solo notes y ordenar por fecha desc */
    allNotes = allPosts
      .filter(function(p) { return p.section === 'notes'; })
      .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

    /* Stat total */
    if (totalEl) totalEl.querySelector('span').textContent =
      allNotes.length + ' note' + (allNotes.length !== 1 ? 's' : '');

    /* Botones de filtro por subsección */
    var subCount = new Map();
    allNotes.forEach(function(n) {
      var sub = (n.subsection || '').trim();
      if (sub) subCount.set(sub, (subCount.get(sub) || 0) + 1);
    });

    var frag = document.createDocumentFragment();
    Array.from(subCount.entries())
      .sort(function(a, b) { return a[0].localeCompare(b[0]); })
      .forEach(function(entry) {
        var btn = document.createElement('button');
        btn.className   = 'notes-filter-btn';
        btn.dataset.sub = entry[0];
        btn.innerHTML   = escN(entry[0]) + ' <span class="fc">' + entry[1] + '</span>';
        frag.appendChild(btn);
      });
    filtersEl.appendChild(frag);

    /* Render inicial */
    render();

    /* Filter clicks */
    filtersEl.addEventListener('click', function(e) {
      var btn = e.target.closest('.notes-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.notes-filter-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeSub = btn.dataset.sub || 'all';
      render();
    });

    /* Search — debounce ligero para no re-renderizar en cada tecla */
    if (searchEl) {
      var _st;
      searchEl.addEventListener('input', function(e) {
        clearTimeout(_st);
        _st = setTimeout(function() {
          searchQ = e.target.value.trim();
          render();
        }, 80);
      });
    }

  }).catch(function(err) {
    console.error('[notes.js]', err);
    grid.innerHTML = '<div class="notes-empty">Could not load notes.</div>';
  });

})();