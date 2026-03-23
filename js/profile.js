/* ============================================================
   ZureFX — profile.js
   Carga los posts más recientes desde posts-1.json (mismo
   sistema de chunks que app.js) y los renderiza en la página
   de perfil. Depende de app.js (cargado antes).
   ============================================================ */

async function loadRecentPosts() {
  var container = document.getElementById('postsContainer');
  if (!container) return;

  /* Mostrar skeleton mientras carga */
  container.innerHTML =
    '<div class="skeleton-row" style="opacity:.4"></div>' +
    '<div class="skeleton-row" style="opacity:.3;animation-delay:.15s"></div>' +
    '<div class="skeleton-row" style="opacity:.2;animation-delay:.3s"></div>';

  var prefix = getRootPrefix();   /* reutiliza la función de app.js */

  try {
    var res = await fetch(prefix + 'data/posts-1.json?v=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);

    var posts = await res.json();

    /* posts-1.json ya viene ordenado por fecha desc — solo tomamos los 3 primeros */
    var recent = posts.slice(0, 3);

    if (!recent.length) {
      container.innerHTML =
        '<p style="color:var(--text-3);text-align:center;padding:2rem 0;' +
        'font-family:var(--mono);font-size:0.6rem;letter-spacing:0.08em;">No posts yet.</p>';
      return;
    }

    container.innerHTML = '';

    /* misma lógica de app.js: list en mobile, grid en desktop */
    container.appendChild(isMobile() ? renderList(recent) : renderGrid(recent));

  } catch (err) {
    console.error('[profile.js]', err);
    container.innerHTML =
      '<p style="color:var(--text-3);text-align:center;padding:2rem 0;' +
      'font-family:var(--mono);font-size:0.6rem;letter-spacing:0.08em;">Could not load posts.</p>';
  }
}

/* Re-renderizar al cambiar tamaño de ventana */
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