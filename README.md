# MALEBO MVP

## Overview

`MALEBO MVP` is a static front-end prototype for the Kenyan accountability app currently branded as **NI MBAYA**. The product is designed to help users track streaks, beat bad habits, save money, and stay accountable with a bold and playful UI.

This repository is a presentation-layer MVP rather than a fully connected web application. It is built with HTML, CSS, and a small JavaScript component loader that assembles the navigation and visual shell around the landing page.

## Current Project Structure

- `index.html` — primary landing page for the app.
- `pages/` — page-level HTML files for key app sections:
  - `community.html`
  - `how-it-works.html`
  - `panic.html`
  - `savings.html`
  - `settings.html`
  - `streak.html`
- `components/` — reusable fragments loaded into pages:
  - `header.html` — top navigation and profile panel
  - `background.html` — visual background component
- `CSS/` — styling modules:
  - `background.css`
  - `header.css`
  - `styles.css`
- `js/` — reusable JavaScript loader script:
  - `loader.js`
- `Images/` — brand, mascot, and UI illustration assets.

## Essentials and What’s Implemented

### Landing page (`index.html`)

- Hero section with a dynamic marketing message.
- Primary CTA buttons: `START MY STREAK` and `HOW IT WORKS`.
- Mascot visual card for the Malebo identity.
- Footer navigation linking to core pages.
- Shared header injection via `fetch("components/header.html")`.
- Basic interaction wiring for menu toggle and profile panel.

### Reusable header component

`components/header.html` contains the app shell for navigation:

- sticky topbar layout
- brand logo and profile button
- responsive nav toggle
- an account panel overlay

This component is loaded into pages using JavaScript, which keeps the header consistent across the MVP.

### Styling system

`CSS/styles.css` defines the main app design language:

- mobile-first spacing and layout
- button systems for primary/secondary actions
- hero and stat card design
- dark, modern visual tone with glassmorphism cues

`CSS/header.css` defines the header and navigation styling and includes the menu/open panel states.

### JavaScript loader

`js/loader.js` contains a small reusable loader pattern to inject shared components on demand. It exists to simplify the header/background composition and is part of the current static MVP.

## Notes for Developers

- This repo is currently best served as a static site. The fastest way to preview it is by opening `index.html` in a browser or using a local static server.
- The header is loaded client-side, so any page that uses `components/header.html` should serve from a web server or a compatible local environment.
- The current UI is a working prototype, not a production backend app.

## Suggested Next Steps

1. Add or confirm the existence of `script.js` if shared page interactions are required. `index.html` references it.
2. Convert repeated layout pieces into a single component loader pattern across all pages.
3. Add a lightweight routing/SPA shell if the product should behave more like a modern app.
4. Introduce real data/state for streaks, savings, and panic flow.
5. Add build tooling if the repo moves beyond simple static HTML/CSS.

## How to run

### Option 1: Open file directly

Open `index.html` in your browser.

### Option 2: Local static server (recommended)

From the repo root:

```bash
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

## Why this matters

This MVP is a visual proof of concept for the Malebo accountability brand. It is structured so the app can quickly evolve into a more interactive experience while keeping a strong brand voice and a clear page layout.
