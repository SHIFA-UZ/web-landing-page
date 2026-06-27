# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SHIFA is a landing page for a digital healthcare platform. Frontend is pure HTML5, CSS3, and vanilla JavaScript (ES6+) with no framework dependencies. Backend is a single PHP file (`send-mail.php`) for the contact form. External resources: Leaflet.js (v1.9.4, lazy-loaded) for maps, Google Fonts (Manrope), Umami (cookieless analytics, loaded from `cloud.umami.is`), and `api.country.is` (geo-detection for default language). Hosted on cPanel (Engintron/nginx + Exim SMTP).

Supports light/dark theme (toggle persisted in `shifa-theme`, applied via `[data-theme=dark]`) and four UI languages (EN, DE, UZ, RU).

## Development

```bash
# Serve locally (no build step required)
python3 -m http.server 8000
# Visit http://localhost:8000
```

No package manager, no build tools, no test framework.

## Architecture

### SPA Routing

Pages (Product, Features, Pricing, Contact/About, Privacy, Download) are `<div class="page">` sections in `index.html`, toggled via `[data-page]` attributes. The `navigateTo(pageId)` function hides all pages, shows the target, updates nav active states (both desktop `#n-{id}` and drawer `#d-{id}`), scrolls to top, and dispatches `shifa:pagechange`. All navigation uses event delegation on `document`. Routing also integrates with the History API (`pushState` on navigate, `popstate` listener) so pages have shareable hash URLs.

### Internationalization (i18n)

`js/translations.js` declares the global `TRANSLATIONS` object and holds **only the English** strings (`TRANSLATIONS.en`). The other languages live in separate files — `js/lang/de.js`, `js/lang/ru.js`, `js/lang/uz.js` — each of which assigns its own key (`TRANSLATIONS.de = {...}`, etc.). These are **lazy-loaded on demand**: `loadLang(lang)` injects a `<script>` tag for the language file the first time it is needed (English ships inline, no extra request). This keeps initial payload small and avoids duplication — language files contain only their own translations, never English.

The `setLanguage(lang)` function swaps `innerHTML` on `[data-i18n]` elements and `placeholder` on `[data-i18n-placeholder]` elements, persists the choice to localStorage (`shifa-lang`), and dispatches `shifa:langchange`. The `t(key)` helper resolves current-language → English → the key itself as a fallback chain. On first visit with no stored preference, the default language is geo-detected via `api.country.is` (falls back to English).

### CSS Architecture

- **Tokens** (`css/components/_tokens.css`): Single source of truth for colors, spacing, shadows, radii, typography, motion. Uses `--color-*` naming with legacy aliases (`--teal`, `--text`, `--muted`, etc.) for backward compatibility. Dark theme is a token remap under the `[data-theme=dark]` selector.
- **Buttons** (`css/components/_buttons.css`): `.btn` (primary), `.btn-outline` (secondary), modifiers `--destructive`, `--icon`, `--floating`.
- **Main styles** (`css/styles.css`): Layout, nav, page system, all sections, the interactive demo widgets, responsive breakpoints, animation system.
- **Download page** (`css/download.css`): Styles specific to the Download page (glassmorphic platform cards, QR code, responsive download layout).
- **Import order**: `index.css` → `_tokens.css` → `_buttons.css`, then `styles.css` and `download.css` loaded separately.

### Animation System

- **Hero animations**: JS-driven via `HERO_ANIMS` config object. Each page has entrance keyframes replayed on every visit via `playHero(pageId)`.
- **Scroll reveal**: `.anim` class elements observed by IntersectionObserver, get `.in` class added. Supports `data-dir` (left/right/scale/fade/blur) and `data-delay` (1-6) attributes.
- **Page transitions**: CSS `@keyframes pageEnter` and `tabEnter` applied via `.is-active`.
- **Reduced motion**: Full `prefers-reduced-motion` support disabling all animations.

### State Pattern

All interactive state uses `is-*` class toggling:
- `is-active` — current page, nav link, tab button/panel
- `is-open` — mobile drawer, burger
- `is-visible` — cookie banner
- `is-floating` / `is-exiting` — hero hand image states
- `is-sent` — form submit button success state
- `is-error` — form submit button error state
- `is-leaving` — page transition (exit animation) state

