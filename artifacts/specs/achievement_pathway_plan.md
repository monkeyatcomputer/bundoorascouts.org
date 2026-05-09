# Achievement Pathway — Implementation Plan (v2)

## Overview

Each Scout section page will have a dedicated **Achievement Pathway** mini-site — a group of
linked pages with a persistent sidebar navigation that lets members explore each component of
their program in depth.

The approach replaces the single SVG mountain visualisation with a **multi-page layout**,
with layouts simlar to the mockups in `artifacts/data/` but with a style consistent with the
rest of the website. Each component of the achievement pathway becomes
its own dedicated page, linked via a shared sidebar.

---

## 1. Page Structure per Section

Every section (Joeys → Rovers) gets the following pages. Not all sections have every page — see
the applicability matrix in §3.

| Page | Slug | Purpose |
|---|---|---|
| **Overview / Milestones** | `achievement-pathway` | Landing page; milestone trail + summary cards linking to sub-pages |
| **Outdoor Adventure Skills** | `achievement-pathway/outdoor-skills` | OAS skill areas, stage requirements for this section |
| **Special Interest Areas** | `achievement-pathway/special-interests` | SIA areas, project requirements for this section |
| **Adventurous Journey** | `achievement-pathway/adventurous-journey` | Journey requirements, planning protocol |
| **Personal Reflection** | `achievement-pathway/personal-reflection` | Reflection process, prompts |

### URL pattern

```
/sections/{section}/achievement-pathway                  ← overview + milestones
/sections/{section}/achievement-pathway/outdoor-skills
/sections/{section}/achievement-pathway/special-interests
/sections/{section}/achievement-pathway/adventurous-journey
/sections/{section}/achievement-pathway/personal-reflection
```

---

## 2. File Structure

### New files to create

All sub-pages sit **flat alongside `achievement-pathway.md`** inside each section's subdirectory.
The `permalink` front matter key controls the URL — no physical nesting needed.

```
sections/
  joeys/
    achievement-pathway.md          ← overview / milestones
    outdoor-skills.md               ← OAS sub-page
    special-interests.md            ← SIA sub-page
    # no adventurous-journey or personal-reflection for Joeys
  cubs/
    achievement-pathway.md          ← exists (update front matter to v2 schema)
    outdoor-skills.md
    special-interests.md
    adventurous-journey.md
    personal-reflection.md
  scouts/
    achievement-pathway.md
    outdoor-skills.md
    special-interests.md
    adventurous-journey.md
    personal-reflection.md
  venturers/
    achievement-pathway.md
    outdoor-skills.md
    special-interests.md
    adventurous-journey.md
    personal-reflection.md
  rovers/
    achievement-pathway.md
    outdoor-skills.md
    special-interests.md
    adventurous-journey.md
    personal-reflection.md
```

### New includes to create

```
_layouts/
  achievement-pathway.html           ← new dedicated layout (extends default)

_includes/
  achievement-pathway-hero.html      ← full-bleed mountain hero (shared across all AP pages)
  achievement-pathway-nav.html       ← sticky sidebar navigation (shared across all AP pages)
  achievement-pathway-overview.html  ← milestone trail + bento grid (overview page body)
  achievement-pathway-oas.html       ← Outdoor Adventure Skills page body
  achievement-pathway-sia.html       ← Special Interest Areas page body
  achievement-pathway-aj.html        ← Adventurous Journey page body
  achievement-pathway-pr.html        ← Personal Reflection page body
```

### New data file to create

```
_data/
  achievement_pathway_nav.yml        ← sidebar nav items + applicability flags
```

### Existing files to modify

```
sections/cubs/achievement-pathway.md    ← update front matter to v2 schema
sections/cubs.md                        ← add Achievement Pathway CTA button
sections/joeys.md                       ← add Achievement Pathway CTA button
sections/scouts.md                      ← add Achievement Pathway CTA button
sections/venturers.md                   ← add Achievement Pathway CTA button
sections/rovers.md                      ← add Achievement Pathway CTA button
```

---

## 3. Section Applicability Matrix

| Page | Joeys | Cubs | Scouts | Venturers | Rovers |
|---|:---:|:---:|:---:|:---:|:---:|
| Overview / Milestones | ✓ | ✓ | ✓ | ✓ | ✓ |
| Outdoor Adventure Skills | ✓ | ✓ | ✓ | ✓ | ✓ |
| Special Interest Areas | ✓ | ✓ | ✓ | ✓ | ✓ |
| Adventurous Journey | ✗ | ✓ | ✓ | ✓ | ✓ |
| Personal Reflection | ✗ | ✓ | ✓ | ✓ | ✓ |

