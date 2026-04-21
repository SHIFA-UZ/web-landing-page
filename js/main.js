/* ============================================================
   SHIFA – Digitalizing Healthcare
   Main JavaScript
   ============================================================ */

// Apply theme before paint to prevent flash
(function () {
  var saved = localStorage.getItem('shifa-theme');
  var prefersDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark');
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
});


/* ── Page Navigation ── */
function initNavigation() {
  const pages = ['product', 'features', 'pricing', 'contact', 'privacy'];

  var transitioning = false;

  function navigateTo(pageId, skipScroll) {
    const currentPage = document.querySelector('.page.is-active');
    const targetPage  = document.getElementById(`page-${pageId}`);

    if (!targetPage || targetPage === currentPage) return;

    // Update nav links immediately
    pages.forEach(id => {
      const navLink    = document.getElementById(`n-${id}`);
      const drawerLink = document.getElementById(`d-${id}`);
      if (navLink)    navLink.classList.remove('is-active');
      if (drawerLink) drawerLink.classList.remove('is-active');
    });

    const targetNavLink = document.getElementById(`n-${pageId}`);
    const targetDrawer  = document.getElementById(`d-${pageId}`);
    if (targetNavLink) targetNavLink.classList.add('is-active');
    if (targetDrawer)  targetDrawer.classList.add('is-active');

    function showTarget() {
      document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('is-active');
        p.classList.remove('is-leaving');
      });
      targetPage.classList.add('is-active');
      if (!skipScroll) window.scrollTo({ top: 0 });
      transitioning = false;
      sessionStorage.setItem('shifa-page', pageId);
      document.dispatchEvent(new CustomEvent('shifa:pagechange', { detail: { id: pageId } }));
    }

    if (currentPage && !skipScroll && !transitioning) {
      transitioning = true;
      currentPage.classList.add('is-leaving');
      currentPage.addEventListener('animationend', function once() {
        currentPage.removeEventListener('animationend', once);
        showTarget();
      });
    } else {
      showTarget();
    }
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

      // If a scroll target was specified, scroll to it after page switch
      const scrollTarget = trigger.dataset.scrollTo;
      if (scrollTarget) {
        requestAnimationFrame(() => {
          const el = document.getElementById(scrollTarget);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
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
}

function initI18n() {
  const saved = localStorage.getItem('shifa-lang');

  if (saved) {
    setLanguage(saved);
  } else {
    setLanguage('en');
    fetch('https://api.country.is')
      .then(r => r.json())
      .then(data => {
        const country = (data.country || '').toUpperCase();
        var lang = 'en';
        if (country === 'DE' || country === 'AT' || country === 'CH') lang = 'de';
        else if (country === 'UZ') lang = 'ru';
        if (lang !== 'en') setLanguage(lang);
      })
      .catch(() => {});
  }

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
    { sel: '#page-product .countdown-unit:nth-child(1)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.05s' },
    { sel: '#page-product .countdown-unit:nth-child(2)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.14s' },
    { sel: '#page-product .countdown-unit:nth-child(3)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.23s' },
    { sel: '#page-product .countdown-unit:nth-child(4)', kf: 'heroFadeUp', dur: '0.6s', delay: '0.32s' },
    { sel: '.hero-heading-main', kf: 'heroFadeUp', dur: '0.7s', delay: '0.18s' },
    { sel: '.hero-heading-sub',  kf: 'heroFadeUp', dur: '0.6s', delay: '0.38s' },
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

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('shifa-theme')) setTheme(e.matches);
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

  const MESSAGES = [
    { from: 'user', text: 'Give me a summary of my last appointment.' },
    { from: 'ai',   text: 'Your last visit was about a year ago. You reported recurring headaches and mild flu symptoms. The doctor recommended rest and prescribed ibuprofen. No follow-up was scheduled.' },
    { from: 'user', text: 'Please compare my current blood test with the previous results.' },
    { from: 'ai',   text: 'Your iron levels have improved by 12%. Cholesterol is slightly elevated compared to last time — 198 vs 181 mg/dL. All other markers are within normal range.' },
    { from: 'user', text: 'What was the name of the dentist I visited last year?' },
    { from: 'ai',   text: 'It would be best to visit the clinic soon — some of your symptoms could become more serious. Can I help you find an open slot with your closest doctor?' },
  ];

  const TYPING_MS   = 1600;   // how long typing indicator shows
  const READ_MS     = 2200;   // initial pause before first message
  const USER_GAP_MS = 1100;  // gap before user / AI messages

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

  function runSequence(index) {
    if (index >= MESSAGES.length) {
      // Pause then restart loop
      sequence = setTimeout(() => {
        container.innerHTML = '';
        runSequence(0);
      }, 3000);
      return;
    }

    const msg = MESSAGES[index];

    if (msg.from === 'user') {
      const delay = index === 0 ? 0 : USER_GAP_MS;
      sequence = setTimeout(() => {
        container.appendChild(createBubble(msg));
        scrollBottom();
        runSequence(index + 1);
      }, delay);
    } else {
      // Show typing indicator first
      sequence = setTimeout(() => {
        const typing = createTyping();
        container.appendChild(typing);
        scrollBottom();

        sequence = setTimeout(() => {
          container.removeChild(typing);
          container.appendChild(createBubble(msg));
          scrollBottom();
          runSequence(index + 1);
        }, TYPING_MS);
      }, USER_GAP_MS);
    }
  }

  // Start when widget enters viewport (IntersectionObserver)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        observer.disconnect();
        // Small delay so widget is visible before first message
        setTimeout(() => runSequence(0), READ_MS);
      }
    });
  }, { threshold: 0.3 });

  const widget = container.closest('.ai-chat-widget');
  if (widget) observer.observe(widget);
}