Theme is the exception: dark mode is applied via the `[data-theme=dark]` attribute on `<html>` (set inline before render to avoid a flash), not an `is-*` class.

### JavaScript Module Pattern

`js/main.js` initializes all features in `DOMContentLoaded` via separate `init*()` functions. No modules, no imports. `translations.js` loads first (declares the `TRANSLATIONS` global with English), then `main.js`. Non-English language files (`js/lang/*.js`) are **not** included as static `<script>` tags — they are injected on demand by `loadLang()`. A small inline `<script>` in `<head>` applies the saved theme (`shifa-theme`) before the stylesheet renders to prevent a flash of the wrong theme.

### Backend (Email Sending)

`send-mail.php` handles contact form POST requests. Sends to `contact@shifa.uz` via **raw SMTP over fsockopen** (NOT PHP's `mail()` function — it is disabled on the production server).

**Why raw SMTP**: The hosting provider (cPanel with Engintron/nginx) has `mail()` disabled at the server level. It cannot be enabled from cPanel. The server does have a local SMTP server (Exim) running on port 25, so we connect directly via `fsockopen('localhost', 25)` and speak the SMTP protocol manually.

**How it works**:
1. Opens a TCP socket to `localhost:25`
2. Performs SMTP handshake: `EHLO` → `MAIL FROM` → `RCPT TO` → `DATA`
3. Sends email headers + body, then `QUIT`
4. `smtp_read()` helper properly handles multiline SMTP responses (lines ending with `-` indicate more lines follow)

**Critical constraints**:
- Do NOT replace with `mail()` — it will cause a 500 error (fatal crash, zero output)
- Do NOT use `require_once 'Mail.php'` (PEAR) — it also crashes on this server
- The `fsockopen` approach is the ONLY working method
- Falls back to port 587 if port 25 is unavailable
- If migrating to a new host, test `mail()` first — if it works there, it's simpler

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) FTP-deploys to cPanel on push to `main`. Requires secrets: `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR`. Excludes: `.git*`, `.gitignore`, `CLAUDE.md`, `README.md`, `shifa_v7.html`.

`.htaccess` is deployed alongside the site and provides security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), blocks dotfile access (except `.well-known/`), and serves the SPA fallback. The CSP allowlists: `'self'`; `unpkg.com` (Leaflet) and `cloud.umami.is` for scripts; `fonts.googleapis.com`, `unpkg.com`, and `'unsafe-inline'` for styles; `fonts.gstatic.com` for fonts; `*.tile.openstreetmap.org` and `*.basemaps.cartocdn.com` for map tiles; and `unpkg.com`, `cloud.umami.is`, `api-gateway.umami.dev`, `api.country.is` for `connect-src`.

## Best Practices

### CSS

