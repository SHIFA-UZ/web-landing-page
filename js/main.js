/* ============================================================
   SHIFA – Digitalizing Healthcare
   Main JavaScript
   ============================================================ */

// Apply theme before paint to prevent flash
(function () {
  if (localStorage.getItem('shifa-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

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
  initDarkMode();
  initAIChat();
  initBookingWidget();
  initVideoWidget();
  initDoctorWidget();
  initEhrWidget({
    widgetId:      'ehrd-widget',
    mainId:        'ehrd-main',
    modalEmptyId:  'ehrd-modal-empty',
    modalFilledId: 'ehrd-modal-filled',
    uploadBtnId:   'ehrd-upload-btn',
    selectBtnId:   'ehrd-select-btn',
    submitBtnId:   'ehrd-submit-btn',
    cursorId:      'ehrd-cursor',
    bloodRowId:    'ehrd-blood-row',
  });
  initEhrWidget({
    widgetId:      'ehrp-widget',
    mainId:        'ehrp-main',
    modalEmptyId:  'ehrp-modal-empty',
    modalFilledId: 'ehrp-modal-filled',
    uploadBtnId:   'ehrp-upload-btn',
    selectBtnId:   'ehrp-select-btn',
    submitBtnId:   'ehrp-submit-btn',
    cursorId:      'ehrp-cursor',
  });
  initSmrWidget();
  initAIReportWidget();
  initFeatureChatWidget();
  initPmWidget();
  initAnlWidget();
  initCalWidget();
  initRxWidget();
});


/* ── Page Navigation ── */
function initNavigation() {
  const pages = ['product', 'features', 'pricing', 'contact', 'privacy'];

  function navigateTo(pageId, skipScroll) {
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

    if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    sessionStorage.setItem('shifa-page', pageId);
    document.dispatchEvent(new CustomEvent('shifa:pagechange', { detail: { id: pageId } }));
  }

  // Restore saved page on refresh
  const saved = sessionStorage.getItem('shifa-page');
  if (saved && pages.includes(saved) && saved !== 'product') {
    navigateTo(saved, true);
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
  const launchDate = new Date('2026-06-05T00:00:00');

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
  let submitting = false;

  // Set timestamp for bot timing detection
  const tsField = form.querySelector('input[name="_t"]');
  if (tsField) tsField.value = Math.floor(Date.now() / 1000);

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (submitting) return;
    submitting = true;

    // Client-side validation
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      submitting = false;
      form.reportValidity();
      return;
    }
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      submitting = false;
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      submitting = false;
      form.elements.email.setCustomValidity(t('contact.form.error'));
      form.reportValidity();
      form.elements.email.setCustomValidity('');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t('contact.form.sending');

    try {
      const res = await fetch('send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        submitBtn.textContent = t('contact.form.error');
        submitBtn.classList.add('is-error');
        return;
      }

      submitBtn.textContent = t('contact.form.sent');
      submitBtn.classList.add('is-sent');
      form.reset();
      // Reset timestamp for next submission
      if (tsField) tsField.value = Math.floor(Date.now() / 1000);
    } catch {
      submitBtn.textContent = t('contact.form.error');
      submitBtn.classList.add('is-error');
    } finally {
      setTimeout(() => {
        submitting = false;
        submitBtn.disabled = false;
        submitBtn.textContent = t('contact.form.submit');
        submitBtn.classList.remove('is-sent', 'is-error');
      }, 3000);
    }
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
  if (TRANSLATIONS[lang] && key in TRANSLATIONS[lang]) return TRANSLATIONS[lang][key];
  if (TRANSLATIONS.en && key in TRANSLATIONS.en) return TRANSLATIONS.en[key];
  return key;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Swap innerHTML for all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = (key in TRANSLATIONS[lang]) ? TRANSLATIONS[lang][key] : TRANSLATIONS.en[key];
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

  // Keep form language field in sync
  const langField = document.querySelector('input[name="_lang"]');
  if (langField) langField.value = lang;

  localStorage.setItem('shifa-lang', lang);
  document.dispatchEvent(new CustomEvent('shifa:langchange', { detail: { lang } }));
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
    { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
  );

  // Add section-level enter-from-bottom to every section except the hero
  document.querySelectorAll('main section:not(.hero)').forEach(section => {
    if (!section.classList.contains('anim')) {
      // If already in view on load, mark as done to avoid flash
      const rect = section.getBoundingClientRect();
      section.classList.add('anim');
      if (rect.top < window.innerHeight) section.classList.add('in');
    }
  });

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
    { sel: '.hero-heading-sub',  kf: 'heroFadeUp', dur: '0.6s', delay: '0.02s' },
    { sel: '#page-product .countdown-unit:nth-child(1)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.12s' },
    { sel: '#page-product .countdown-unit:nth-child(2)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.21s' },
    { sel: '#page-product .countdown-unit:nth-child(3)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.30s' },
    { sel: '#page-product .countdown-unit:nth-child(4)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.39s' },
    { sel: '.hero-heading-main', kf: 'heroFadeUp', dur: '0.7s', delay: '0.25s' },
    { sel: '.hero-subtitle',     kf: 'heroFadeUp', dur: '0.6s', delay: '0.50s' },
    { sel: '.hero-btns',         kf: 'heroFadeUp', dur: '0.6s', delay: '0.62s' },
    { sel: '.hero-hand-img',     kf: 'heroImageEnter', dur: '2.0s', delay: '0.10s' },
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


  // After entrance completes, hand off to parallax controller
  if (pageId === 'product') {
    const img = document.querySelector('.hero-hand-img');
    if (img) {
      // entrance: 2.0s duration + 0.10s delay
      setTimeout(() => enableHandParallax(img), 2200);
    }
  }
}

function enableHandParallax(img) {
  // Lock in opacity + transform so clearing animation doesn't flash
  img.style.opacity = '1';
  img.style.transform = 'translateY(0)';
  img.style.animation = '';
  img._parallaxReady = true;
}

function initHandParallax() {
  const img = document.querySelector('.hero-hand-img');
  const hero = document.querySelector('#page-product .hero');
  if (!img || !hero) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!img._parallaxReady || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const onProduct = document.getElementById('page-product').classList.contains('is-active');
      if (!onProduct) { ticking = false; return; }

      const progress = Math.max(0, Math.min(1, window.scrollY / hero.offsetHeight));
      img.style.transform = `translateY(${progress * 180}px)`;
      img.style.opacity = String(Math.max(0, 1 - progress * 2.5));
      ticking = false;
    });
  }, { passive: true });
}

