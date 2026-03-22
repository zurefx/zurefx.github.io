/* ============================================================
   ZureFX — profile.js
   Carga los 5 posts más recientes y los renderiza igual que
   app.js (grid en desktop, list en mobile).
   Depende de app.js (debe cargarse antes).
   ============================================================ */

function getRootPrefixProfile() {
  var depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
}

async function loadRecentPosts() {
  var container = document.getElementById('postsContainer');
  if (!container) return;

  var prefix = getRootPrefixProfile();

  try {
    var res = await fetch(prefix + 'data/post.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    var posts = await res.json();

    /* excluir projects, ordenar por fecha */
    posts = posts
      .filter(function(p) { return p.section !== 'projects'; })
      .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

    var recent = posts.slice(0, 3);

    if (!recent.length) {
      container.innerHTML =
        '<p style="color:var(--text-3);text-align:center;padding:2rem 0;' +
        'font-family:var(--mono);font-size:0.6rem;letter-spacing:0.08em;">No posts yet.</p>';
      return;
    }

    container.innerHTML = '';

    /* misma lógica de app.js: list en mobile, grid en desktop */
    var el = isMobile() ? renderList(recent) : renderGrid(recent);
    container.appendChild(el);

  } catch (err) {
    console.error('[profile.js]', err);
    container.innerHTML =
      '<p style="color:var(--text-3);text-align:center;padding:2rem 0;' +
      'font-family:var(--mono);font-size:0.6rem;letter-spacing:0.08em;">Could not load posts.</p>';
  }
}

/* re-renderizar al cambiar tamaño de ventana (igual que app.js) */
var _profileResizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(_profileResizeTimer);
  _profileResizeTimer = setTimeout(loadRecentPosts, 120);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadRecentPosts);
} else {
  loadRecentPosts();
}