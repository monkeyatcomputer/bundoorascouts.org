# AGENTS.md – Bundoora Scouts Website Redesign

This file provides instructions for AI coding agents working on the **Bundoora Scouts website redesign** (`bundoorascouts.org`). Read this file in full before making any changes.

---

## Project Overview

This is a refreshed redesign of the [Bundoora Scouts](https://bundoorascouts.org) website. The site is built with **Jekyll** (static site generator) and is intended to be deployed via GitHub Pages or a compatible static hosting service.

The design is driven by mockups created in **Google Stitch** (see the `samples/` folder). Always refer to these Stitch exports – both `screen.png` (visual reference) and `code.html` (design token and layout reference) – before implementing or modifying any page.

---

## Technology Stack

| Concern         | Choice                                                  |
|-----------------|---------------------------------------------------------|
| Generator       | [Jekyll](https://jekyllrb.com/) `~> 4.4.1`             |
| Theme           | Custom (no `minima`; bespoke layouts and includes)      |
| CSS Framework   | [Tailwind CSS v3](https://tailwindcss.com/) via CDN     |
| Fonts           | Google Fonts – **Nunito Sans** (headings + body)        |
| Icons           | [Material Symbols Outlined](https://fonts.google.com/icons) via Google Fonts CDN |
| Markdown        | Kramdown (Jekyll default)                               |
| Plugins         | `jekyll-paginate-v2`, `jekyll-sitemap`, `jekyll-feed`, `jekyll-seo-tag`, `jekyll-redirect-from`, `jekyll-include-cache` |

> **Note:** Tailwind is loaded from the CDN in development. For production, consider a PostCSS/Tailwind CLI build step to purge unused classes; document any such changes in this file.

---

## Repository Structure

```
bundoorascouts.org/
├── _config.yml            # Jekyll site configuration
├── _data/                 # YAML data files (navigation, sections, sponsors, etc.)
├── _includes/             # Reusable Liquid partials (nav, footer, section-card, etc.)
├── _layouts/              # Page layouts (default, page, post, section)
├── _posts/                # The Campfire blog posts (YYYY-MM-DD-title.md format)
├── assets/
│   ├── css/               # Tailwind injected via CDN (main.css removed)
│   ├── images/            # Site images and photography
│   └── js/                # Optional JavaScript (mobile nav toggle, etc.)
├── samples/               # Google Stitch design exports (DO NOT EDIT)
│   ├── home_page_revised/ # SOURCE OF TRUTH for layout and aesthetic
│   ├── youth_sections/    # Section landing pages reference
│   ├── about_scouting/
│   ├── about_us/
│   ├── contact_us/
│   ├── cubs_section/
│   ├── joeys_section_2/
│   ├── scouts_section/
│   ├── venturers_section_2/
│   ├── rovers_section_2/
│   ├── parent_information_2/
│   ├── hall_hire_1/
│   ├── our_sponsors_2/
│   └── the_campfire_blog_3/
├── index.md               # Home page
├── sections/              # Youth section landing pages
├── the-campfire/          # Blog index page
└── ...                    # Content pages
```

---

## Design System (from home_page_revised)

All design tokens are derived from `samples/home_page_revised/`. This version represents a more professional, "The Modern Trailfinder" aesthetic with sharper corners and **Nunito Sans** typography.

### Colour Palette (Tailwind custom tokens)

| Token                      | Value       | Usage                                 |
|----------------------------|-------------|---------------------------------------|
| `primary`                  | `#100e4c`   | Main brand navy – headings, buttons   |
| `primary-container`        | `#262661`   | Darker navy – footer, hero text       |
| `secondary`                | `#3f5e94`   | Blue – links, accents, nav active     |
| `secondary-container`      | `#a3c1fe`   | Light blue – selection highlight      |
| `surface`                  | `#faf9f9`   | Page background                       |
| `surface-container-low`    | `#f5f3f3`   | Card backgrounds                      |
| `surface-container`        | `#efeded`   | Slightly darker card surfaces         |
| `surface-container-high`   | `#e9e8e8`   | Hover states                          |
| `surface-container-highest`| `#e3e2e2`   | Elevated elements                     |
| `on-surface`               | `#1b1c1c`   | Body text                             |
| `on-surface-variant`       | `#474650`   | Secondary/muted text                  |
| `outline-variant`          | `#c8c5d1`   | Borders, dividers                     |
| `on-tertiary-container`    | `#31a59e`   | Teal accent – blog tags, badges       |

### Typography

- **Headline font:** `Nunito Sans` – weights 500, 600, 700, 800; used for `h1`–`h6`, nav items, buttons, labels
- **Body font:** `Nunito Sans` – optical size 6–12, weights 400, 600; used for body text, descriptions
- Apply via Tailwind font families: `font-headline`, `font-body`, `font-label`

### Border Radius (Revised)

Use sharper, more conservative rounding:

```js
borderRadius: {
  DEFAULT: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}
```

---

## Layouts & Components

### `_layouts/default.html`
Base layout with **Nunito Sans** and Material Symbols. Updates the site-wide Tailwind configuration to match `home_page_revised`.

### `_includes/nav.html`
Fixed top navigation bar with **left-aligned logo** and right-aligned links.
Background: `bg-white/95 backdrop-blur-md`.

### `_includes/section-card.html`
Uses `rounded-xl` (0.75rem) and subtle ambient shadows.

---

## Key Design Decisions (Revised)

- **Logo Alignment:** The logo is now **left-aligned**, as seen in `home_page_revised`.
- **Corner Style:** Avoid the "bubbly" large radii from earlier mocks. Prefer `rounded-xl` (12px) for cards and `rounded-3xl` (24px) for major container sections.
- **Typography:** **Nunito Sans** is the sole font for both headings and body to ensure a clean, editorial feel. **This overrides any mention of Public Sans in the design mocks or sample files.**
- **Hero Sections:** Use full-bleed images with gradient overlays that blend into the `surface` colour.

---

## Out of Scope

- Legacy `_posts` and `_pages` are excluded from the build to prevent dependency recursion and broken Liquid tags.
- Post-processing for Tailwind CSS (CDN is used for MVP).