function initHeroAnimations() {
  initHandParallax();

  playHero('product');

  document.addEventListener('shifa:pagechange', e => {
    // Reset parallax state when navigating back to product
    const img = document.querySelector('.hero-hand-img');
    if (img && e.detail.id === 'product') {
      img._parallaxReady = false;
      img.style.opacity = '';
      img.style.transform = '';
    }
    playHero(e.detail.id);
  });
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


/* ── Dark Mode ── */
function initDarkMode() {
  const toggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle-drawer'),
  ].filter(Boolean);

  function setTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('shifa-theme', dark ? 'dark' : 'light');
  }

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setTheme(!isDark);
    });
  });
}


/* ── Cookie Banner ── */
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const STORAGE_KEY = 'shifa-cookies';

  // Show banner if no choice has been saved yet
  if (!localStorage.getItem(STORAGE_KEY)) {
    setTimeout(() => banner.classList.add('is-visible'), 600);
  }

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    banner.classList.remove('is-visible');
  }

  function decline() {
    // Clear all localStorage except the cookie choice itself
    const keys = Object.keys(localStorage);
    keys.forEach(k => { if (k !== STORAGE_KEY) localStorage.removeItem(k); });
    localStorage.setItem(STORAGE_KEY, 'declined');
    sessionStorage.clear();
    banner.classList.remove('is-visible');
  }

  document.getElementById('cookie-accept').addEventListener('click', accept);
  document.getElementById('cookie-reject').addEventListener('click', decline);
}


/* ── AI Chat Widget ── */
function initAIChat() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  function getMessages() {
    return [
      { from: 'user', text: t('ai.widget.msg1.user') },
      { from: 'ai',   text: t('ai.widget.msg1.ai')  },
      { from: 'user', text: t('ai.widget.msg2.user') },
      { from: 'ai',   text: t('ai.widget.msg2.ai')  },
      { from: 'user', text: t('ai.widget.msg3.user') },
      { from: 'ai',   text: t('ai.widget.msg3.ai')  },
    ];
  }

  const TYPING_MS   = 1600;
  const READ_MS     = 2200;
  const USER_GAP_MS = 1100;

  let started  = false;
  let sequence = null;

  function createBubble(msg) {
    const row = document.createElement('div');
    row.className = `chat-msg chat-msg--${msg.from}`;
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = msg.text;
    row.appendChild(bubble);
    return row;
  }

  function createTyping() {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--ai';
    row.innerHTML = '<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>';
    return row;
  }

  function scrollBottom() {
    container.scrollTop = container.scrollHeight;
  }

  function runSequence(messages, index) {
    if (index >= messages.length) {
      sequence = setTimeout(() => {
        container.innerHTML = '';
        runSequence(getMessages(), 0);
      }, 3000);
      return;
    }

    const msg = messages[index];

    if (msg.from === 'user') {
      const delay = index === 0 ? 0 : USER_GAP_MS;
      sequence = setTimeout(() => {
        container.appendChild(createBubble(msg));
        scrollBottom();
        runSequence(messages, index + 1);
      }, delay);
    } else {
      sequence = setTimeout(() => {
        const typing = createTyping();
        container.appendChild(typing);
        scrollBottom();

        sequence = setTimeout(() => {
          container.removeChild(typing);
          container.appendChild(createBubble(msg));
          scrollBottom();
          runSequence(messages, index + 1);
        }, TYPING_MS);
      }, USER_GAP_MS);
    }
  }

  function restart() {
    clearTimeout(sequence);
    container.innerHTML = '';
    runSequence(getMessages(), 0);
  }

  // Start when widget enters viewport (IntersectionObserver)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(() => runSequence(getMessages(), 0), READ_MS);
      }
    });
  }, { threshold: 0.3 });

  const widget = container.closest('.ai-chat-widget');
  if (widget) observer.observe(widget);

  // Restart with new language when user switches languages
  document.addEventListener('shifa:langchange', () => {
    if (started) restart();
  });
}


