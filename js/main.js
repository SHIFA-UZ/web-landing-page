/* ============================================================
   SHIFA – Digitalizing Healthcare
   Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initMobileMenu();
  initCountdown();
  initFeatureTabs();
  initNavScroll();
  initContactForm();
  initScrollTo();
  initI18n();
  initOfficesMap();
  initCookieBanner();
  initScrollReveal();
  initHeroAnimations();
});


/* ── Page Navigation ── */
function initNavigation() {
  const pages = ['product', 'features', 'pricing', 'contact', 'privacy'];

  function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('is-active'));

    // Deactivate all nav links (desktop + drawer)
    pages.forEach(id => {
      const navLink    = document.getElementById(`n-${id}`);
      const drawerLink = document.getElementById(`d-${id}`);
      if (navLink)    navLink.classList.remove('is-active');
      if (drawerLink) drawerLink.classList.remove('is-active');
    });

    // Show target page and activate its nav links
    const targetPage    = document.getElementById(`page-${pageId}`);
    const targetNavLink = document.getElementById(`n-${pageId}`);
    const targetDrawer  = document.getElementById(`d-${pageId}`);

    if (targetPage)    targetPage.classList.add('is-active');
    if (targetNavLink) targetNavLink.classList.add('is-active');
    if (targetDrawer)  targetDrawer.classList.add('is-active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.dispatchEvent(new CustomEvent('shifa:pagechange', { detail: { id: pageId } }));
  }

  // Delegate clicks on [data-page] elements
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-page]');
    if (!trigger) return;

    const pageId = trigger.dataset.page;
    if (pages.includes(pageId)) {
      e.preventDefault();
      navigateTo(pageId);

      // If a specific tab was requested, activate it after navigation
      const tabId = trigger.dataset.tab;
      if (tabId) {
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (tabBtn) tabBtn.click();
      }
    }
  });
}


/* ── Mobile Menu ── */
function initMobileMenu() {
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');

  if (!burger || !drawer) return;

  burger.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = burger.classList.toggle('is-open');
    drawer.classList.toggle('is-open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    drawer.setAttribute('aria-hidden', !isOpen);
  });

  // Close drawer when a drawer link is clicked
  drawer.addEventListener('click', e => {
    if (e.target.closest('[data-page]')) {
      closeMenu();
    }
  });

  // Close drawer on outside click
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !drawer.contains(e.target)) {
      closeMenu();
    }
  });

  function closeMenu() {
    burger.classList.remove('is-open');
    drawer.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
  }
}


/* ── Countdown Timer ── */
function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  // Update this date when you have a confirmed launch date
  const launchDate = new Date('2026-09-01T00:00:00');

  const daysEl  = document.getElementById('days');
  const hrsEl   = document.getElementById('hrs');
  const minsEl  = document.getElementById('mins');
  const secsEl  = document.getElementById('secs');

  function tick() {
    const remaining = launchDate - Date.now();

    if (remaining <= 0) {
      countdownEl.style.display = 'none';
      return;
    }

    daysEl.textContent = String(Math.floor(remaining / 86400000)).padStart(2, '0');
    hrsEl.textContent  = String(Math.floor(remaining % 86400000 / 3600000)).padStart(2, '0');
    minsEl.textContent = String(Math.floor(remaining % 3600000 / 60000)).padStart(2, '0');
    secsEl.textContent = String(Math.floor(remaining % 60000 / 1000)).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}


/* ── Feature Tabs (Patients / Doctors) ── */
function initFeatureTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanel = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('is-active'));
      tabPanels.forEach(p => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const panel = document.getElementById(`panel-${targetPanel}`);
      if (panel) {
        panel.classList.add('is-active');
        document.dispatchEvent(new CustomEvent('shifa:tabchange', { detail: { tab: targetPanel } }));
      }
    });
  });
}


/* ── Nav Scroll Shadow ── */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
  );

  // Observe a sentinel element at the top of <body>
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;height:1px;width:1px;pointer-events:none;';
  document.body.prepend(sentinel);
  observer.observe(sentinel);
}


/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.form-submit');

  form.addEventListener('submit', e => {
    e.preventDefault();

    submitBtn.textContent = t('contact.form.sent');
    submitBtn.classList.add('is-sent');

    setTimeout(() => {
      submitBtn.textContent = t('contact.form.submit');
      submitBtn.classList.remove('is-sent');
      form.reset();
    }, 3000);
  });
}


