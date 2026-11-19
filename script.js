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

document.querySelectorAll('.menu-category').forEach((category) => {
  const track = category.querySelector('.menu-grid');
  const cards = Array.from(track.querySelectorAll('.menu-card'));
  const previous = category.querySelector('.carousel-prev');
  const next = category.querySelector('.carousel-next');
  const count = category.querySelector('.carousel-count');
  const viewAll = category.querySelector('.carousel-view-all');
  if (!previous || !next || !count || !viewAll || !cards.length) return;

  const visibleCards = () => window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
  const cardStep = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 1;
  const firstVisible = () => Math.min(Math.round(track.scrollLeft / cardStep()), cards.length - visibleCards());

  const updateCount = () => {
    if (category.classList.contains('is-expanded')) return;
    const first = firstVisible();
    count.textContent = `${first + 1}–${Math.min(first + visibleCards(), cards.length)} of ${cards.length}`;
  };

  const move = (direction) => {
    const pageSize = visibleCards();
    const pageCount = Math.ceil(cards.length / pageSize);
    const currentPage = Math.floor(firstVisible() / pageSize);
    const nextPage = (currentPage + direction + pageCount) % pageCount;
    const first = Math.min(nextPage * pageSize, cards.length - pageSize);
    track.scrollTo({
      left: cards[first].offsetLeft - cards[0].offsetLeft,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', updateCount, { passive: true });
  window.addEventListener('resize', updateCount);

  let touchStart;
  track.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStart = {
      x: touch.clientX,
      y: touch.clientY,
      atStart: track.scrollLeft <= 2,
      atEnd: track.scrollLeft >= track.scrollWidth - track.clientWidth - 2,
    };
  }, { passive: true });
  track.addEventListener('touchend', (event) => {
    if (!touchStart || category.classList.contains('is-expanded')) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0 && touchStart.atEnd) move(1);
      if (dx > 0 && touchStart.atStart) move(-1);
    }
    touchStart = null;
  }, { passive: true });

  viewAll.addEventListener('click', () => {
    const expanded = category.classList.toggle('is-expanded');
    track.classList.toggle('is-expanded', expanded);
    track.setAttribute('tabindex', expanded ? '-1' : '0');
    viewAll.setAttribute('aria-expanded', String(expanded));
    viewAll.textContent = expanded ? 'Show fewer items' : `View all ${cards.length} items`;
    track.scrollLeft = 0;
    updateCount();
  });

  updateCount();
});

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
          delay: isCard ? cardIndex % 4 * 120 : 0,
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
