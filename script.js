(function() {
  const root = document.body;
  const toggle = document.querySelector('.theme-toggle');
  const yearEl = document.getElementById('year');

  // Persist theme choice
  const key = 'pref-theme';
  const saved = localStorage.getItem(key);
  if (saved === 'light') root.classList.add('light');

  toggle?.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem(key, root.classList.contains('light') ? 'light' : 'dark');
  });

  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
})();