/* ── Offices Map (Leaflet + OpenStreetMap) ── */
function initOfficesMap() {
  const el = document.getElementById('offices-map');
  if (!el) return;

  const offices = [
    { name: '🇺🇿 Shifa Uzbekistan', address: 'Istiqbol street 30, Bulakbashi, Andijan', lat: 40.7829, lng: 72.3442 },
    { name: '🇩🇪 Shifa Germany',    address: 'Hansastraße 116, 13088 Berlin',           lat: 52.5486, lng: 13.4468 },
  ];

  let map = null;

  function buildMap() {
    // Wait for Leaflet to be available
    if (typeof L === 'undefined') {
      setTimeout(buildMap, 100);
      return;
    }
    if (map) {
      map.invalidateSize();
      return;
    }

    map = L.map(el, { zoomControl: true, scrollWheelZoom: false });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const icon = L.divIcon({
      className: '',
      html: '<div class="map-marker"></div>',
      iconSize:   [20, 20],
      iconAnchor: [10, 10],
      popupAnchor:[0, -13],
    });

    offices.forEach(o => {
      L.marker([o.lat, o.lng], { icon })
       .addTo(map)
       .bindPopup('<strong>' + o.name + '</strong><br>' + o.address);
    });

    map.fitBounds(L.latLngBounds(offices.map(o => [o.lat, o.lng])), { padding: [40, 40] });

    // Force tile refresh after layout settles
    setTimeout(() => map.invalidateSize(), 50);
  }

  // Build when Contact page is navigated to
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-page]');
    if (trigger && trigger.dataset.page === 'contact') {
      setTimeout(buildMap, 350);
    }
  });

  // Build immediately if Contact is the landing page
  if (document.getElementById('page-contact').classList.contains('is-active')) {
    setTimeout(buildMap, 100);
  }
}


/* ── Internationalisation ── */
function t(key) {
  const lang = document.documentElement.dataset.lang || 'en';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key])
      || (TRANSLATIONS.en  && TRANSLATIONS.en[key])
      || key;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Swap innerHTML for all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18n] || TRANSLATIONS.en[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  // Swap placeholder for all [data-i18n-placeholder] elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18nPlaceholder] || TRANSLATIONS.en[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  // Mark active lang button in every switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem('shifa-lang', lang);
}

function initI18n() {
  const saved = localStorage.getItem('shifa-lang') || 'en';
  setLanguage(saved);

  // Delegate clicks on every [data-lang] button
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (btn) setLanguage(btn.dataset.lang);
  });
}


/* ── Scroll Reveal ── */
function initScrollReveal() {
  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
  );

  function observe(root) {
    (root || document).querySelectorAll('.anim:not(.in)').forEach(el => obs.observe(el));
  }

  function resetAndObserve(root, delay) {
    (root || document).querySelectorAll('.anim.in').forEach(el => {
      obs.unobserve(el);
      el.classList.remove('in');
    });
    setTimeout(() => observe(root), delay);
  }

  // Observe everything on initial load
  observe();

  // On page navigation: reset scroll anims so they replay fresh
  document.addEventListener('shifa:pagechange', e => {
    const page = document.getElementById(`page-${e.detail.id}`);
    if (page) resetAndObserve(page, 120);
  });

  // On tab switch: reset and replay the newly-visible panel
  document.addEventListener('shifa:tabchange', e => {
    const panel = document.getElementById(`panel-${e.detail.tab}`);
    if (panel) resetAndObserve(panel, 80);
  });
}


/* ── Hero Entrance Animations (JS-driven, replays on every page visit) ── */

