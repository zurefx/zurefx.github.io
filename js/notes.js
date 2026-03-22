/* ============================================================
   ZureFX — notes.js
   Lee /data/post.json, filtra section:"notes",
   agrupa filtros por subsection, búsqueda en tiempo real.
   Primera card = featured (span 2 columnas).
   ============================================================ */

(function () {

  /* ── DOM refs ── */
  var grid      = document.getElementById('notes-grid');
  var filtersEl = document.getElementById('notes-filters');
  var searchEl  = document.getElementById('notes-search');
  var emptyEl   = document.getElementById('notes-empty');
  var totalEl   = document.getElementById('notesTotal');

  if (!grid) return;

  /* ── Root prefix (igual que app.js) ── */
  function getRootPrefixNotes() {
    var depth = (window.location.pathname.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : '';
  }

  /* ── Helpers ── */
  function formatDateNote(dateString) {
    try {
      var parts = dateString.split('-').map(Number);
      var d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
    } catch (_) { return dateString.toUpperCase(); }
  }

  function escNote(s) {
    return String(s || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Skeleton ── */
  function showSkeleton() {
    grid.innerHTML = Array(6).fill('<div class="note-skeleton"></div>').join('');
  }

  /* ── State ── */
  var notes       = [];
  var activeSub   = 'all';
  var searchQuery = '';

  /* ── Render ── */
  function render() {
    var q = searchQuery.toLowerCase();

    var filtered = notes.filter(function(note) {
      var noteSub     = (note.subsection || '').trim();
      var matchSub    = activeSub === 'all' || noteSub === activeSub;
      var matchSearch = !q ||
        note.title.toLowerCase().includes(q) ||
        (note.description || '').toLowerCase().includes(q) ||
        (note.tags || []).some(function(t) { return t.toLowerCase().includes(q); });
      return matchSub && matchSearch;
    });

    grid.innerHTML = '';

    if (!filtered.length) {
      emptyEl.classList.remove('hidden');
      return;
    }

    emptyEl.classList.add('hidden');
    filtered.forEach(function(note, i) {
      grid.appendChild(buildCard(note, i));
    });
  }

  /* ── Build card ── */
  function buildCard(note, index) {
    var a = document.createElement('a');
    a.className = index === 0 ? 'note-card note-featured' : 'note-card';
    a.href = note.permalink || '#';
    a.style.animationDelay = (0.03 + index * 0.04) + 's';

    var sub  = (note.subsection || '').trim();
    var desc = note.description || '';
    var tags = (note.tags || []).slice(0, 5);

    var tagsHTML = tags
      .map(function(t) { return '<span class="note-card-tag">#' + escNote(t) + '</span>'; })
      .join('');

    var imgHTML = note.image
      ? '<div class="note-card-img-wrap">' +
          '<img class="note-card-img" src="' + escNote(note.image) + '" alt="' + escNote(note.title) + '" loading="lazy"' +
            ' onerror="this.closest(\'.note-card-img-wrap\').remove()">' +
        '</div>'
      : '';

    a.innerHTML =
      imgHTML +
      '<div class="note-card-body">' +
        (sub ? '<span class="note-card-sub">' + escNote(sub) + '</span>' : '') +
        '<h2 class="note-card-title">' + escNote(note.title) + '</h2>' +
        '<p class="note-card-desc">' + escNote(desc) + '</p>' +
        (tagsHTML ? '<div class="note-card-tags">' + tagsHTML + '</div>' : '') +
        '<div class="note-card-foot">' +
          '<span class="note-card-date">' + formatDateNote(note.date) + '</span>' +
          '<span class="note-card-arrow" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M9 18l6-6-6-6"/>' +
            '</svg>' +
          '</span>' +
        '</div>' +
      '</div>';

    return a;
  }

  /* ── Filter clicks ── */
  filtersEl.addEventListener('click', function(e) {
    var btn = e.target.closest('.notes-filter-btn');
    if (!btn) return;
    document.querySelectorAll('.notes-filter-btn').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeSub = btn.dataset.sub || 'all';
    render();
  });

  /* ── Search ── */
  if (searchEl) {
    searchEl.addEventListener('input', function(e) {
      searchQuery = e.target.value.trim();
      render();
    });
  }

  /* ── Update total stat ── */
  function updateTotal(n) {
    if (totalEl) totalEl.querySelector('span').textContent = n + ' note' + (n !== 1 ? 's' : '');
  }

  /* ── Fetch & boot ── */
  showSkeleton();

  var prefix = getRootPrefixNotes();

  fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' })
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(all) {
      notes = all.filter(function(p) { return p.section === 'notes'; });
      notes.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

      updateTotal(notes.length);

      /* ── Filter buttons por subsection ── */
      var subCount = new Map();
      notes.forEach(function(n) {
        var sub = (n.subsection || '').trim();
        if (sub) subCount.set(sub, (subCount.get(sub) || 0) + 1);
      });

      Array.from(subCount.entries())
        .sort(function(a, b) { return a[0].localeCompare(b[0]); })
        .forEach(function(entry) {
          var sub = entry[0], count = entry[1];
          var btn = document.createElement('button');
          btn.className   = 'notes-filter-btn';
          btn.dataset.sub = sub;
          btn.innerHTML   = escNote(sub) + ' <span class="fc">' + count + '</span>';
          filtersEl.appendChild(btn);
        });

      render();
    })
    .catch(function(err) {
      console.error('[notes.js]', err);
      grid.innerHTML =
        '<div class="notes-empty">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
            '<circle cx="12" cy="12" r="10"/>' +
            '<line x1="12" y1="8" x2="12" y2="12"/>' +
            '<line x1="12" y1="16" x2="12.01" y2="16"/>' +
          '</svg>' +
          'Could not load notes.' +
        '</div>';
    });

})();