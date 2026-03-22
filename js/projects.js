/* ============================================================
   ZureFX — projects.js
   Lee /data/post.json, filtra section:"projects",
   agrupa por subsection y renderiza cards con features + botón.
   ============================================================ */

function getRootPrefixProjects() {
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

function esc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showSkeleton(container) {
  container.innerHTML =
    '<div class="proj-skel-group">' +
      '<div class="proj-skel-heading"></div>' +
      '<div class="proj-skel-card"></div>' +
      '<div class="proj-skel-card"></div>' +
    '</div>' +
    '<div class="proj-skel-group">' +
      '<div class="proj-skel-heading"></div>' +
      '<div class="proj-skel-card"></div>' +
    '</div>';
}

function renderStats(projects) {
  var el = document.getElementById('projStats');
  if (!el) return;

  var cats = [];
  projects.forEach(function(p) {
    if (p.subsection && cats.indexOf(p.subsection) === -1) cats.push(p.subsection);
  });
  var picks = projects.filter(function(p) { return p.pick === 1 || p.pick === true; }).length;

  var html =
    '<span class="proj-stat">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
        '<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>' +
      '</svg>' +
      projects.length + ' project' + (projects.length !== 1 ? 's' : '') +
    '</span>' +
    '<span class="proj-stat">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
        '<line x1="8" y1="6" x2="21" y2="6"/>' +
        '<line x1="8" y1="12" x2="21" y2="12"/>' +
        '<line x1="8" y1="18" x2="21" y2="18"/>' +
        '<line x1="3" y1="6" x2="3.01" y2="6"/>' +
        '<line x1="3" y1="12" x2="3.01" y2="12"/>' +
        '<line x1="3" y1="18" x2="3.01" y2="18"/>' +
      '</svg>' +
      cats.length + ' categor' + (cats.length !== 1 ? 'ies' : 'y') +
    '</span>';

  if (picks) {
    html +=
      '<span class="proj-stat proj-stat-pick">' +
        '<svg viewBox="0 0 24 24" fill="currentColor">' +
          '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>' +
        '</svg>' +
        picks + ' pick' + (picks !== 1 ? 's' : '') +
      '</span>';
  }

  el.innerHTML = html;
}

function buildCard(p) {
  var isExt   = p.permalink && p.permalink.startsWith('http');
  var isPick  = p.pick === 1 || p.pick === true;
  var desc    = p.description || '';
  var btnLabel = p.btn_label || 'View Project';

  /* ── features list ── */
  var featuresHTML = '';
  if (Array.isArray(p.features) && p.features.length) {
    featuresHTML =
      '<ul class="proj-card-features">' +
      p.features.map(function(f) {
        return '<li>' + esc(f) + '</li>';
      }).join('') +
      '</ul>';
  }

  /* ── tags ── */
  var tagsHTML = '';
  if (Array.isArray(p.tags) && p.tags.length) {
    tagsHTML =
      '<div class="proj-card-tags">' +
      p.tags.map(function(t) {
        return '<span class="proj-card-tag">' + esc(t) + '</span>';
      }).join('') +
      '</div>';
  }

  /* ── pick badge ── */
  var pickHTML = isPick
    ? '<span class="proj-pick-badge">' +
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' +
        'Pick' +
      '</span>'
    : '';

  return (
    '<div class="proj-card' + (isPick ? ' proj-card-pick' : '') + '">' +
      '<div class="proj-card-header">' +
        '<h3 class="proj-card-title">' + esc(p.title || p.name || '') + '</h3>' +
        pickHTML +
      '</div>' +
      (desc ? '<p class="proj-card-desc">' + esc(desc) + '</p>' : '') +
      featuresHTML +
      '<div class="proj-card-footer">' +
        tagsHTML +
        '<a href="' + esc(p.permalink || '#') + '" class="proj-card-btn"' +
          (isExt ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' +
          btnLabel +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
            (isExt
              ? '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'
              : '<polyline points="9 18 15 12 9 6"/>') +
          '</svg>' +
        '</a>' +
      '</div>' +
    '</div>'
  );
}

(async function () {

  var container = document.getElementById('projectsContainer');
  if (!container) return;

  showSkeleton(container);

  var prefix   = getRootPrefixProjects();
  var projects = [];

  try {
    var res = await fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var raw  = await res.json();
    var all  = Array.isArray(raw) ? raw : (raw.projects || []);
    projects = all.filter(function(p) { return p.section === 'projects'; });
    projects.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  } catch (err) {
    console.error('[projects.js]', err);
    container.innerHTML =
      '<div class="proj-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="10"/>' +
          '<line x1="12" y1="8" x2="12" y2="12"/>' +
          '<line x1="12" y1="16" x2="12.01" y2="16"/>' +
        '</svg>' +
        '<h3>Could not load projects</h3>' +
        '<p>Check that <code>/data/post.json</code> exists and is valid JSON.</p>' +
      '</div>';
    return;
  }

  renderStats(projects);

  if (!projects.length) {
    container.innerHTML =
      '<div class="proj-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">' +
          '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>' +
        '</svg>' +
        '<h3>No projects yet</h3>' +
        '<p>Check back soon — something is brewing.</p>' +
      '</div>';
    return;
  }

  /* ── Agrupar por subsection preservando orden ── */
  var groups = new Map();
  projects.forEach(function(p) {
    var key = p.subsection || 'Projects';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(p);
  });

  var html = '';
  groups.forEach(function(items, name) {
    var cards = items.map(buildCard).join('');

    html +=
      '<div class="proj-section">' +
        '<div class="proj-section-heading">' +
          '<div class="proj-section-left">' +
            '<span class="proj-section-dot"></span>' +
            '<span class="proj-section-label">' + esc(name) + '</span>' +
          '</div>' +
          '<span class="proj-section-count">' + items.length + ' project' + (items.length !== 1 ? 's' : '') + '</span>' +
        '</div>' +
        '<div class="proj-cards">' + cards + '</div>' +
      '</div>';
  });

  container.innerHTML = html;

})();