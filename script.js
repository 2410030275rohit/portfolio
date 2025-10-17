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

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Animate sections on scroll
  document.querySelectorAll('.section, .card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.opacity = '0.9';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.opacity = '1';
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = '';
      }
    });
  });
})();
