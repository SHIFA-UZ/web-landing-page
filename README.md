# SHIFA — Digital Healthcare Platform

A modern landing page for SHIFA, a digital healthcare ecosystem that connects patients and doctors through secure video consultations, intelligent scheduling, and AI-powered clinical tools.

## Quick Start

```bash
# No dependencies to install — open directly in a browser
open index.html

# Or serve locally for development
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic, accessible) |
| Styling | Vanilla CSS3 (custom properties, grid, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Maps | [Leaflet.js 1.9.4](https://leafletjs.com/) via CDN |
| Fonts | [Google Fonts — Manrope](https://fonts.google.com/specimen/Manrope) |

No frameworks. No build tools. No package manager.

## Project Structure

```
├── index.html                 # All pages (SPA-style, single file)
├── css/
│   ├── styles.css             # Main layout & responsive styles
│   └── components/
│       ├── index.css          # Entry point (imports tokens & buttons)
│       ├── _tokens.css        # Design tokens (colors, spacing, typography)
│       └── _buttons.css       # Button component system
├── js/
│   ├── main.js               # Core logic (routing, i18n, map, countdown)
│   └── translations.js       # i18n dictionary (EN, DE, UZ, RU)
└── assets/
    └── images/               # All visual assets (PNG)
```

## Features

- **Single-page navigation** — Five pages (Product, Features, Pricing, Contact, Privacy) rendered as toggled sections
- **Internationalization** — Full support for English, German, Uzbek, and Russian
- **Responsive design** — Mobile-first with glassmorphism navigation and animated drawer
- **Accessibility** — Semantic HTML, ARIA attributes, proper label associations, keyboard navigable
- **Launch countdown** — Live timer counting down to September 1, 2026
- **Interactive map** — Leaflet-powered office locations (Berlin & Andijan)
- **Feature tabs** — Separate views for patient and doctor capabilities
- **Cookie consent** — GDPR-compliant banner with localStorage persistence

## Internationalization

Four languages are supported. Translations are defined in `js/translations.js` and applied to the DOM via data attributes:

```html
<h1 data-i18n="hero.heading"></h1>
<input data-i18n-placeholder="contact.form.email">
```

The user's language preference is persisted in `localStorage` under the key `shifa-lang`.

To add a new language:
1. Add a new language object in `js/translations.js`
2. Add a language button in the nav and mobile drawer in `index.html`

## Design Tokens

Brand colors and spacing are centralized in `css/components/_tokens.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#00BBB0` | Brand teal — buttons, accents, links |
| `--color-destructive` | `#E53E3E` | Error states, destructive actions |
| `--color-text` | `#0D1117` | Primary text |
| `--space-1` to `--space-16` | 4px–64px | Spacing scale (4px base) |

## Deployment

This is a fully static site. Deploy to any static hosting provider:

- **GitHub Pages** — Push to `main` and enable Pages in repo settings
- **Netlify / Vercel** — Connect the repo, no build command needed
- **S3 + CloudFront** — Upload files directly
- **Any web server** — Serve the root directory

No environment variables or server-side configuration required.

## Browser Support

Targets modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses:
- CSS Custom Properties
- CSS Grid & Flexbox
- `backdrop-filter` (glassmorphism)
- `IntersectionObserver`
- ES6 modules pattern (non-module script)

## License

Private repository. All rights reserved.
