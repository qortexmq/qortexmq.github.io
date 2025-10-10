// Theme controller: light, dark with persistence (dark by default)
(() => {
  const root = document.documentElement;
  const storageKey = 'qortex-theme-v2';
  const labelEl = () => document.getElementById('themeLabel');
  const toggleBtn = () => document.getElementById('themeToggle');
  const logoImg = () => document.querySelector('.logo-img');
  const themeIcon = () => document.getElementById('themeIcon');

  function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    }
    const label = labelEl();
    const isEnglish = (root.lang || '').toLowerCase().startsWith('en') || window.location.pathname.startsWith('/en/');
    const labels = isEnglish ? { dark: 'Dark', light: 'Light' } : { dark: 'Тёмная', light: 'Светлая' };
    if (label) label.textContent = theme === 'dark' ? labels.dark : labels.light;
    
    // Update theme icon
    const icon = themeIcon();
    if (icon) {
      if (theme === 'dark') {
        // Moon icon for dark theme
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        icon.setAttribute('class', 'feather feather-moon');
      } else {
        // Sun icon for light theme
        icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        icon.setAttribute('class', 'feather feather-sun');
      }
    }
    
    // Update logo based on theme
    const logo = logoImg();
    if (logo) {
      const isEn = window.location.pathname.startsWith('/en/');
      const base = isEn ? '/' : '/';
      logo.src = theme === 'dark' ? base + 'assets/img/logo-dark.svg' : base + 'assets/img/logo-light.svg';
    }
  }

  function loadTheme() {
    const saved = localStorage.getItem(storageKey);
    return saved || 'dark'; // Dark theme by default
  }

  function nextTheme(current) {
    return current === 'dark' ? 'light' : 'dark';
  }

  function init() {
    let current = loadTheme();
    applyTheme(current);
    const btn = toggleBtn();
    if (btn) {
      btn.addEventListener('click', () => {
        current = nextTheme(loadTheme());
        localStorage.setItem(storageKey, current);
        applyTheme(current);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
