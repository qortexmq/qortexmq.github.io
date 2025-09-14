// Enhanced animations system
(() => {
  const revealClass = 'reveal';
  const visibleClass = 'visible';
  
  // Animation types for different elements
  const animationTypes = {
    'fadeInUp': 'animate-fadeInUp',
    'fadeInLeft': 'animate-fadeInLeft', 
    'fadeInRight': 'animate-fadeInRight',
    'scaleIn': 'animate-scaleIn',
    'slideInFromTop': 'animate-slideInFromTop'
  };

  function init() {
    const items = document.querySelectorAll(`.${revealClass}`);
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add(visibleClass));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add(visibleClass);
          
          // Add specific animation based on data attribute
          const animationType = e.target.dataset.animation || 'fadeInUp';
          if (animationTypes[animationType]) {
            e.target.classList.add(animationTypes[animationType]);
          }
          
          observer.unobserve(e.target);
        }
      }
    }, { 
      rootMargin: '0px 0px -10% 0px', 
      threshold: 0.1 
    });

    items.forEach((el) => observer.observe(el));
  }

  // Parallax effect for hero section
  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }

  // Typing effect for terminal elements
  function initTypingEffect() {
    const terminals = document.querySelectorAll('.terminal-body');
    terminals.forEach(terminal => {
      const lines = terminal.querySelectorAll('div');
      lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
          line.style.transition = 'all 0.3s ease';
          line.style.opacity = '1';
          line.style.transform = 'translateX(0)';
        }, index * 100);
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Hover effects for interactive elements
  function initHoverEffects() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn, .cta').forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add floating effect to cards
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }

  // Loading animations
  function initLoadingAnimations() {
    // Add loading state to forms
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.classList.add('loading');
          submitBtn.textContent = 'Отправляем...';
        }
      });
    });
  }

  // Success/error animations
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after animation
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Mouse trail effect
  function initMouseTrail() {
    let trail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
      const dot = document.createElement('div');
      dot.className = 'mouse-trail';
      dot.style.left = e.pageX + 'px';
      dot.style.top = e.pageY + 'px';
      document.body.appendChild(dot);
      
      trail.push(dot);
      
      if (trail.length > maxTrailLength) {
        const oldDot = trail.shift();
        oldDot.remove();
      }
      
      // Animate trail dots
      trail.forEach((dot, index) => {
        setTimeout(() => {
          dot.style.opacity = '0';
          dot.style.transform = 'scale(0)';
        }, index * 50);
      });
    });
  }

  // Initialize all animations
  function initAll() {
    init();
    initParallax();
    initTypingEffect();
    initSmoothScroll();
    initHoverEffects();
    initLoadingAnimations();
    
    // Mouse trail only on desktop
    if (window.innerWidth > 768) {
      initMouseTrail();
    }
  }

  // Expose functions globally
  window.QortexAnimations = {
    showNotification,
    initTypingEffect
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else { 
    initAll(); 
  }
})();


