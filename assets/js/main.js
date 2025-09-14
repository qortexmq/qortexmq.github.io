// Misc site logic: year, contact form handling
(() => {
  function setYear() {
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }


  function navMenu() {
    const btn = document.getElementById('menuToggle');
    const nav = document.getElementById('primaryNav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!open()) return;
      if (!nav.contains(e.target) && e.target !== btn) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    const open = () => nav.classList.contains('open');
  }

  function documentationDropdown() {
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
    const dropdownMenu = document.querySelector('.nav-dropdown-menu');
    
    if (!dropdownToggle || !dropdownMenu) {
      console.log('Dropdown elements not found');
      return;
    }

    // Check if device supports hover (desktop)
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 820;
    
    console.log('Device detection:', {
      isHoverSupported,
      isTouchDevice,
      screenWidth: window.innerWidth,
      isSmallScreen
    });
    
    // Use click behavior for small screens, touch devices, or when hover is not supported
    if (isHoverSupported && !isTouchDevice && !isSmallScreen) {
      // Desktop with large screen: use hover behavior (CSS handles this)
      console.log('Using hover behavior');
      return;
    }
    
    console.log('Using click behavior for mobile/small screen');

    // Remove emojis from mobile menu
    const menuLinks = dropdownMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      const originalText = link.textContent;
      // Remove emojis (first character) and keep the rest
      const textWithoutEmoji = originalText.replace(/^[\u{1F300}-\u{1F9FF}]/u, '').trim();
      if (textWithoutEmoji !== originalText) {
        link.textContent = textWithoutEmoji;
      }
    });

    // Mobile/Touch: use click behavior
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = dropdownMenu.classList.toggle('show');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Debug log
      console.log('Dropdown toggled:', isOpen ? 'open' : 'closed');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdownMenu.classList.contains('show')) return;
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        console.log('Dropdown closed by outside click');
      }
    });

    // Handle window resize - switch between hover and click behavior
    let currentBehavior = null;
    function updateBehavior() {
      const isHoverSupported = window.matchMedia('(hover: hover)').matches;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 820;
      
      const shouldUseHover = isHoverSupported && !isTouchDevice && !isSmallScreen;
      
      if (currentBehavior !== shouldUseHover) {
        currentBehavior = shouldUseHover;
        console.log('Behavior changed to:', shouldUseHover ? 'hover' : 'click');
        
        // Close dropdown when switching behaviors
        dropdownMenu.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    }
    
    // Initial behavior setup
    updateBehavior();
    
    // Listen for window resize
    window.addEventListener('resize', updateBehavior);
  }

  function languageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const currentLangSpan = document.getElementById('currentLang');

    if (!langToggle || !langDropdown || !currentLangSpan) return;

    // Ensure dropdown is closed on init
    langDropdown.classList.remove('show');
    langToggle.setAttribute('aria-expanded', 'false');

    // Set initial language display based on current URL
    const currentPathname = window.location.pathname;
    if (currentPathname.startsWith('/en/')) {
      currentLangSpan.textContent = 'EN';
    } else {
      currentLangSpan.textContent = 'RU';
    }

    langToggle.addEventListener('click', () => {
      const isOpen = langDropdown.classList.toggle('show');
      langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    langDropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = link.getAttribute('data-lang');
        let newPath = currentPathname;

        if (selectedLang === 'en') {
          if (!currentPathname.startsWith('/en/')) {
            newPath = '/en' + currentPathname;
          }
        } else if (selectedLang === 'ru') {
          if (currentPathname.startsWith('/en/')) {
            newPath = currentPathname.replace('/en', '');
            if (newPath === '') newPath = '/';
          }
        }

        if (newPath !== currentPathname) {
          window.location.href = newPath;
        } else {
          // If already on the selected language, just close dropdown
          langDropdown.classList.remove('show');
          langToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('show');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        langDropdown.classList.remove('show');
        langToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Handle bfcache restore (Safari/Firefox back-forward cache)
    window.addEventListener('pageshow', () => {
      langDropdown.classList.remove('show');
      langToggle.setAttribute('aria-expanded', 'false');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { setYear(); navMenu(); documentationDropdown(); languageSwitcher(); registerSW(); bindEvents(); });
  } else { setYear(); navMenu(); documentationDropdown(); languageSwitcher(); registerSW(); bindEvents(); }
})();

function registerSW() {
  if ('serviceWorker' in navigator) {
    if (location.hostname === 'qortexmq.github.io') {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    } else {
      // In development, ensure no SW remains registered
      try {
        navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
        if (window.caches && caches.keys) {
          caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
        }
      } catch {}
    }
  }
}

function bindEvents() {
  const track = (name, params) => {
    try { window.gtag && gtag('event', name, params || {}); } catch {}
    try { window.ym && ym(window.YM_ID || 0, 'reachGoal', name); } catch {}
  };
  document.querySelectorAll('a.cta, a[data-dl]').forEach((el) => {
    el.addEventListener('click', () => track('cta_click', { label: el.textContent?.trim() }));
  });
}