const HERO_ANIMS = {
  product: [
    { sel: '#page-product .countdown',   kf: 'heroFadeUp',      dur: '0.75s', delay: '0.05s' },
    { sel: '.hero-heading-main',          kf: 'heroWordReveal',  dur: '1.0s',  delay: '0.20s' },
    { sel: '.hero-heading-sub',           kf: 'heroFadeUp',      dur: '0.9s',  delay: '0.38s' },
    { sel: '.hero-subtitle',              kf: 'heroFadeUp',      dur: '0.9s',  delay: '0.54s' },
    { sel: '.hero-btns',                  kf: 'heroFadeUp',      dur: '0.9s',  delay: '0.70s' },
    { sel: '.hero-hand-img',              kf: 'heroImageEnter',  dur: '1.3s',  delay: '0.24s' },
  ],
  features: [
    { sel: '#page-features .features-hero .label',      kf: 'heroBadgePop',  dur: '0.65s', delay: '0.08s' },
    { sel: '#page-features .features-hero .heading-xl', kf: 'heroWordReveal',dur: '1.0s',  delay: '0.26s' },
    { sel: '#page-features .tab-toggle',                kf: 'heroFadeUp',    dur: '0.75s', delay: '0.50s' },
  ],
  pricing: [
    { sel: '#page-pricing .page-header .label',      kf: 'heroBadgePop',  dur: '0.65s', delay: '0.08s' },
    { sel: '#page-pricing .page-header .heading-xl', kf: 'heroWordReveal',dur: '1.0s',  delay: '0.26s' },
    { sel: '#page-pricing .page-header .body-text',  kf: 'heroFadeUp',    dur: '0.80s', delay: '0.46s' },
  ],
  contact: [
    { sel: '#page-contact .page-header .label',      kf: 'heroBadgePop',  dur: '0.65s', delay: '0.08s' },
    { sel: '#page-contact .page-header .heading-xl', kf: 'heroWordReveal',dur: '1.0s',  delay: '0.26s' },
    { sel: '#page-contact .page-header .body-text',  kf: 'heroFadeUp',    dur: '0.80s', delay: '0.46s' },
  ],
};

function playHero(pageId) {
  const items = HERO_ANIMS[pageId];
  if (!items) return;

  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  items.forEach(({ sel, kf, dur, delay }) => {
    document.querySelectorAll(sel).forEach(node => {
      // Cancel any running animation, force reflow, then start fresh
      node.style.animation = 'none';
      void node.offsetHeight; // synchronous reflow commits the reset
      node.style.animation = `${kf} ${dur} ${ease} ${delay} both`;
    });
  });

  // After product hero image finishes entering, start its floating loop
  if (pageId === 'product') {
    const img = document.querySelector('.hero-hand-img');
    if (img) {
      img.classList.remove('is-floating');
      // entrance: 1.3s duration + 0.24s delay ≈ 1.55s
      setTimeout(() => img.classList.add('is-floating'), 1600);
    }
  }
}

function initHeroAnimations() {
  // Play the product (initial) page hero right away
  playHero('product');

  // Replay the appropriate hero whenever the user navigates
  document.addEventListener('shifa:pagechange', e => {
    playHero(e.detail.id);
  });

  // Scroll-out: slide hand back down when user scrolls past the hero
  initHandScrollOut();
}

function initHandScrollOut() {
  const img = document.querySelector('.hero-hand-img');
  if (!img) return;

  const hero = document.querySelector('#page-product .hero');
  if (!hero) return;

  let exited = false;

  const obs = new IntersectionObserver(
    ([entry]) => {
      const onProductPage = document.getElementById('page-product').classList.contains('is-active');
      if (!onProductPage) return;

      if (!entry.isIntersecting && !exited) {
        // Hero scrolled out of view — slide the hand down
        exited = true;
        img.classList.remove('is-floating');
        img.classList.add('is-exiting');
      } else if (entry.isIntersecting && exited) {
        // Hero scrolled back into view — replay entrance
        exited = false;
        img.classList.remove('is-exiting');
        playHero('product');
      }
    },
    // Trigger when bottom 30% of hero leaves viewport
    { threshold: 0, rootMargin: '0px 0px -30% 0px' }
  );

  obs.observe(hero);

  // Reset state on page navigation (in case user leaves and returns)
  document.addEventListener('shifa:pagechange', e => {
    if (e.detail.id !== 'product') {
      exited = false;
      img.classList.remove('is-exiting');
    }
  });
}


/* ── Scroll-To Links ── */
function initScrollTo() {
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-scroll-to]');
    if (!trigger) return;
    e.preventDefault();
    const targetId = trigger.dataset.scrollTo;
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}


/* ── Cookie Banner ── */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const STORAGE_KEY = 'shifa-cookies';

  // Show banner if no choice has been saved yet
  if (!localStorage.getItem(STORAGE_KEY)) {
    // Small delay so the page paints before sliding in
    setTimeout(() => banner.classList.add('is-visible'), 600);
  }

  function dismiss(choice) {
    localStorage.setItem(STORAGE_KEY, choice);
    banner.classList.remove('is-visible');
  }

  document.getElementById('cookie-accept').addEventListener('click', () => dismiss('accepted'));
  document.getElementById('cookie-reject').addEventListener('click', () => dismiss('rejected'));
}
