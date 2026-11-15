const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

// Intersection observers add motion only when the browser and user preference allow it.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window) {
  const header = document.querySelector('.site-header');

  if (header) {
    const sentinel = document.createElement('span');
    sentinel.className = 'header-scroll-sentinel';
    sentinel.setAttribute('aria-hidden', 'true');
    header.before(sentinel);

    const headerObserver = new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-scrolled', !entry.isIntersecting);
    });
    headerObserver.observe(sentinel);
  }

  if (!reducedMotion.matches && 'animate' in Element.prototype) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        observer.unobserve(element);

        if (reducedMotion.matches) return;

        const isCard = element.classList.contains('menu-card');
        const cardIndex = isCard
          ? Array.prototype.indexOf.call(element.parentElement.children, element)
          : 0;

        element.animate(
          [
            { opacity: 0, transform: 'translateY(24px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          {
            duration: isCard ? 680 : 740,
            delay: isCard ? cardIndex * 120 : 0,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'backwards',
          },
        );
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    document.querySelectorAll(
      '.about-grid, .menu-intro, .category-nav, .category-heading, .menu-card, .contact-grid, .footer-top',
    ).forEach((element) => revealObserver.observe(element));
  }
}
