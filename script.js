// script.js
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

function initYear() {
  const y = qs('#year');
  if (y) y.textContent = new Date().getFullYear();
}

function initMobileMenu() {
  const burger = qs('.burger');
  const drawer = qs('#mobileMenu');
  const closeBtn = qs('.mobile__close');
  const backdrop = qs('.backdrop');

  const open = () => {
    drawer.classList.add('open');
    backdrop.classList.add('show');
    burger.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  burger?.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  backdrop?.addEventListener('click', close);
  qsa('.mobile__links a').forEach(a => a.addEventListener('click', close));
}

function initSmoothScroll() {
  qsa('[data-link]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = qs(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      }
    });
  });
}

function initActiveOnScroll() {
  const map = new Map();
  qsa('.nav__link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      const sec = qs(href);
      if (sec) map.set(sec, a);
    }
  });

  const indicator = qs('.nav__indicator');
  const nav = qs('.nav__links');

  const setIndicatorTo = (link) => {
    if (!link || !indicator || !nav) return;
    const lr = link.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    indicator.style.left = `${lr.left - nr.left}px`;
    indicator.style.width = `${lr.width}px`;
  };

  const setActive = (link) => {
    qsa('.nav__link').forEach(a => a.classList.toggle('active', a === link));
    setIndicatorTo(link);
  };

  // Hover slide effect
  qsa('.nav__link').forEach(a => {
    a.addEventListener('mouseenter', () => setIndicatorTo(a));
  });
  nav?.addEventListener('mouseleave', () => {
    const active = qs('.nav__link.active');
    setIndicatorTo(active);
  });
  window.addEventListener('resize', () => {
    const active = qs('.nav__link.active');
    setIndicatorTo(active);
  });

  // Intersection Observer for sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target);
        if (entry.isIntersecting && link) setActive(link);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0, 1] }
  );

  map.forEach((_, section) => observer.observe(section));

  // Init indicator to current hash or first
  const initial =
    qs(`.nav__link[href="${location.hash || '#home'}"]`) || qs('.nav__link');
  if (initial) setActive(initial);
}

function initRevealOnView() {
  const revealables = qsa('.card, .hero__content, .skills__grid, .contact, .hero__visual');
  revealables.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealables.forEach(el => io.observe(el));
}

function initActiveOnScroll() {
  const map = new Map();
  qsa('.nav__link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) {
      const sec = qs(href);
      if (sec) map.set(sec, a);
    }
  });

  const indicator = qs('.nav__indicator');
  const nav = qs('.nav__links');

  const setIndicatorTo = (link) => {
    if (!link || !indicator || !nav) return;
    // Hide indicator on mobile (nav hidden)
    if (window.matchMedia('(max-width: 740px)').matches) {
      indicator.style.width = '0px';
      return;
    }
    const lr = link.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    indicator.style.left = `${lr.left - nr.left}px`;
    indicator.style.width = `${lr.width}px`;
  };

  const setActive = (link) => {
    // desktop
    qsa('.nav__link').forEach(a => a.classList.toggle('active', a === link));
    // mobile sync
    const href = link?.getAttribute('href');
    if (href) {
      qsa('.mobile__links a').forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === href)
      );
    }
    setIndicatorTo(link);
  };

  // Hover slide effect (desktop only)
  qsa('.nav__link').forEach(a => {
    a.addEventListener('mouseenter', () => setIndicatorTo(a));
  });
  nav?.addEventListener('mouseleave', () => {
    const active = qs('.nav__link.active');
    setIndicatorTo(active);
  });

  // Recalculate on resize (debounced)
  let rid;
  const onResize = () => {
    clearTimeout(rid);
    rid = setTimeout(() => {
      const active = qs('.nav__link.active');
      setIndicatorTo(active);
    }, 80);
  };
  window.addEventListener('resize', onResize);

  // Intersection Observer for sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target);
        if (entry.isIntersecting && link) setActive(link);
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: [0, 1] }
  );

  map.forEach((_, section) => observer.observe(section));

  // Init indicator to current hash or first
  const initial =
    qs(`.nav__link[href="${location.hash || '#home'}"]`) || qs('.nav__link');
  if (initial) setActive(initial);
}



document.addEventListener('DOMContentLoaded', () => {
  initYear();
  initMobileMenu();
  initSmoothScroll();
  initActiveOnScroll();
  initRevealOnView();
});