> **Joeys note:** Joeys participate in a short (3hr) journey activity, but it is not a
> standalone Adventurous Journey program. Include a brief mention on the Overview card only —
> no dedicated sub-page.

---

## 4. Data / Content Summary

### Section colours (from `_data/sections.yml` — do not duplicate in front matter)

| Section | Slug | Primary | Dark |
|---|---|---|---|
| Joey Scouts | `joeys` | `#F4A261` | `#C16733` |
| Cub Scouts | `cubs` | `#E9C46A` | `#FFCD00` |
| Scouts | `scouts` | `#2A9D8F` | `#00A94F` |
| Venturer Scouts | `venturers` | `#A6264C` | `#A6264C` |
| Handfield Rovers | `rovers` | `#DC291E` | `#DC291E` |

### Per-section requirements

| Section | Peak Award | OAS Requirement | SIA Requirement | AJ Requirement | Leadership? |
|---|---|---|---|---|---|
| **Joeys** | Joey Scout Challenge Award | Stage 1 in 3 core OAS (Bushcraft, Bushwalking, Camping); Specialist optional | 6 activities, ≥2 areas, 2hrs each | Participate in a 3hr journey (no sub-page) | ✗ |
| **Cubs** | Grey Wolf Award | Stage 3 in all 3 core OAS, 8 progressions total | 6 activities, ≥2 areas, 4hrs each | Lead a 4hr journey | ✓ (≥1 day) |
| **Scouts** | Australian Scout Award | Stage 5 in all 3 core OAS, 10 progressions total | 6 projects, ≥3 areas, 8hrs each | Plan & lead 3-day, 2-night journey | ✓ (≥weekend) |
| **Venturers** | Venturer Scout Peak Award | Stage 5 in all 3 core OAS, 12 progressions (4 at Stage 4+) | 6 projects, ≥3 areas, 12hrs each | Plan & lead 4-day, 3-night journey | ✓ (≥weekend; must include member not from home unit) |
| **Rovers** | Baden-Powell Scout Award | Stage 5 in all 3 core OAS, 14 progressions (6 at Stage 4+) | 6 projects, ≥4 areas, 18hrs each | Plan & lead 4-day, 3-night journey | ✓ (≥30hrs; must include ≥3 Rovers, 2 from different unit) |

### OAS skill areas

| Skill | Type |
|---|---|
| Bushwalking | Core |
| Bushcraft | Core |
| Camping | Core |
| Paddling | Specialist |
| Vertical | Specialist |
| Boating | Specialist |
| Cycling | Specialist |
| Alpine | Specialist |
| Snorkeling | Specialist |

### SIA areas

STEM & Innovation · Environment · Creative Flare · Growth & Development · Better World · Adventure & Sport

---

## 5. Jekyll Architecture

### Layout

All achievement pathway pages use a **new dedicated layout** — `_layouts/achievement-pathway.html`.
This extends `default` (so it inherits the site nav and footer) but replaces the full page
structure with the two-column sidebar + main content shell. The hero and body content are
rendered by their respective includes.

```html
---
layout: default
---
{% assign section = site.data.sections | where: "slug", page.section_slug | first %}
<div class="achievement-pathway-shell">
  {% include achievement-pathway-hero.html section=section %}
  <div class="ap-body max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-20 relative z-20 pb-20">
    {% include achievement-pathway-nav.html section=section %}
    <main class="lg:col-span-9">
      {{ content }}
    </main>
  </div>
</div>
```

Using a dedicated layout means:
- No hero, join button, meeting time, or `scouting-journey` footer from the `section` layout leaking in
- The sidebar grid shell is owned by the layout, not an include
- Sub-pages only need `layout: achievement-pathway` in front matter — one source of truth

### Front matter schema — Overview page

