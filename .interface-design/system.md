# Bhat and Kochikar Advocates: design system

Direction: quiet, factual law-firm page. Taken from the logo: deep green, muted gold, paper cream.
Bar Council of India Rule 36: no solicitation. Copy states facts only (no "best", no testimonials, no results).

## Colour (closed)
- `--paper` #F1F0EB  page (matches the logo background, so the mark sits on it with no box)
- `--vellum` #E8E6DE  alternate section surface
- `--ink` #1C2B22  text
- `--ink-muted` #5A645D  secondary text
- `--bench` #1E4A33  brand green (headings, footer, primary button)
- `--bench-deep` #163826  primary button hover (darker, never lighter)
- `--brass` #A88637  gold, used only for the eyebrow labels and thin rules
- `--rule` rgba(28,43,34,.14)  hairlines

## Type (closed, whole px)
12 · 14 · 16 · 18 · 40 · 56 · 72  (72 hero desktop, 56 tablet, 40 phone and all section headings)
- Display/headings: Cormorant Garamond 500/600
- Body and UI: Inter 400/500/600
- Eyebrow labels: 12px Inter 600 uppercase, letter-spacing .14em, brass

## Space
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96

## Controls
- One button height: 48px (header Contact 40px).  Radius 2px on controls, 0 on surfaces.
- Primary: bench fill, paper text. Secondary: text link with underline.

## Depth
Borders only. No shadows except the disclaimer dialog backdrop.

## v2 (2026-10-20): modern redesign after "looks like 1990s"
- Dark hero (one-hue green gradient, top lighter) + gold radial glow, full viewport, sticky header that blurs on scroll.
- Logo: vector SVG traced from the JPEG (assets/mark.svg, mark-light.svg for dark backgrounds), 2000px PNGs alongside.
- Practice areas: 2x2 bordered grid, card fills bench green on hover. Offices on night green.
- Fade-up on scroll, off under prefers-reduced-motion.
