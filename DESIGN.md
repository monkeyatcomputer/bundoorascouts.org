# Design Guide

This site should feel like a modern Scout group: practical, warm, adventurous, and community-focused. It is not a generic marketing template. Reuse the established visual system before adding new patterns.

## Visual Identity

Core colours are defined in `assets/css/app.css` through Tailwind v4 theme tokens:

- Primary: `#100e4c`, used for headings, nav, deep backgrounds, and strong emphasis.
- Secondary: `#3f5e94`, used for supporting actions and blue accents.
- Tertiary: `#001d1b` and teal variants, used sparingly for contrast.
- Surface scale: `surface`, `surface-container-low`, `surface-container-high`, and related tokens create the layered off-white card system.

Section colours come from `_data/sections.yml` and should be used for section-specific accents, gradients, buttons, and hero treatments:

- Joeys: orange.
- Cubs: yellow.
- Scouts: green.
- Venturers: maroon.
- Rovers: red.
- Adults/group: blue or navy.

Use existing SVG logos and badges from `assets/images/` and `assets/images/sections/` before introducing new graphics.

## Typography

The site uses Nunito Sans loaded in `_layouts/default.html`.

- Use `font-headline` for headings.
- Use existing large hero title treatments in layouts instead of inventing new type scales.
- Keep body copy readable with `text-on-surface` or `text-on-surface-variant`.
- Avoid negative letter spacing and viewport-scaled font sizes.

## Layout Principles

- Prefer `site-container`, `site-container-wide`, `page-shell`, and `section-shell` from `assets/css/app.css`.
- Use full-width sections and clear content bands.
- Use cards for repeated items, tools, modals, or pathway stations.
- Avoid cards inside cards unless the nested element is a small repeated item and the existing pattern already does it.
- Keep cards at `rounded-xl` or `rounded-2xl` to match the existing system.
- Make fixed-format UI elements stable with explicit dimensions, grids, aspect ratios, or min/max constraints.

## Heroes

Most public pages use a visual hero through their layout:

- `layout: page` uses `_layouts/page.html`.
- `layout: section` uses `_layouts/section.html`.
- Campfire uses `_layouts/blog.html`.
- Expedition pages use `_layouts/expedition.html`.

Use a real image when one is available. If no image is supplied, the layouts fall back to section or site gradients. Do not create split text/media hero layouts unless the surrounding code already uses that pattern.

## Components

Reusable UI lives in `_includes/`. Before adding markup to a page, check for an include that already solves the problem.

Common component patterns:

- `feature-grid.html`: feature cards for section pages.
- `section-intro.html`: section story/image block.
- `badge-card.html`: Achievement Pathway callout on section pages.
- `promise-law.html`: Promise, Law, motto, and award content.
- `leader-grid.html` and `leader-stack.html`: leader displays.
- `blog-card.html` and `featured-card.html`: Campfire listings.
- `achievement-pathway-*.html`: Achievement Pathway pages.
- `expedition-*.html`: trip map, timeline, and gallery.

Keep include APIs simple. Prefer passing data through frontmatter or `_data/*.yml`.

## Achievement Pathway Design

The pathway overview is a vertical journey with chapter pills and full-width station cards.

Use these conventions:

- Chapter pills are short uppercase labels such as `ESSENTIALS`, `FOUNDATION`, `CORE SKILLS`, and `THE PINNACLE`.
- Each station should look like the other stations: `bg-surface-container-low/90`, `rounded-2xl`, section accent colour, large faded background icon or asset when appropriate, and a single primary action.
- Keep detail pages separate. Overview cards should summarize and link to detail pages.
- Do not combine multiple unrelated visual systems inside one station. If two topics need separate emphasis, use separate pathway stations with a pill between them.

## Buttons And Links

Primary pathway and section buttons usually use a gradient from `section.colour` to `section.colour_dark`. Use the existing class pattern:

```html
class="text-white px-6 py-2.5 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-md inline-flex items-center gap-2"
```

Only use hover scale on interactive elements. Do not animate static cards in a way that implies they are clickable.

## Icons And Assets

The site uses Material Symbols through a generated Google Fonts request. If adding a new Material Symbols name, add it to `_data/icons.yml`.

Prefer existing image assets for Scout-specific content:

- Section logos: `assets/images/logo-*-*.svg`
- Section badges: `assets/images/sections/*-badge.svg`
- Milestone badges: `assets/images/sections/milestone-*-<section>.svg`
- Peak awards: `assets/images/sections/peak-award-*.svg`
- World Scout emblem: `assets/images/scout-emblem.svg`
- OAS icons: `_includes/icons/oas-*.svg`
- SIA icons: `_includes/icons/sia-*.svg`

Use empty `alt=""` for decorative images. Use descriptive alt text for content images.

## Motion

Global reveal animation is available through `data-gsap="reveal"` in `_layouts/default.html`. Use it sparingly for page sections and listing cards.

For hover states:

- Small lifts and subtle shadow changes are acceptable for links/cards.
- Do not animate non-clickable content.
- Keep motion purposeful and brief.

## Copy Tone

Write like a local Scout group speaking to families and volunteers: clear, direct, friendly, and grounded. Avoid over-polished sales copy. Prefer plain explanations of programs, costs, safety, events, and next steps.