```yaml
---
layout: achievement-pathway
title: "Cub Scout Achievement Pathway"
permalink: /sections/cubs/achievement-pathway
description: "Follow the path up the mountain — the Achievement Pathway is your personal progression through the Cub Scout program."
section_slug: cubs
age_range: "8–11"
tagline: "Your journey up the mountain."
ap_page: milestones        # used by sidebar nav to highlight active item

pathway:
  peak_award:
    name: "Grey Wolf Award"
    url: "https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/cub-scout-program/peak-award-grey-wolf-award/"
  milestones:
    requirement: "Complete Milestone 3"
    url: "https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/cub-scout-program/program-essentials-milestones/"
    milestone_1: { label: "Participate", url: "..." }
    milestone_2: { label: "Assist", url: "..." }
    milestone_3: { label: "Lead", url: "..." }
  oas:
    summary: "Complete Stage 3 in 3 Core OAS. 8 progressions total."
    url: /sections/cubs/achievement-pathway/outdoor-skills
  sia:
    summary: "Complete 6 activities across at least two areas, 4hrs each"
    url: /sections/cubs/achievement-pathway/special-interests
  adventurous_journey:
    enabled: true
    summary: "Lead a 4hr journey"
    url: /sections/cubs/achievement-pathway/adventurous-journey
  personal_reflection:
    enabled: true
    url: /sections/cubs/achievement-pathway/personal-reflection
  leadership_course:
    enabled: true
    requirement: "Complete a Leadership Course (at least 1 day)"
    url: "https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/cub-scout-program/"
---

{% include achievement-pathway-hero.html %}
{% include achievement-pathway-nav.html %}
{% include achievement-pathway-overview.html %}
```

### Front matter schema — OAS sub-page

```yaml
---
layout: achievement-pathway
title: "Outdoor Adventure Skills — Cub Scouts"
permalink: /sections/cubs/achievement-pathway/outdoor-skills
section_slug: cubs
ap_page: outdoor-skills

oas:
  stage_requirement: 3
  progressions_required: 8
  sv_url: "https://scoutsvictoria.com.au/activities-events/outdoor-adventure-skills/"
  core_skills:
    - { name: "Bushwalking", description: "Navigation, route planning, and leading expeditions through diverse terrain." }
    - { name: "Bushcraft", description: "Pioneering, survival skills, fire lighting, and minimal impact practices." }
    - { name: "Camping", description: "Campcraft, hygiene, cooking, and shelter management in remote environments." }
  specialist_skills:
    - { name: "Paddling", description: "Canoeing, kayaking, and sea kayaking across flatwater and whitewater." }
    - { name: "Vertical", description: "Abseiling, rock climbing, and caving techniques and safety systems." }
    - { name: "Boating", description: "Sailing and powerboating, including navigation and seamanship." }
    - { name: "Cycling", description: "Mountain biking and cycle touring, including maintenance and route planning." }
    - { name: "Alpine", description: "Cross-country skiing, downhill skiing, snowboarding, and snow survival." }
    - { name: "Snorkeling", description: "Snorkeling and SCUBA diving skills, marine environments, and safety." }
---

{% include achievement-pathway-hero.html %}
{% include achievement-pathway-nav.html %}
{% include achievement-pathway-oas.html %}
```

### Front matter schema — SIA sub-page

```yaml
---
layout: achievement-pathway
title: "Special Interest Areas — Cub Scouts"
permalink: /sections/cubs/achievement-pathway/special-interests
section_slug: cubs
ap_page: special-interests

sia:
  projects_required: 6
  areas_required: 2
  hours_per_project: 4
  sv_url: "https://scoutsvictoria.com.au/activities-events/special-interest-areas/"
  areas:
    - { name: "STEM & Innovation", icon: "science", description: "Explore science, technology, engineering, and mathematics." }
    - { name: "Environment", icon: "eco", description: "Projects focused on sustainability, conservation, and understanding the natural world." }
    - { name: "Creative Flare", icon: "palette", description: "Express yourself through arts, performance, design, or literature." }
    - { name: "Growth & Development", icon: "psychology", description: "Personal challenges aimed at improving physical or mental well-being or developing life skills." }
    - { name: "Better World", icon: "public", description: "Community service, advocacy, and projects that actively contribute to peace, justice, and social equity." }
    - { name: "Adventure & Sport", icon: "directions_run", description: "Pursuits involving physical exertion, skill, and often risk, in an outdoor or sporting environment." }
---

{% include achievement-pathway-hero.html %}
{% include achievement-pathway-nav.html %}
{% include achievement-pathway-sia.html %}
```

### Front matter schema — AJ sub-page