/* ── Booking Widget ── */
function initBookingWidget() {
  const widget = document.getElementById('booking-widget');
  const toggle = document.getElementById('bw-toggle');
  const cursor = document.getElementById('bw-cursor');
  if (!widget || !toggle || !cursor) return;

  let started = false;
  let seq = null;

  function wait(ms, fn) { seq = setTimeout(fn, ms); }

  function getTogglePos() {
    const wr = widget.getBoundingClientRect();
    const tr = toggle.getBoundingClientRect();
    return {
      x: tr.left + tr.width  / 2 - wr.left,
      y: tr.top  + tr.height / 2 - wr.top,
    };
  }

  function resetState() {
    clearTimeout(seq);
    toggle.classList.remove('is-on', 'is-pulsing');
    cursor.classList.remove('is-visible', 'is-tapping');
    cursor.style.transition = 'none';
    const pos = getTogglePos();
    cursor.style.left = pos.x + 'px';
    cursor.style.top  = pos.y + 'px';
  }

  // Step 1: cursor drifts into view above the toggle
  function step1() {
    cursor.style.transition = 'opacity 0.4s, transform 0.55s cubic-bezier(0.16,1,0.3,1)';
    cursor.classList.add('is-visible');
    wait(700, step2);
  }

  // Step 2: tap compress
  function step2() {
    cursor.classList.add('is-tapping');
    wait(120, step3);
  }

  // Step 3: toggle switches ON + ripple pulse fires
  function step3() {
    cursor.classList.remove('is-visible', 'is-tapping');

    toggle.classList.add('is-on');

    // One-shot ripple: remove then re-add after reflow so it replays every loop
    toggle.classList.remove('is-pulsing');
    void toggle.offsetHeight;
    toggle.classList.add('is-pulsing');
    setTimeout(() => toggle.classList.remove('is-pulsing'), 850);

    wait(2800, step4);
  }

  // Step 4: toggle switches OFF
  function step4() {
    toggle.classList.remove('is-on', 'is-pulsing');
    wait(1400, step5);
  }

  // Step 5: reset position and loop
  function step5() {
    resetState();
    wait(300, step1);
  }

  function start() {
    resetState();
    wait(600, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 900);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(widget);
}


/* ── Video Consultation Widget ── */
function initVideoWidget() {
  const widget  = document.getElementById('vc-widget');
  const waiting = document.getElementById('vc-waiting');
  const call    = document.getElementById('vc-call');
  const joinBtn = document.getElementById('vc-join');
  const cursor  = document.getElementById('vc-cursor');
  if (!widget || !waiting || !call || !joinBtn || !cursor) return;

  let started = false;
  let seq = null;

  function wait(ms, fn) { seq = setTimeout(fn, ms); }

  function getJoinPos() {
    const wr = widget.getBoundingClientRect();
    const jr = joinBtn.getBoundingClientRect();
    return {
      x: jr.left + jr.width  / 2 - wr.left,
      y: jr.top  + jr.height / 2 - wr.top,
    };
  }

  function resetState() {
    clearTimeout(seq);
    waiting.classList.add('is-active');
    call.classList.remove('is-active');
    cursor.classList.remove('is-visible', 'is-tapping');
    cursor.style.transition = 'none';
    const pos = getJoinPos();
    cursor.style.left = pos.x + 'px';
    cursor.style.top  = pos.y + 'px';
  }

  // Step 1: cursor fades in at join button
  function step1() {
    cursor.style.transition = 'opacity 0.4s, transform 0.55s cubic-bezier(0.16,1,0.3,1)';
    cursor.classList.add('is-visible');
    wait(700, step2);
  }

  // Step 2: tap compress
  function step2() {
    cursor.classList.add('is-tapping');
    wait(130, step3);
  }

  // Step 3: transition to video call
  function step3() {
    cursor.classList.remove('is-visible', 'is-tapping');
    waiting.classList.remove('is-active');
    call.classList.add('is-active');
    wait(3400, step4);
  }

  // Step 4: transition back to waiting room
  function step4() {
    call.classList.remove('is-active');
    waiting.classList.add('is-active');
    wait(1200, step5);
  }

  // Step 5: reset and loop
  function step5() {
    resetState();
    wait(500, step1);
  }

  function start() {
    resetState();
    wait(1500, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 1000);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}


/* ── Doctor Video Widget (Tablet) ── */
function initDoctorWidget() {
  const widget  = document.getElementById('vcd-widget');
  const waiting = document.getElementById('vcd-waiting');
  const call    = document.getElementById('vcd-call');
  const openBtn = document.getElementById('vcd-open');
  const cursor  = document.getElementById('vcd-cursor');
  if (!widget || !waiting || !call || !openBtn || !cursor) return;

  let started = false;
  let seq = null;

  function wait(ms, fn) { seq = setTimeout(fn, ms); }

  function getOpenPos() {
    const wr = widget.getBoundingClientRect();
    const br = openBtn.getBoundingClientRect();
    return {
      x: br.left + br.width  / 2 - wr.left,
      y: br.top  + br.height / 2 - wr.top,
    };
  }

  function resetState() {
    clearTimeout(seq);
    waiting.classList.add('is-active');
    call.classList.remove('is-active');
    cursor.classList.remove('is-visible', 'is-tapping');
    cursor.style.transition = 'none';
    const pos = getOpenPos();
    cursor.style.left = pos.x + 'px';
    cursor.style.top  = pos.y + 'px';
  }

  function step1() {
    cursor.style.transition = 'opacity 0.4s, transform 0.55s cubic-bezier(0.16,1,0.3,1)';
    cursor.classList.add('is-visible');
    wait(700, step2);
  }

  function step2() {
    cursor.classList.add('is-tapping');
    wait(130, step3);
  }

  function step3() {
    cursor.classList.remove('is-visible', 'is-tapping');
    waiting.classList.remove('is-active');
    call.classList.add('is-active');
    wait(3400, step4);
  }

  function step4() {
    call.classList.remove('is-active');
    waiting.classList.add('is-active');
    wait(1200, step5);
  }

  function step5() {
    resetState();
    wait(500, step1);
  }

  function start() {
    resetState();
    wait(1500, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 1000);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

/* ── EHR Document Upload Widget ───────────────────────────────────────────
   Shared logic for both doctor (tablet) and patient (phone).
   ────────────────────────────────────────────────────── */
function initEhrWidget(cfg) {
  const widget      = document.getElementById(cfg.widgetId);
  if (!widget) return;

  const main        = document.getElementById(cfg.mainId);
  const modalEmpty  = document.getElementById(cfg.modalEmptyId);
  const modalFilled = document.getElementById(cfg.modalFilledId);
  const uploadBtn   = document.getElementById(cfg.uploadBtnId);
  const selectBtn   = document.getElementById(cfg.selectBtnId);
  const submitBtn   = document.getElementById(cfg.submitBtnId);
  const cursor      = document.getElementById(cfg.cursorId);
  const bloodRow    = cfg.bloodRowId ? document.getElementById(cfg.bloodRowId) : null;

  let started = false;
  let timers  = [];

  function wait(ms, fn) {
    const id = setTimeout(fn, ms);
    timers.push(id);
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function moveCursor(targetEl) {
    const tRect = targetEl.getBoundingClientRect();
    const wRect = widget.getBoundingClientRect();
    cursor.style.left = (tRect.left + tRect.width  / 2 - wRect.left) + 'px';
    cursor.style.top  = (tRect.top  + tRect.height / 2 - wRect.top)  + 'px';
  }

  function tap(targetEl, cb) {
    moveCursor(targetEl);
    cursor.classList.add('is-visible');
    wait(500, () => {
      cursor.classList.add('is-tapping');
      wait(350, () => {
        cursor.classList.remove('is-tapping');
        wait(200, cb);
      });
    });
  }

  function resetState() {
    clearTimers();
    cursor.classList.remove('is-visible', 'is-tapping');
    main.classList.add('is-active');
    modalEmpty.classList.remove('is-active');
    modalFilled.classList.remove('is-active');
    if (bloodRow) bloodRow.style.display = 'none';
  }

  function step1() {
    moveCursor(uploadBtn);
    cursor.classList.add('is-visible');
    wait(700, step2);
  }

  function step2() {
    tap(uploadBtn, () => {
      main.classList.remove('is-active');
      modalEmpty.classList.add('is-active');
      wait(800, step3);
    });
  }

  function step3() {
    tap(selectBtn, () => {
      modalEmpty.classList.remove('is-active');
      modalFilled.classList.add('is-active');
      wait(900, step4);
    });
  }

  function step4() {
    tap(submitBtn, () => {
      modalFilled.classList.remove('is-active');
      main.classList.add('is-active');
      if (bloodRow) bloodRow.style.display = '';
      wait(1000, step5);
    });
  }

  function step5() {
    cursor.classList.remove('is-visible');
    wait(800, step1);
  }

  function start() {
    resetState();
    wait(1200, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 800);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

function initSmrWidget() {
  const widget = document.getElementById('smr-widget');
  if (!widget) return;

  const notif1 = document.getElementById('smr-notif-1');
  const notif2 = document.getElementById('smr-notif-2');

  let started = false;
  let timers  = [];

  function wait(ms, fn) {
    const id = setTimeout(fn, ms);
    timers.push(id);
  }

  function show(el) { el.classList.add('is-shown'); }
  function hide(el) { el.classList.remove('is-shown'); }

  function step1() { show(notif1); wait(2800, step2); }
  function step2() { hide(notif1); wait(700,  step3); }
  function step3() { show(notif2); wait(2800, step4); }
  function step4() { hide(notif2); wait(1200, step1); }

  function start() {
    hide(notif1);
    hide(notif2);
    wait(1500, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 800);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

function initAIReportWidget() {
  const container = document.getElementById('air-messages');
  if (!container) return;

  const TYPING_SHORT = 1400;
  const TYPING_LONG  = 2600;
  const USER_GAP     = 800;

  let started  = false;
  let sequence = null;

  function createUserBubble(text) {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--user';
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    row.appendChild(bubble);
    return row;
  }

  function createFileBubble() {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--user';
    row.innerHTML =
      '<div class="chat-bubble chat-file">' +
        '<div class="chat-file-icon">' +
          '<svg width="18" height="22" viewBox="0 0 18 22" fill="none">' +
            '<rect x="0.5" y="0.5" width="17" height="21" rx="2.5" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.6)"/>' +
            '<path d="M3 9h12M3 13h7" stroke="rgba(255,255,255,0.9)" stroke-width="1.5" stroke-linecap="round"/>' +
            '<text x="3" y="7" font-size="4.5" font-weight="700" fill="rgba(255,255,255,0.85)" font-family="sans-serif">PDF</text>' +
          '</svg>' +
        '</div>' +
        '<div class="chat-file-meta">' +
          '<span class="chat-file-name">' + t('widget.ehr.file.name') + '</span>' +
          '<span class="chat-file-size">2.4 MB · PDF</span>' +
        '</div>' +
      '</div>';
    return row;
  }

  function createTyping() {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--ai';
    row.innerHTML =
      '<div class="chat-typing-dots">' +
        '<div class="chat-typing-dot"></div>' +
        '<div class="chat-typing-dot"></div>' +
        '<div class="chat-typing-dot"></div>' +
      '</div>';
    return row;
  }

  function createReportBubble() {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--ai';

    function badge(type, symbol) {
      return '<span class="chat-report-badge chat-report-badge--' + type + '">' + symbol + '</span>';
    }

    function row_(label, val, type, symbol) {
      return '<div class="chat-report-row">' +
        '<span class="chat-report-label">' + t(label) + '</span>' +
        '<span class="chat-report-val">' + val + '</span>' +
        badge(type, symbol) +
      '</div>';
    }

    row.innerHTML =
      '<div class="chat-bubble chat-report">' +
        '<div class="chat-report-intro">' + t('widget.aireport.ai.intro') + '</div>' +
        '<div class="chat-report-card">' +
          row_('widget.aireport.hgb',  '13.2 g/dL', 'ok',   '✓') +
          row_('widget.aireport.iron', '68 µg/dL',  'up',   '↑') +
          row_('widget.aireport.chol', '198 mg/dL', 'warn', '⚠') +
          row_('widget.aireport.gluc', '95 mg/dL',  'ok',   '✓') +
        '</div>' +
        '<div class="chat-report-follow">' + t('widget.aireport.ai.follow') + '</div>' +
      '</div>';
    return row;
  }

  function scrollBottom() {
    container.scrollTop = container.scrollHeight;
  }

  function run() {
    // 1. User text message
    container.appendChild(createUserBubble(t('widget.aireport.user1')));
    scrollBottom();

    // 2. User sends file attachment
    sequence = setTimeout(() => {
      container.appendChild(createFileBubble());
      scrollBottom();

      // 3. AI typing indicator (longer — reading document)
      sequence = setTimeout(() => {
        const typing = createTyping();
        container.appendChild(typing);
        scrollBottom();

        // 4. AI report card replaces typing
        sequence = setTimeout(() => {
          container.removeChild(typing);
          container.appendChild(createReportBubble());
          scrollBottom();

          // 5. Pause then loop
          sequence = setTimeout(() => {
            container.innerHTML = '';
            run();
          }, 4200);
        }, TYPING_LONG);
      }, USER_GAP);
    }, 750);
  }

  const widget = document.getElementById('air-widget');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(run, 1200);
      }
    });
  }, { threshold: 0.3 });

  if (widget) observer.observe(widget);

  document.addEventListener('shifa:langchange', () => {
    if (started) {
      clearTimeout(sequence);
      container.innerHTML = '';
      run();
    }
  });
}

function initFeatureChatWidget() {
  const container = document.getElementById('afc-messages');
  if (!container) return;

  function getMessages() {
    return [
      { from: 'user', text: t('ai.widget.msg1.user') },
      { from: 'ai',   text: t('ai.widget.msg1.ai')  },
      { from: 'user', text: t('ai.widget.msg2.user') },
      { from: 'ai',   text: t('ai.widget.msg2.ai')  },
      { from: 'user', text: t('ai.widget.msg3.user') },
      { from: 'ai',   text: t('ai.widget.msg3.ai')  },
    ];
  }

  const TYPING_MS   = 1600;
  const READ_MS     = 2200;
  const USER_GAP_MS = 1100;

  let started  = false;
  let sequence = null;

  function createBubble(msg) {
    const row    = document.createElement('div');
    row.className = 'chat-msg chat-msg--' + msg.from;
    const bubble  = document.createElement('div');
    bubble.className  = 'chat-bubble';
    bubble.textContent = msg.text;
    row.appendChild(bubble);
    return row;
  }

  function createTyping() {
    const row = document.createElement('div');
    row.className = 'chat-msg chat-msg--ai';
    row.innerHTML = '<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>';
    return row;
  }

  function scrollBottom() {
    container.scrollTop = container.scrollHeight;
  }

  function runSequence(messages, index) {
    if (index >= messages.length) {
      sequence = setTimeout(() => {
        container.innerHTML = '';
        runSequence(getMessages(), 0);
      }, 3000);
      return;
    }

    const msg = messages[index];

    if (msg.from === 'user') {
      const delay = index === 0 ? 0 : USER_GAP_MS;
      sequence = setTimeout(() => {
        container.appendChild(createBubble(msg));
        scrollBottom();
        runSequence(messages, index + 1);
      }, delay);
    } else {
      sequence = setTimeout(() => {
        const typing = createTyping();
        container.appendChild(typing);
        scrollBottom();
        sequence = setTimeout(() => {
          container.removeChild(typing);
          container.appendChild(createBubble(msg));
          scrollBottom();
          runSequence(messages, index + 1);
        }, TYPING_MS);
      }, USER_GAP_MS);
    }
  }

  function restart() {
    clearTimeout(sequence);
    container.innerHTML = '';
    runSequence(getMessages(), 0);
  }

  const widget = document.getElementById('afc-widget');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(() => runSequence(getMessages(), 0), READ_MS);
      }
    });
  }, { threshold: 0.3 });

  if (widget) observer.observe(widget);

  document.addEventListener('shifa:langchange', () => {
    if (started) restart();
  });
}

