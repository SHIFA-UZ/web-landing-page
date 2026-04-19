# SHIFA

> Digital healthcare platform connecting patients and doctors through secure video consultations, intelligent scheduling, and AI-powered clinical tools.

[![Deploy to cPanel](https://github.com/SheroziyCODE/web-landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/SheroziyCODE/web-landing-page/actions/workflows/deploy.yml)

## Getting Started

```bash
# Serve locally
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). No install, no build step required.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 — custom properties, grid, flexbox, glassmorphism |
| Logic | Vanilla JavaScript (ES6+) |
| Maps | [Leaflet.js 1.9.4](https://leafletjs.com/) (CDN) |
| Fonts | [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) |
| Backend | PHP (`send-mail.php` — contact form) |
| CI/CD | GitHub Actions → FTP deploy to cPanel |

No frameworks. No bundler. No package manager.

## Project Structure

```
├── index.html                  Main SPA — all pages in one file
├── css/
│   ├── styles.css              Layout, nav, responsive rules
│   └── components/
│       ├── index.css            Imports tokens & buttons
│       ├── _tokens.css          Design tokens (colors, spacing, type, motion)
│       └── _buttons.css         Button component system
├── js/
│   ├── main.js                 Routing, i18n, map, countdown, animations
│   └── translations.js         i18n dictionaries (EN, DE, UZ, RU)
├── assets/images/              Visual assets (PNG)
├── send-mail.php               Contact form endpoint
└── .github/workflows/
    └── deploy.yml              CI/CD pipeline
```

## Architecture

### SPA Routing

Pages (Product, Features, Pricing, Contact, Privacy) live as `<section data-page="...">` elements in `index.html`. Navigation toggles visibility and dispatches `shifa:pagechange` custom events. No hash or history API — purely DOM-driven.

### Internationalization (i18n)

Four languages: English, German, Uzbek, Russian.

```html
<!-- Text content -->
<h1 data-i18n="hero.heading"></h1>

<!-- Attributes -->
<input data-i18n-placeholder="contact.form.email">
```

Language persists in `localStorage` (`shifa-lang` key). To add a language:

1. Add a language object to `js/translations.js`
2. Add a language switcher button in the nav and mobile drawer in `index.html`

### Design Tokens

All visual values are centralized in `css/components/_tokens.css`:

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-primary` | `#00BBB0` | Brand teal |
| `--color-destructive` | `#DC2F2F` | Errors, destructive actions |
| `--color-text` | `#0D1117` | Body text |
| `--space-1` … `--space-16` | 4px – 64px | Spacing scale (4px base) |
| `--radius-btn` / `--radius-card` / `--radius-pill` | 8px / 14px / 50px | Border radii |
| `--ease-expo` / `--ease-smooth` | cubic-bezier | Motion curves |
| `--nav-height` | 68px | Fixed nav offset |

### JavaScript Patterns

- **Event delegation** — listeners on `document`, not individual elements
- **Custom events** — `shifa:pagechange`, `shifa:tabchange` for cross-component communication
- **IntersectionObserver** — scroll reveal animations, nav shadow toggle
- **Lazy initialization** — Leaflet map waits for CDN load before rendering

### Contact Form

`send-mail.php` accepts POST with `name`, `email`, `message` fields and sends to `contact@shifa.uz`.

**Email transport**: Uses raw SMTP via `fsockopen` to `localhost:25` (the server's Exim MTA). PHP's `mail()` function is disabled on the production host — do not attempt to use it. The script speaks SMTP protocol directly: EHLO → MAIL FROM → RCPT TO → DATA → QUIT.

**Security layers**:

- **CSRF protection** — Origin/Referer validation
- **Rate limiting** — 5 requests per IP per hour (file-based, SHA-256 hashed), admin bypass for `sheroziy@shifa.uz`
- **Bot detection** — Honeypot field + submission timing check (< 3s = bot)
- **Input validation** — Length limits (100/254/5000), email format, field allowlist
- **Header injection prevention** — Newline/tab stripping on name and email
- **Payload size cap** — 10KB max before parsing
- **Form stuffing rejection** — Only whitelisted POST fields accepted
- **CSP** — `form-action 'self'` restricts where form data can be sent
- **SRI** — Subresource Integrity hashes on all CDN assets (Leaflet)

## Deployment

### Automatic (CI/CD)

Pushes to `main` trigger FTP deployment via GitHub Actions. Required repository secrets:

| Secret | Description |
|--------|-------------|
| `FTP_HOST` | FTP server hostname |
| `FTP_USERNAME` | FTP account username |
| `FTP_PASSWORD` | FTP account password |
| `FTP_SERVER_DIR` | Remote directory path |

### Manual Alternatives

| Provider | Setup |
|----------|-------|
| GitHub Pages | Enable Pages in repo settings, set source to `main` |
| Netlify / Vercel | Connect repo — no build command needed |
| S3 + CloudFront | Upload files to bucket, configure distribution |
| Any web server | Serve the root directory as static files |

The contact form requires a PHP-capable host (e.g., cPanel shared hosting).

## Browser Support

Targets modern evergreen browsers (Chrome, Firefox, Safari, Edge). Key APIs used:

- CSS Custom Properties
- CSS Grid & Flexbox
- `backdrop-filter` (glassmorphism effects)
- `IntersectionObserver`
- `localStorage`

## License

All rights reserved. Private repository.