```yaml
---
layout: achievement-pathway
title: "Adventurous Journey — Cub Scouts"
permalink: /sections/cubs/achievement-pathway/adventurous-journey
section_slug: cubs
ap_page: adventurous-journey

adventurous_journey:
  requirement: "Lead a 4hr journey"
  sv_url: "https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/cub-scout-program/"
  parameters:
    - { icon: "schedule", title: "Duration & Scale", description: "Minimum 4 hours of continuous activity in the field." }
    - { icon: "group", title: "Leadership", description: "Cubs take a lead role in planning and conducting the journey." }
    - { icon: "menu_book", title: "Documentation", description: "Keep a record of the journey — route, conditions, and reflections." }
  planning_steps:
    - { number: "01", title: "Choose a Route", description: "Select a route that challenges the group while remaining safe. Define waypoints and distance targets." }
    - { number: "02", title: "Plan & Prepare", description: "Check gear, identify water sources, and plan for weather conditions." }
    - { number: "03", title: "Debrief & Record", description: "After the journey, record what went well and what you would do differently." }
---

{% include achievement-pathway-hero.html %}
{% include achievement-pathway-nav.html %}
{% include achievement-pathway-aj.html %}
```

### Front matter schema — Personal Reflection sub-page

```yaml
---
layout: achievement-pathway
title: "Personal Reflection — Cub Scouts"
permalink: /sections/cubs/achievement-pathway/personal-reflection
section_slug: cubs
ap_page: personal-reflection

personal_reflection:
  sv_url: "https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/cub-scout-program/"
  review_panel:
    - "Self-evaluation of your journey against the Promise & Law."
    - "Peer review with members of your Cub Pack."
    - "Final discussion with your Section Leader."
  prompts:
    - { icon: "lightbulb", title: "Skill Acquisition", description: "Which Special Interest areas challenged you the most? How have these new skills prepared you for life beyond Scouting?" }
    - { icon: "forest", title: "The Outdoors", description: "Reflect on your Adventurous Journey. What did you learn about yourself and nature?" }
    - { icon: "handshake", title: "Leadership & Service", description: "How have you helped your Pack and the community? Give specific examples." }
---

{% include achievement-pathway-hero.html %}
{% include achievement-pathway-nav.html %}
{% include achievement-pathway-pr.html %}
```

---

## 6. Visual Design

### Design language (from mockups in `artifacts/data/`)

- **Font:** Nunito Sans (headline + body) — load from Google Fonts
- **Layout:** Full-width hero with asymmetric clip-path bottom edge; CSS Grid sidebar (3 cols)
  + main content (9 cols) on `lg` breakpoint; single column on mobile
- **Sidebar:** Sticky card; active item uses `secondary-container` background; each item has a
  Material Symbol icon + uppercase label; hover slides right by 2–4px
- **Hero:** Mountain photo at ~40% opacity over a gradient overlay; section badge pill
  (section colour + white text); large bold display heading; optional subtitle + CTA button
- **Cards:** `rounded-xl`; varying `surface-container-*` tones for visual hierarchy; bento-grid
  layout on overview page (spanning cards for OAS + PR)
- **Section accent colour:** Applied to badge pill, active nav item, border accents, and the
  peak award diamond; sourced exclusively from `_data/sections.yml`

### Sidebar nav items & icons

| Item | `ap_page` key | Material Symbol |
|---|---|---|
| Milestones | `milestones` | `stairs` |
| Outdoor Skills | `outdoor-skills` | `landscape` |
| Special Interests | `special-interests` | `star` |
| Adventurous Journey | `adventurous-journey` | `map` |
| Personal Reflection | `personal-reflection` | `self_improvement` |

### Per-page content structure

#### Overview / Milestones
1. Hero (mountain photo + section badge pill + tagline + peak award name)
2. Milestone trail — horizontal stepper: Milestone 1 → 2 → 3 → Peak Award diamond (rotated square in section colour)
3. Bento-grid summary cards: OAS (wide), SIA (narrow), AJ (narrow, if enabled), PR (wide, if enabled)
4. "Need a Guide?" support CTA (contact leader)

#### Outdoor Adventure Skills
1. Hero (section badge + "Outdoor Adventure Skills" heading)
2. Stage requirement callout card (e.g. "The Stage 3 Core Requirement") + link to SV page
3. Core skills tagged "CORE SKILL" + specialist skills — 3-column card grid; icon + name + description
4. Link back to overview