function initPmWidget() {
  const widget   = document.getElementById('pm-widget');
  if (!widget) return;

  const row0     = document.getElementById('pm-row-0');
  const row2     = document.getElementById('pm-row-2');
  const profile0 = document.getElementById('pm-profile-0');
  const profile1 = document.getElementById('pm-profile-1');
  const cursor   = document.getElementById('pm-cursor');

  let started = false;
  let timers  = [];

  function wait(ms, fn) {
    const id = setTimeout(fn, ms);
    timers.push(id);
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function moveCursor(el) {
    const tRect = el.getBoundingClientRect();
    const wRect = widget.getBoundingClientRect();
    cursor.style.left = (tRect.left + tRect.width  / 2 - wRect.left) + 'px';
    cursor.style.top  = (tRect.top  + tRect.height / 2 - wRect.top)  + 'px';
  }

  function tap(cb) {
    cursor.classList.add('is-tapping');
    wait(350, () => {
      cursor.classList.remove('is-tapping');
      wait(180, cb);
    });
  }

  function resetState() {
    clearTimers();
    cursor.classList.remove('is-visible', 'is-tapping');
    row0.classList.remove('is-selected');
    row2.classList.remove('is-selected');
    profile0.classList.remove('is-active');
    profile1.classList.remove('is-active');
  }

  // Step 1: cursor glides to row0, taps it → profile0 opens
  function step1() {
    moveCursor(row0);
    cursor.classList.add('is-visible');
    wait(700, () => {
      tap(() => {
        row0.classList.add('is-selected');
        profile0.classList.add('is-active');
        wait(2600, step2);
      });
    });
  }

  // Step 2: cursor glides to row2, taps it → profile1 opens
  function step2() {
    moveCursor(row2);
    wait(750, () => {
      tap(() => {
        row0.classList.remove('is-selected');
        profile0.classList.remove('is-active');
        row2.classList.add('is-selected');
        profile1.classList.add('is-active');
        wait(2600, step3);
      });
    });
  }

  // Step 3: reset and loop
  function step3() {
    cursor.classList.remove('is-visible');
    wait(600, () => {
      row2.classList.remove('is-selected');
      profile1.classList.remove('is-active');
      wait(500, step1);
    });
  }

  function start() {
    resetState();
    wait(1200, step1);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 800);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

function initAnlWidget() {
  const widget = document.getElementById('anl-widget');
  if (!widget) return;

  const list  = document.getElementById('anl-appt-list');
  const line1 = document.getElementById('anl-line1');
  const line2 = document.getElementById('anl-line2');
  const kpi1  = document.getElementById('anl-kpi-1');
  const kpi2  = document.getElementById('anl-kpi-2');

  const ROW_H  = 60;
  let timers   = [];
  let started  = false;

  function wait(ms, fn) {
    const id = setTimeout(fn, ms);
    timers.push(id);
  }

  function clearAll() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function countUp(el, target, dur) {
    const t0 = Date.now();
    (function tick() {
      const p = Math.min((Date.now() - t0) / dur, 1);
      el.textContent = Math.round(p * target);
      if (p < 1) requestAnimationFrame(tick);
    })();
  }

  function resetState() {
    clearAll();
    if (line1) { line1.style.transition = 'none'; line1.style.strokeDashoffset = '1000'; }
    if (line2) { line2.style.transition = 'none'; line2.style.strokeDashoffset = '1000'; }
    if (kpi1) kpi1.textContent = '0';
    if (kpi2) kpi2.textContent = '0';
    if (list) list.style.transform = 'translateY(0)';
  }

  function drawLines() {
    void widget.offsetHeight; // reflow
    if (line1) { line1.style.transition = ''; line1.style.strokeDashoffset = '0'; }
    wait(300, () => {
      if (line2) { line2.style.transition = ''; line2.style.strokeDashoffset = '0'; }
    });
  }

  function scrollDown() {
    if (list) list.style.transform = 'translateY(-' + ROW_H + 'px)';
    wait(2600, scrollUp);
  }

  function scrollUp() {
    if (list) list.style.transform = 'translateY(0)';
    wait(2200, scrollDown);
  }

  function start() {
    resetState();
    wait(400, () => {
      drawLines();
      wait(800, () => {
        countUp(kpi1, 22, 1300);
        wait(180, () => countUp(kpi2, 13, 1100));
      });
      wait(3000, scrollDown);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 700);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

function initCalWidget() {
  const widget    = document.getElementById('calw-widget');
  if (!widget) return;

  const slotsEl   = document.getElementById('calw-slots');
  const gridEl    = document.getElementById('calw-grid');
  const dateLabel = document.getElementById('calw-date-label');

  const FIRST_DOW   = 3;  // Jan 1 2025 = Wednesday
  const MONTH_DAYS  = 31;
  const CYCLE_DATES = [13, 14, 20];
  const CYCLE_MS    = 3000;

  const SCHEDULE = {
    13: [
      { type: 'appt', name: 'Jasur Karimov',    video: false, time: '09:00 – 09:30', tag: 'checkup',  av: 'JK', color: '#9B59B6' },
      { type: 'free', time: '09:30 – 10:00' },
      { type: 'appt', name: 'Gulnora Yusupova',  video: true,  time: '10:00 – 10:30', tag: 'checkup',  av: 'GY', color: '#E67E22' },
      { type: 'free', time: '10:30 – 11:00' },
      { type: 'appt', name: 'Ulugbek Tursunov',  video: true,  time: '12:00 – 12:30', tag: 'checkup',  av: 'UT', color: '#2196F3' },
      { type: 'appt', name: 'Dilshoda Rasulova', video: true,  time: '13:00 – 13:30', tag: 'checkup',  av: 'DR', color: '#E91E8C' },
      { type: 'appt', name: 'Shavkat Nematov',   video: false, time: '13:30 – 14:00', tag: 'checkup',  av: 'SN', color: '#27AE60' },
    ],
    14: [
      { type: 'appt', name: 'Nodira Akhmedova',  video: true,  time: '09:00 – 09:30', tag: 'followup', av: 'NA', color: '#E91E8C' },
      { type: 'appt', name: 'Rustam Jalilov',    video: false, time: '09:30 – 10:00', tag: 'checkup',  av: 'RJ', color: '#27AE60' },
      { type: 'free', time: '10:00 – 11:00' },
      { type: 'appt', name: 'Jasur Karimov',     video: false, time: '11:00 – 11:30', tag: 'followup', av: 'JK', color: '#9B59B6' },
      { type: 'free', time: '11:30 – 13:00' },
      { type: 'appt', name: 'Dilshoda Rasulova', video: true,  time: '13:00 – 13:30', tag: 'checkup',  av: 'DR', color: '#E91E8C' },
    ],
    20: [
      { type: 'free', time: '09:00 – 10:00' },
      { type: 'appt', name: 'Shavkat Nematov',   video: false, time: '10:00 – 10:30', tag: 'checkup',  av: 'SN', color: '#27AE60' },
      { type: 'free', time: '10:30 – 12:00' },
      { type: 'appt', name: 'Gulnora Yusupova',  video: true,  time: '12:00 – 12:30', tag: 'followup', av: 'GY', color: '#E67E22' },
      { type: 'appt', name: 'Ulugbek Tursunov',  video: true,  time: '13:00 – 13:30', tag: 'checkup',  av: 'UT', color: '#2196F3' },
      { type: 'free', time: '13:30 – 15:00' },
    ],
  };

  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  let currentDate = 13;
  let cycleIdx    = 0;
  let cycleTimer  = null;
  let started     = false;
  let paused      = false;

  function buildGrid() {
    gridEl.innerHTML = '';
    for (let i = 0; i < FIRST_DOW; i++) {
      const empty = document.createElement('span');
      empty.className = 'calw-day calw-day--empty';
      gridEl.appendChild(empty);
    }
    for (let d = 1; d <= MONTH_DAYS; d++) {
      const btn = document.createElement('button');
      btn.className = 'calw-day' + (SCHEDULE[d] ? ' calw-day--has' : '');
      btn.dataset.day = d;
      btn.textContent = d;
      btn.tabIndex = -1;
      btn.addEventListener('click', function() {
        pauseCycle();
        selectDate(parseInt(this.dataset.day));
      });
      gridEl.appendChild(btn);
    }
  }

  function highlightDay(d) {
    gridEl.querySelectorAll('.calw-day').forEach(function(el) {
      el.classList.toggle('is-active', parseInt(el.dataset.day) === d);
    });
  }

  function videoSVG() {
    return '<svg width="10" height="8" viewBox="0 0 14 11" fill="none" aria-hidden="true"><rect x="1" y="1" width="8" height="9" rx="1.2" stroke="currentColor" stroke-width="1.3"/><path d="M9 3.5l4-2v7l-4-2" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>';
  }

  function chevSVG() {
    return '<svg class="calw-slot-chev" width="6" height="12" viewBox="0 0 6 12" fill="none" aria-hidden="true"><polyline points="1,1 5,6 1,11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function renderSlots(slots) {
    if (!slots || !slots.length) {
      slotsEl.innerHTML = '<div style="padding:20px 12px;font-size:10px;color:var(--color-muted)">No appointments</div>';
      return;
    }
    slotsEl.innerHTML = slots.map(function(s) {
      if (s.type === 'free') {
        return '<div class="calw-slot">' +
          '<div class="calw-slot-plus"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></div>' +
          '<span class="calw-slot-free-label">' + t('widget.cal.free') + '</span>' +
          '<div class="calw-slot-right"><span class="calw-slot-time">' + s.time + '</span></div>' +
          chevSVG() +
          '</div>';
      }
      var subHtml = s.video
        ? '<span class="calw-slot-video">' + videoSVG() + t('widget.cal.video') + '</span>'
        : '<span class="calw-slot-sub">Tashkent Med Center</span>';
      return '<div class="calw-slot">' +
        '<div class="calw-slot-av" style="background:' + s.color + '">' + s.av + '</div>' +
        '<div class="calw-slot-info"><span class="calw-slot-name">' + s.name + '</span>' + subHtml + '</div>' +
        '<div class="calw-slot-right">' +
          '<span class="calw-slot-time">' + s.time + '</span>' +
          '<span class="calw-slot-tag">' + t(s.tag === 'followup' ? 'widget.cal.followup' : 'widget.cal.checkup') + '</span>' +
        '</div>' +
        chevSVG() +
        '</div>';
    }).join('');
  }

  function selectDate(d) {
    currentDate = d;
    highlightDay(d);
    dateLabel.textContent = d + ' ' + t('widget.cal.month') + ' 2025';
    slotsEl.classList.add('is-fading');
    setTimeout(function() {
      renderSlots(SCHEDULE[d] || []);
      slotsEl.classList.remove('is-fading');
    }, 180);
  }

  function pauseCycle() {
    paused = true;
    clearTimeout(cycleTimer);
    cycleTimer = setTimeout(function() {
      paused = false;
      cycle();
    }, 6000);
  }

  function cycle() {
    if (paused) return;
    cycleIdx = (cycleIdx + 1) % CYCLE_DATES.length;
    selectDate(CYCLE_DATES[cycleIdx]);
    cycleTimer = setTimeout(cycle, CYCLE_MS);
  }

  function start() {
    buildGrid();
    selectDate(CYCLE_DATES[0]);
    cycleTimer = setTimeout(cycle, CYCLE_MS);
  }

  document.addEventListener('shifa:langchange', function() {
    if (!started) return;
    dateLabel.textContent = currentDate + ' ' + t('widget.cal.month') + ' 2025';
    renderSlots(SCHEDULE[currentDate] || []);
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 700);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}

function initRxWidget() {
  var widget        = document.getElementById('rx-widget');
  if (!widget) return;

  var newBtn        = document.getElementById('rx-new-btn');
  var modal         = document.getElementById('rx-modal');
  var confirmEl     = document.getElementById('rx-confirm');
  var cursor        = document.getElementById('rx-cursor');
  var checkPath     = document.getElementById('rx-check-path');
  var patientInput  = document.getElementById('rx-patient-input');
  var medInput      = document.getElementById('rx-med-input');
  var dosageInput   = document.getElementById('rx-dosage-input');
  var durationInput = document.getElementById('rx-duration-input');
  var notesInput    = document.getElementById('rx-notes-input');
  var signBtn       = document.getElementById('rx-sign-btn');

  var started = false;
  var timers  = [];

  function wait(ms, fn) {
    var id = setTimeout(fn, ms);
    timers.push(id);
  }

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function moveCursor(targetEl) {
    var tRect = targetEl.getBoundingClientRect();
    var wRect = widget.getBoundingClientRect();
    cursor.style.left = (tRect.left + tRect.width  / 2 - wRect.left) + 'px';
    cursor.style.top  = (tRect.top  + tRect.height / 2 - wRect.top)  + 'px';
  }

  function tap(targetEl, cb) {
    moveCursor(targetEl);
    cursor.classList.add('is-visible');
    wait(500, function() {
      cursor.classList.add('is-tapping');
      wait(350, function() {
        cursor.classList.remove('is-tapping');
        wait(200, cb);
      });
    });
  }

  function typeChar(el, text, speed, cb) {
    var i = 0;
    el.textContent = '';
    function next() {
      if (i < text.length) {
        el.textContent += text[i++];
        var id = setTimeout(next, speed);
        timers.push(id);
      } else if (cb) {
        cb();
      }
    }
    next();
  }

  function resetState() {
    clearTimers();
    cursor.classList.remove('is-visible', 'is-tapping');
    modal.classList.remove('is-active');
    confirmEl.classList.remove('is-active');
    checkPath.style.transition = 'none';
    checkPath.style.strokeDashoffset = '1';
    patientInput.textContent  = '';
    medInput.textContent      = '';
    dosageInput.textContent   = '';
    durationInput.textContent = '';
    notesInput.textContent    = '';
  }

  function step1() {
    moveCursor(newBtn);
    cursor.classList.add('is-visible');
    wait(700, step2);
  }

  function step2() {
    tap(newBtn, function() {
      modal.classList.add('is-active');
      wait(650, step3);
    });
  }

  function step3() {
    typeChar(patientInput, t('widget.rx.pval'), 44, function() {
      wait(300, step4);
    });
  }

  function step4() {
    typeChar(medInput, t('widget.rx.mval'), 38, function() {
      wait(300, step5);
    });
  }

  function step5() {
    dosageInput.textContent   = t('widget.rx.dval');
    durationInput.textContent = t('widget.rx.durval');
    wait(450, step6);
  }

  function step6() {
    typeChar(notesInput, t('widget.rx.nval'), 40, function() {
      wait(380, step7);
    });
  }

  function step7() {
    moveCursor(signBtn);
    wait(500, step8);
  }

  function step8() {
    tap(signBtn, function() {
      modal.classList.remove('is-active');
      wait(320, function() {
        confirmEl.classList.add('is-active');
        wait(220, function() {
          checkPath.style.transition = 'stroke-dashoffset 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
          checkPath.style.strokeDashoffset = '0';
        });
        wait(2900, step9);
      });
    });
  }

  function step9() {
    confirmEl.classList.remove('is-active');
    cursor.classList.remove('is-visible');
    wait(900, function() {
      resetState();
      wait(800, step1);
    });
  }

  function start() {
    resetState();
    wait(1200, step1);
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        setTimeout(start, 800);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(widget);
}
