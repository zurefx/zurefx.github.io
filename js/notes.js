/* ============================================================
   ZureFX — notes.js  (v4)
   Carga en paralelo todos los chunks con Promise.all, filtra solo notes,
   renderiza de golpe con DocumentFragment. Sin skeleton, sin animationDelay, sin imágenes.
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
  var allNotes  = [];
  var activeSub = 'all';
  var searchQ   = '';

  /* ══════════════════════════════════════════════════════
     FETCH CHUNK
     Cada chunk que falle devuelve [].
     ══════════════════════════════════════════════════════ */
  function fetchChunk(idx) {
    var url = getRootPrefix() + 'data/posts-' + idx + '.json?v=' + Date.now();
    return fetch(url, { cache: 'no-cache' })
      .then(res => res.ok ? res.json() : [])
      .catch(() => []);
  }

  /* ══════════════════════════════════════════════════════
     LOAD ALL CHUNKS EN PARALELO
     Se detiene en el primer vacío (optimización) 
     y evita over-fetching de 50 requests innecesarios.
     ══════════════════════════════════════════════════════ */
  async function loadAllChunks() {
    let promises = [];
    for (let i = 1; i <= MAX_CHUNKS; i++) promises.push(fetchChunk(i));

    let results = await Promise.all(promises);
    let seen = {};
    let posts = [];

    for (let chunk of results) {
      if (!Array.isArray(chunk) || chunk.length === 0) break;
      chunk.forEach(p => {
        if (!seen[p.id]) { seen[p.id] = true; posts.push(p); }
      });
    }

    return posts;
  }

  /* ══════════════════════════════════════════════════════
     BUILD CARD — sin imagen ni delay
     ══════════════════════════════════════════════════════ */
  function buildCard(note, featured) {
    var a = document.createElement('a');
    a.className = featured ? 'note-card note-featured' : 'note-card';
    a.href      = note.permalink || '#';

    var sub  = (note.subsection || '').trim();
    var tags = (note.tags || []).slice(0, 5);

    var tagsHTML = tags.map(t => '<span class="note-card-tag">#' + escN(t) + '</span>').join('');

    a.innerHTML =
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

  /* ══════════════════════════════════════════════════════
     RENDER con DocumentFragment
     ══════════════════════════════════════════════════════ */
  function render() {
    let q = searchQ.toLowerCase();
    let filtered = allNotes.filter(note => {
      let noteSub  = (note.subsection || '').trim();
      let matchSub = activeSub === 'all' || noteSub === activeSub;
      let matchQ   = !q ||
        note.title.toLowerCase().includes(q) ||
        (note.description || '').toLowerCase().includes(q) ||
        (note.tags || []).some(t => t.toLowerCase().includes(q));
      return matchSub && matchQ;
    });

    grid.innerHTML = '';
    if (!filtered.length) { emptyEl && emptyEl.classList.remove('hidden'); return; }
    emptyEl && emptyEl.classList.add('hidden');

    let frag = document.createDocumentFragment();
    filtered.forEach((note, i) => frag.appendChild(buildCard(note, i === 0)));
    grid.appendChild(frag);
  }

  /* ══════════════════════════════════════════════════════
     BOOT — loading mínimo
     ══════════════════════════════════════════════════════ */
  grid.innerHTML =
    '<div style="padding:40px 0;text-align:center;font-family:var(--mono);' +
    'font-size:0.58rem;letter-spacing:0.1em;color:var(--text-3)">LOADING…</div>';

  loadAllChunks().then(allPosts => {

    /* Filtrar solo notes y ordenar desc */
    allNotes = allPosts.filter(p => p.section === 'notes')
                       .sort((a,b) => new Date(b.date) - new Date(a.date));

    if (totalEl) totalEl.querySelector('span').textContent =
      allNotes.length + ' note' + (allNotes.length !== 1 ? 's' : '');

    /* Botones filtro subsección */
    let subCount = new Map();
    allNotes.forEach(n => {
      let sub = (n.subsection || '').trim();
      if (sub) subCount.set(sub, (subCount.get(sub) || 0) + 1);
    });

    let frag = document.createDocumentFragment();
    Array.from(subCount.entries())
      .sort((a,b) => a[0].localeCompare(b[0]))
      .forEach(entry => {
        let btn = document.createElement('button');
        btn.className   = 'notes-filter-btn';
        btn.dataset.sub = entry[0];
        btn.innerHTML   = escN(entry[0]) + ' <span class="fc">' + entry[1] + '</span>';
        frag.appendChild(btn);
      });
    filtersEl.appendChild(frag);

    /* Render inicial */
    render();

    /* Filter clicks */
    filtersEl.addEventListener('click', e => {
      let btn = e.target.closest('.notes-filter-btn');
      if (!btn) return;
      document.querySelectorAll('.notes-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSub = btn.dataset.sub || 'all';
      render();
    });

    /* Search debounce */
    if (searchEl) {
      let _st;
      searchEl.addEventListener('input', e => {
        clearTimeout(_st);
        _st = setTimeout(() => { searchQ = e.target.value.trim(); render(); }, 100);
      });
    }

  }).catch(err => {
    console.error('[notes.js]', err);
    grid.innerHTML = '<div class="notes-empty">Could not load notes.</div>';
  });

})();