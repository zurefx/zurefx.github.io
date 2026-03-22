/* ══════════════════════════════════════════════════════════════════════════
   ZureFX — search.js
   Lee de /data/post.json · Trigger: #search-toggle (.icon-btn)
   ══════════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Estado ── */
  let posts         = [];
  let isOpen        = false;
  let selectedIdx   = -1;
  let currentQuery  = '';
  let debounceTimer = null;

  /* ── DOM refs ── */
  let overlay, modal, input, resultsEl;

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', () => {
    buildModal();
    bindTriggers();
    preloadPosts();
  });

  /* ── Preload post.json ── */
  async function preloadPosts() {
    try {
      const res = await fetch('/data/post.json?v=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const raw = await res.json();
      const seen = new Set();
      posts = raw.filter(p => {
        if (seen.has(p.permalink)) return false;
        seen.add(p.permalink); return true;
      });
    } catch (e) {
      console.warn('[search.js] /data/post.json not found.');
    }
  }

  /* ── Build modal DOM ── */
  function buildModal() {
    /* overlay */
    overlay = document.createElement('div');
    overlay.id = 'search-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    /* modal */
    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Search posts');

    /* header */
    const header = document.createElement('div');
    header.className = 'search-header';
    header.innerHTML = `
      <svg class="search-input-icon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    `;

    input = document.createElement('input');
    input.type = 'text';
    input.id = 'search-input';
    input.placeholder = 'Search posts, tags, sections…';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('spellcheck', 'false');

    const closeBtn = document.createElement('button');
    closeBtn.className = 'search-close-btn';
    closeBtn.setAttribute('aria-label', 'Close search');
    closeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>`;
    closeBtn.addEventListener('click', closeSearch);

    header.appendChild(input);
    header.appendChild(closeBtn);

    /* meta bar */
    const metaBar = document.createElement('div');
    metaBar.className = 'search-meta-bar';
    metaBar.innerHTML = `
      <span class="search-count" id="search-count"></span>
      <span class="search-hint">
        <kbd>↑↓</kbd> navigate &nbsp;
        <kbd>↵</kbd> open &nbsp;
        <kbd>Esc</kbd> close
      </span>
    `;

    /* results */
    resultsEl = document.createElement('div');
    resultsEl.id = 'search-results';
    resultsEl.setAttribute('role', 'listbox');

    /* empty */
    const emptyEl = document.createElement('div');
    emptyEl.className = 'search-empty';
    emptyEl.id = 'search-empty';
    emptyEl.innerHTML = `
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="28" cy="28" r="18"/>
        <path d="M40 40l12 12" stroke-linecap="round"/>
        <path d="M22 28h12M28 22v12" stroke-linecap="round"/>
      </svg>
      <p>No results found</p>
      <span>Try different keywords or check spelling</span>
    `;

    modal.appendChild(header);
    modal.appendChild(metaBar);
    modal.appendChild(resultsEl);
    modal.appendChild(emptyEl);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    /* events */
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
    input.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => runSearch(input.value.trim()), 80);
    });
    document.addEventListener('keydown', handleKeydown);
  }

  /* ── Bind triggers ── */
  function bindTriggers() {
    const btn = document.getElementById('search-toggle') || document.querySelector('.search-btn');
    if (btn) btn.addEventListener('click', () => isOpen ? closeSearch() : openSearch());
  }

  /* ── Open / Close ── */
  function openSearch() {
    isOpen = true;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 60);
    if (!currentQuery) showRecent();
  }

  function closeSearch() {
    isOpen = false;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    input.value = '';
    currentQuery = '';
    selectedIdx = -1;
    resultsEl.innerHTML = '';
    setCount('');
    setEmpty(false);
  }

  /* ── Recent posts (default) ── */
  function showRecent() {
    if (!posts.length) return;
    const recent = [...posts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
    renderResults(recent, '', 'Recent posts');
    setCount('');
  }

  /* ── Search ── */
  function runSearch(query) {
    currentQuery = query;
    selectedIdx = -1;

    if (!query) { showRecent(); setEmpty(false); return; }

    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

    const scored = posts.map(post => {
      const titleLow   = (post.title   || '').toLowerCase();
      const descLow    = (post.description || post.summary || '').toLowerCase();
      const sectionLow = (post.section || '').toLowerCase();
      const tagsLow    = (post.tags    || []).join(' ').toLowerCase();

      let score = 0; let allMatch = true;
      for (const t of terms) {
        const hit = titleLow.includes(t) || descLow.includes(t) ||
                    sectionLow.includes(t) || tagsLow.includes(t);
        if (!hit) { allMatch = false; break; }
        if (titleLow.includes(t))   score += 10;
        if (tagsLow.includes(t))    score += 6;
        if (sectionLow.includes(t)) score += 3;
        if (descLow.includes(t))    score += 1;
      }
      return allMatch ? { post, score } : null;
    }).filter(Boolean).sort((a, b) => b.score - a.score).map(r => r.post);

    if (scored.length === 0) {
      resultsEl.innerHTML = '';
      setCount('No results');
      setEmpty(true);
    } else {
      setEmpty(false);
      setCount(scored.length + (scored.length === 1 ? ' result' : ' results'));
      renderResults(scored, query);
    }
  }

  /* ── Render ── */
  function renderResults(items, query, label) {
    resultsEl.innerHTML = '';

    if (label) {
      const lbl = document.createElement('div');
      lbl.className = 'search-results-label';
      lbl.textContent = label;
      resultsEl.appendChild(lbl);
    }

    items.forEach((post, i) => {
      const item = document.createElement('a');
      item.className = 'search-result-item';
      item.href = post.permalink;
      item.setAttribute('role', 'option');
      item.dataset.idx = i;

      const section = post.section || 'post';
      const color   = sectionColor(section);
      const desc    = post.description || post.summary || '';
      const tags    = (post.tags || []).slice(0, 4);

      item.innerHTML = `
        <div class="sr-left">
          <div class="sr-section" style="--sc:${color}">${esc(section)}</div>
          <div class="sr-title">${hl(post.title || 'Untitled', query)}</div>
          <div class="sr-summary">${hl(trunc(desc, 120), query)}</div>
          ${tags.length ? `<div class="sr-tags">${tags.map(tag => {
            const match = query && tag.toLowerCase().includes(query.toLowerCase());
            return `<span class="sr-tag${match ? ' sr-tag--match' : ''}">${esc(tag)}</span>`;
          }).join('')}</div>` : ''}
        </div>
        <div class="sr-right">
          <svg class="sr-arrow" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      `;

      item.addEventListener('mouseenter', () => { selectedIdx = i; updateSelected(); });
      resultsEl.appendChild(item);
    });
  }

  /* ── Keyboard nav ── */
  function handleKeydown(e) {
    if (!isOpen) {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
        const active = document.activeElement;
        const typing = active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable);
        if (!typing || e.key === 'k') { e.preventDefault(); openSearch(); }
      }
      return;
    }
    const items = resultsEl.querySelectorAll('.search-result-item');
    switch (e.key) {
      case 'Escape':   e.preventDefault(); closeSearch(); break;
      case 'ArrowDown':
        e.preventDefault();
        selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
        updateSelected(); scrollIntoView(); break;
      case 'ArrowUp':
        e.preventDefault();
        selectedIdx = Math.max(selectedIdx - 1, 0);
        updateSelected(); scrollIntoView(); break;
      case 'Enter':
        e.preventDefault();
        const t = items[selectedIdx] || items[0];
        if (t) t.click(); break;
    }
  }

  function updateSelected() {
    resultsEl.querySelectorAll('.search-result-item').forEach((el, i) => {
      el.classList.toggle('is-selected', i === selectedIdx);
    });
  }

  function scrollIntoView() {
    const items = resultsEl.querySelectorAll('.search-result-item');
    if (items[selectedIdx]) items[selectedIdx].scrollIntoView({ block: 'nearest' });
  }

  /* ── Helpers ── */
  function setCount(text) {
    const el = document.getElementById('search-count');
    if (el) el.textContent = text;
  }

  function setEmpty(show) {
    const el = document.getElementById('search-empty');
    if (el) el.style.display = show ? 'flex' : 'none';
  }

  function hl(text, query) {
    if (!query || !text) return esc(text);
    const safe  = esc(text);
    const terms = query.trim().split(/\s+/).filter(Boolean);
    let out = safe;
    terms.forEach(t => {
      const re = new RegExp(`(${escRe(esc(t))})`, 'gi');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }

  function trunc(str, max) {
    if (!str || str.length <= max) return str;
    return str.slice(0, max).replace(/\s+\S*$/, '') + '…';
  }

  function esc(str) {
    if (!str) return '';
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function escRe(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function sectionColor(section) {
    const map = {
      writeups:       '#cc2b2b',
      research:       '#7c3aed',
      scripting:      '#16a34a',
      notes:          '#ca8a04',
      'cheat-sheets': '#0891b2',
      tools:          '#db2777',
    };
    return map[(section || '').toLowerCase()] || '#525252';
  }

})();