- **Always use design tokens** — never hardcode colors, spacing, shadows, or radii. Use `var(--color-primary)`, `var(--space-4)`, `var(--radius-card)`, etc.
- **Prefer semantic token aliases** — use `var(--teal)`, `var(--muted)`, `var(--border)` in styles.css for readability; use `var(--color-primary)` in component files.
- **Follow the existing responsive pattern** — desktop-first with breakpoints at 900px (tablet), 540px (mobile), and occasional 700px/680px/420px for specific components.
- **Glassmorphism cards** follow a consistent pattern: `linear-gradient` background, `backdrop-filter: blur()`, multi-layer `box-shadow` (inset highlight + outer shadow), `::before` pseudo for specular glare. Copy from an existing card rather than inventing new glass styles.
- **Transitions use project easing** — `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for reveals, `cubic-bezier(0.45, 0, 0.55, 1)` (smooth) for exits. Prefer the token `var(--ease-expo)`.
- **New sections** should use the established utilities: `.wrap` (max-width container), `.label` (uppercase small tag), `.heading-xl`/`.heading-lg`/`.heading-sm`, `.body-text`.
- **Button styling** lives in `_buttons.css` — don't restyle buttons in `styles.css`. Use `.btn` or `.btn-outline` with modifiers.
- **`will-change`** only on animated elements (`.anim`, hero elements). Don't add it broadly.

### JavaScript

- **Event delegation over direct binding** — attach listeners to `document` or a parent, use `.closest('[data-*]')` to find triggers. Don't add listeners to individual items.
- **Custom events for cross-feature communication** — dispatch `shifa:pagechange` / `shifa:tabchange` with `detail` payload. Other init functions listen for these. Never directly call between init functions.
- **Guard clauses at the top** — every `init*()` function checks if its required DOM element exists before proceeding (`if (!el) return`).
- **No external dependencies** — don't import npm packages or add `<script>` tags for libraries (exception: Leaflet for maps). Solve problems with vanilla JS.
- **Animations via style property, not classList** — hero animations use `node.style.animation = ...` with a reflow trick (`void node.offsetHeight`) to restart. Scroll reveal uses class toggling via IntersectionObserver.
- **Leaflet lazy-loading** — check `typeof L === 'undefined'` and retry with `setTimeout` until CDN loads.
- **localStorage keys** are namespaced with `shifa-` prefix: `shifa-lang`, `shifa-cookies`.
- **Animated widgets with text must be fully translatable** — all static text inside a widget must use `data-i18n` (or `data-i18n-placeholder`) attributes. Text injected dynamically by JS must use the `t()` helper to read the current language at runtime. The widget must also listen for `shifa:langchange` (dispatched by `setLanguage`) to clear and restart with translated content when the user switches languages. Failing to do this means widget text stays in the original language even after a language switch.

### HTML

- **All text content must be translatable** — add `data-i18n="section.key"` for text content and `data-i18n-placeholder="section.key"` for placeholders. Then add the key to `TRANSLATIONS.en` in `js/translations.js` **and** to each language file (`js/lang/de.js`, `ru.js`, `uz.js`). A key missing from a language file silently falls back to English, so keep all four in sync.
- **Translation keys use dot notation** grouped by section: `nav.*`, `hero.*`, `features.*`, `pricing.*`, `contact.*`, `cookie.*`, `footer.*`, `privacy.*`, `download.*`.
- **Page sections** must have `id="page-{name}"` and `class="page"`. Nav links need `id="n-{name}"` and drawer links need `id="d-{name}"`.
- **Scroll reveal elements** get `class="anim"` with optional `data-dir` and `data-delay` attributes.
- **Semantic HTML** — use `<section>`, `<nav>`, `<main>`, `<footer>`. ARIA attributes on interactive elements (`aria-expanded`, `aria-hidden`, `aria-label`).
- **Images** go in `assets/images/` as PNG. Use descriptive `alt` text.

### Adding a New Page

1. Add `<div class="page" id="page-{name}">` section in `index.html` inside `<main>`
2. Add nav links: `<a id="n-{name}" data-page="{name}" data-i18n="nav.{name}">` in `.nav-links` and `<a id="d-{name}" ...>` in `.nav-drawer`
3. Add page name to the `pages` array in `initNavigation()`
4. Add translation keys to `TRANSLATIONS.en` and every `js/lang/*.js` file
5. Optionally add hero animation config in `HERO_ANIMS`

### Adding a New Language

1. Create `js/lang/{code}.js` that assigns `TRANSLATIONS.{code} = {...}` covering **every** key present in `TRANSLATIONS.en` (in `js/translations.js`). Do not add it to `translations.js` — only English lives there. Follow the existing `de.js`/`ru.js`/`uz.js` files as the template.
2. Register `{code}` in `loadLang()`'s known-languages list in `js/main.js` so it can be lazy-loaded.
3. Add `<button class="lang-btn" data-lang="{code}">` in both the nav `.lang-switcher` and the drawer `.lang-switcher--drawer`.
4. Add a confirmation-email template for `{code}` in `send-mail.php`'s `$confirmations` array (see Security section).

### Security (DO NOT remove or weaken)

The contact form (`send-mail.php`) and `.htaccess` implement a hardened security stack. These protections are **critical** and must not be removed, bypassed, or weakened:

- **`.htaccess`** — blocks dotfile access, restricts PHP execution, sets CSP/X-Frame-Options/nosniff/Permissions-Policy headers. Do not delete or simplify.
- **Rate limiting** — file-based, 5 req/IP/hour, counts ALL attempts (not just successful ones). Do not raise the limit above 10 without user approval.
- **Honeypot + timing check** — silent bot rejection. Do not remove the hidden `company_url` field or the `_t` timestamp field from the form.
- **Origin/Referer validation** — do not remove. If adding new allowed origins (e.g., staging domain), add to the `$allowed_origins` array only.
- **Input validation** — enforced at 3 layers (HTML maxlength, JS validation, PHP validation). All three must stay in sync. Current limits: name ≤100, email ≤254, message ≤5000. If changing a limit, update all three.
- **SRI hashes** — ⚠️ **Currently NOT present.** The CDN `<script>`/`<link>` tags (Leaflet via `unpkg.com`, Umami via `cloud.umami.is`, Google Fonts) have no `integrity` attributes, so a compromised CDN could inject code. This is a known gap to fix: add SRI hashes to the externally-hosted resources (and regenerate them whenever a CDN version is bumped). The CSP in `.htaccess` is the only current mitigation.
- **CSP header** — if adding new external resources (scripts, fonts, APIs), update the CSP in `.htaccess` to allowlist them explicitly. Never use `unsafe-eval` or wildcard `*`.
- **Field allowlist** — PHP rejects any POST fields not in the `$allowed_fields` array. If adding a form field, add it to this array too.
- **Confirmation emails** — after successful submission, a localized confirmation email is sent to the user in their current language (EN/DE/UZ/RU). The `_lang` hidden field carries the language. If adding a language, add a confirmation template in `send-mail.php`'s `$confirmations` array.

### Git Workflow

- **Never commit directly to `main`**. When the user is on `main` and wants to push changes, always create a new branch first:
  ```bash
  git checkout -b <type>/<short-description>
  ```
  Branch naming: `feat/`, `fix/`, `style/`, `refactor/`, `docs/`, `chore/` followed by a kebab-case description (e.g., `feat/add-faq-page`, `fix/countdown-timezone`, `style/mobile-nav-spacing`).

- **Commit message format**:
  ```
  <type>(<scope>): <short summary>
  ```
  - `type`: feat, fix, style, refactor, docs, chore, perf, a11y
  - `scope`: optional, the area affected (nav, hero, i18n, pricing, contact, animations, deploy)
  - `summary`: imperative mood, lowercase, no period, max 72 chars
  - Examples:
    - `feat(i18n): add Turkish language support`
    - `fix(countdown): handle timezone offset correctly`
    - `style(hero): adjust mobile heading font size`
    - `refactor(nav): extract drawer logic into separate function`
    - `chore(deploy): update FTP action to v5`

- **One logical change per commit**. Don't bundle unrelated changes.

- After committing and pushing the branch, offer to create a pull request targeting `main`.

### Known Issues / Tech Debt

Current gaps to be aware of (verified, not yet fixed):

- **Hero countdown is hardcoded and expired** — `initCountdown()` in `js/main.js` targets `new Date("2026-06-05T00:00:00")`, which is in the past. The product-page countdown reads zero/negative. Update the date or replace the countdown.
- **No SRI on CDN resources** — see the SRI bullet in the Security section.
- **`.rate_limits/` is not excluded from FTP deploy** — consider adding it (and any server-generated runtime dirs) to the `exclude` list in `deploy.yml`.
- **FTP deploy is unencrypted** — credentials/files travel in cleartext; SFTP/FTPS would be safer.
- **Missing Open Graph / Twitter Card meta tags** — social shares render without a preview card.
- **Incomplete `sitemap.xml`** — only the root URL is listed; SPA sub-pages are not enumerated.
- **Placeholder content** — founder bios contain "Placeholder description…" text and a few `href="#"` links (iOS App Store button, footer Terms/GDPR) are not wired up.
- **No teardown on navigation** — widget IntersectionObservers and animation timers are not disconnected/cleared when leaving a page; they persist for the page lifetime.

### General

- **`shifa_v7.html`** is a legacy reference — don't modify or serve it
- **No build step exists** — all CSS uses native `@import`, no preprocessing
- **Naming convention**: BEM-inspired but flat — `.section-feature`, `.pricing-card`, `.contact-form`. Modifiers use `--` suffix (`.two-col--reverse`, `.btn--destructive`).
- **Content max-width**: 1080px via `.wrap`. Hero uses 1280px max.
- **Nav height**: 68px (`var(--nav-h)`) — all pages have `padding-top: var(--nav-h)` for the fixed nav offset.