#### Special Interest Areas
1. Hero
2. Requirements summary card: goal = N projects, X areas, Y hrs each; Plan-Do-Review note
3. The 6 SIA areas — 2-row × 3-col card grid; icon + name + description
4. Section-level inspiration examples (numbered list + contextual photo)

#### Adventurous Journey
1. Hero (section badge + "Adventurous Journey" heading)
2. Challenge parameters — 3 cards: Duration & Scale, Leadership/Autonomy, Documentation
3. Journey Planning Protocol — numbered steps
4. Link to SV AJ page

#### Personal Reflection
1. Hero (peak award name as badge + "Personal Reflection" heading)
2. Two-column: prose description (left) + Review Panel checklist card (right)
3. Reflection prompts — 3 cards (Skill Acquisition, The Outdoors, Leadership & Service)
4. "Ready to Schedule Your Review?" dark CTA section with button

---

## 7. `_data/achievement_pathway_nav.yml`

```yaml
- key: milestones
  label: Milestones
  icon: stairs
  url: /sections/:section/achievement-pathway

- key: outdoor-skills
  label: Outdoor Skills
  icon: landscape
  url: /sections/:section/achievement-pathway/outdoor-skills

- key: special-interests
  label: Special Interests
  icon: star
  url: /sections/:section/achievement-pathway/special-interests

- key: adventurous-journey
  label: Adventurous Journey
  icon: map
  url: /sections/:section/achievement-pathway/adventurous-journey
  requires_aj: true

- key: personal-reflection
  label: Personal Reflection
  icon: self_improvement
  url: /sections/:section/achievement-pathway/personal-reflection
  requires_pr: true
```

The sidebar include checks `page.pathway.adventurous_journey.enabled` and
`page.pathway.personal_reflection.enabled` (set to `false` on Joeys pages) to hide items that
don't apply.

---

## 8. Implementation Order

1. [ ] Create `_layouts/achievement-pathway.html` (extends `default`)
2. [ ] Create `_data/achievement_pathway_nav.yml`
3. [ ] Build `_includes/achievement-pathway-hero.html`
4. [ ] Build `_includes/achievement-pathway-nav.html`
5. [ ] Update `sections/cubs/achievement-pathway.md` front matter to v2 schema
6. [ ] Build `_includes/achievement-pathway-overview.html` — test with Cubs overview page
7. [ ] Create `sections/cubs/outdoor-skills.md`
8. [ ] Build `_includes/achievement-pathway-oas.html` — test
9. [ ] Create `sections/cubs/special-interests.md`
10. [ ] Build `_includes/achievement-pathway-sia.html` — test
11. [ ] Create `sections/cubs/adventurous-journey.md`
12. [ ] Build `_includes/achievement-pathway-aj.html` — test
13. [ ] Create `sections/cubs/personal-reflection.md`
14. [ ] Build `_includes/achievement-pathway-pr.html` — test
15. [ ] Review Cubs end-to-end in browser — refine layout, colours, typography
16. [ ] Replicate all pages for Scouts, Venturers, Rovers (copy front matter, adjust requirements)
17. [ ] Create Joeys pages (overview + OAS + SIA only)
18. [ ] Add Achievement Pathway CTA buttons to each `sections/{name}.md`
19. [ ] Cross-browser / mobile check

---

## 9. Resolved Design Decisions

| # | Decision | Resolution |
|---|---|---|
| 1 | **Single page vs multi-page** | Multi-page — each component gets a focused dedicated page linked by a persistent sidebar |
| 2 | **SVG mountain visualisation** | Dropped — replaced by a mountain *photo* hero; far simpler to maintain and update |
| 3 | **Sidebar nav data** | Centralised in `_data/achievement_pathway_nav.yml`; `requires_aj` / `requires_pr` flags control visibility per section |
| 4 | **Joeys AJ / PR pages** | Not created — Joeys journey is a brief mention on the overview card only; no sub-pages |
| 5 | **Section colours** | Sourced from `_data/sections.yml` in every include via `section_slug`; never duplicated in page front matter |
| 6 | **File location** | Flat inside each section's subdirectory: `sections/{slug}/outdoor-skills.md` etc.; `permalink` controls the URL |
| 7 | **Jekyll layout** | Dedicated `_layouts/achievement-pathway.html` — does not reuse `section` layout, which carries join buttons, meeting times, and `scouting-journey` footer that don't belong here |
| 8 | **Cubs as reference section** | Build and validate Cubs first; all other sections copy the pattern and adjust requirements |
