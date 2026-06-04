# Agent Guide

This file is for AI agents working on the Bundoora Scout Group website. Read it before making changes.

## Project Purpose

This is the public website for Bundoora Scout Group. It is a Jekyll static site for families, youth members, leaders, volunteers, and the local community. The site covers:

- Section information for Joeys, Cubs, Scouts, Venturers, Rovers, and adult volunteers.
- The Achievement Pathway and section-specific program pages.
- Campfire news posts.
- Expeditions and trip tracking.
- Leader profiles, sponsors, hall hire, contact, child safety, and general Scouting information.

Keep changes practical, accurate, and consistent with the existing site.

## Working Rules

- Read nearby files before editing. This site is component-driven, and most pages already have a matching include or layout.
- Prefer editing Markdown frontmatter or data files over hard-coding repeated content in templates.
- Do not edit `_site/`; it is generated output.
- Do not reorganize directories or rename shared includes unless the user asks.
- Do not revert unrelated user changes. The working tree may already contain active edits.
- Keep Markdown and code ASCII unless the file already uses specific punctuation or the content needs it.
- Use existing Scout and section terminology. If uncertain about current program requirements, verify against official Scouts Victoria or Scouts Australia sources.

## Common Commands

Install dependencies:

```powershell
bundle install
```

Build the site:

```powershell
bundle exec jekyll build --trace
```

Run locally:

```powershell
bundle exec jekyll serve --livereload
```

On this Windows machine, `tailwindcss-ruby` may need an explicit executable path:

```powershell
$env:TAILWINDCSS_INSTALL_DIR="$HOME\.local\share\gem\ruby\3.4.0\gems\tailwindcss-ruby-4.2.4-x64-mingw-ucrt\exe\x64-mingw-ucrt"
bundle exec jekyll build --trace
```

Only run a dev server when the user needs to preview the site. If the user says they will build manually, do not run the build.

## Editing Content

### Regular Pages

Use `layout: page` for ordinary content pages unless an existing page in the same area uses a more specific layout.

Typical frontmatter:

```yaml
---
layout: page
title: "Page Title"
permalink: /page-url
description: "Short SEO description."
---
```

Add pages to `_data/navigation.yml` only when they should appear in the main navigation.

### Section Pages

Top-level section pages live at `sections/*.md` and use `layout: section`. They are supported by `_data/sections.yml` and section-specific includes such as:

- `feature-grid.html`
- `section-intro.html`
- `badge-card.html`
- `promise-law.html`
- `testimonial-grid.html`
- `info-grid.html`
- `leader-grid.html`

When changing section metadata, keep `sections/*.md` and `_data/sections.yml` aligned.

### Achievement Pathway Pages

Achievement Pathway pages live under `sections/<section>/`.

Use:

```yaml
layout: achievement-pathway
section_slug: joeys
ap_page: milestones
```

The sidebar/mobile nav is driven by `_data/achievement_pathway_nav.yml`. The active item is selected through `page.ap_page`. If adding a new pathway page, add it to the data file and create matching pages for each section when appropriate.

Reusable Achievement Pathway includes are named `achievement-pathway-*.html`. Keep overview stations visually consistent with `_includes/achievement-pathway-overview.html`: full-width cards, pathway pills between chapters, section colour accents, and separate pages for detail views.

### Posts

Posts live in `_posts/` and use Jekyll's `YYYY-MM-DD-title.md` filename format. Common fields:

```yaml
---
title: "Post Title"
subtitle: "Optional short subtitle"
description: "SEO summary."
image: /uploads/hero/image.jpg
author:
  - name-or-slug
categories:
  - Group
tags:
  - Camp
---
```

Use exact dates in event posts. The site timezone is configured as `Australia/Melbourne`.

### People

Leader/profile files live in `_people/`. Keep frontmatter simple:

```yaml
---
name: Firstname
role: Role
alias: Optional alias
section: joeys
---
```

Leader images are usually resolved from `assets/images/people/<lowercase-name>.jpg`.

### Trips

Trip pages live in `_trips/` and usually use `layout: expedition`. Data lives under `_data/<trip-slug>/` as `itinerary.yml`, `gallery.yml`, `route.yml`, and `telemetry.yml`. The expedition layout serializes these files to JSON for the map and timeline includes.

Do not hand-edit generated route or telemetry data unless the user explicitly asks. Use `scripts/precompute_route.js` when route preprocessing is needed.

## Assets

- Design assets and reusable images live under `assets/images/`.
- Post, trip, and page-specific media usually live under `uploads/`.
- Section logos, badges, milestone badges, OAS icons, and SIA icons already exist; reuse them before creating new art.
- If adding a Material Symbols icon, make sure its name is present in `_data/icons.yml`; the Google Fonts request is generated from that file.

## Build Output And Generated Files

Do not commit or edit generated output:

- `_site/`
- `.jekyll-cache/`
- `node_modules/`

The root guide files `AGENTS.md`, `DESIGN.md`, and `ARCHITECTURE.md` are documentation for contributors and are excluded from the site build.

