# Directory & File Reference

This document provides a detailed reference for the files in key directories: `_layouts/`, `_includes/`, and `_people/`.

## Layouts (`_layouts/`)

Layouts are the templates that wrap your content.

*   `default.html`: The master layout. Contains the HTML skeleton, `<head>`, navigation, and footer.
*   `achievement-pathway.html`: Used for pages detailing the scouting achievement pathway.
*   `blog.html`: Used for the main blog listing page or category pages.
*   `expedition.html`: A specialized, complex layout for trip tracking pages (like Kangaroo Island 2023). Includes maps and timelines.
*   `page.html`: The standard layout for content pages (e.g., About, Contact).
*   `post.html`: The layout for individual blog posts.
*   `section.html`: Used for pages describing specific scouting sections (Joeys, Cubs, Scouts, Venturers, Rovers).
*   `trip.html`: A layout for blog posts detailing upcoming expeditions/trips.

## Includes (`_includes/`)

Includes are reusable snippets of HTML. They are organized by function.

### Navigation & Structure
*   `nav.html`: The main top navigation bar.
*   `footer.html`: The site footer.
*   `achievement-pathway-nav.html`: Navigation specific to the achievement pathway section.
*   `scouting-page-nav.html`: Navigation for scouting pages.
*   `post-nav.html`: Navigation between posts.

### Cards & Grids (Used for listings)
*   `badge-card.html`: Displays a badge.
*   `blog-card.html`: Displays a summary of a blog post for grid listings.
*   `leader-card.html`: Displays a leader's photo and info.
*   `section-card.html`: Displays a scouting section (e.g., Joeys) with a link.
*   `sponsor-card.html`: Displays a sponsor logo and info.
*   `trip-card.html`: Displays a summary of a trip.

### Feature Specific Includes
*   `achievement-pathway-*.html`: Various includes for the achievement pathway sections (overview, peak, oas, sia, etc.).
*   `expedition-map.html`: Renders the map for expedition pages.
*   `expedition-timeline.html`: Renders the timeline for expedition pages.
*   `image-gallery.html`: Renders an image gallery.

### General UI Components
*   `motto-box.html`: Displays a motto or callout box.
*   `share-bar.html`: Social sharing buttons.
*   `youtube.html`: Embeds a YouTube video.

*(Note: There are many files in `_includes/`. They are generally named after the component or page section they represent.)*

## People (`_people/`)

This directory contains Markdown files for individuals, typically leaders or active members. These files are part of a Jekyll Collection.

Each file represents a person:
*   `ainsley.md`, `bruce.md`, `glenn.md`, etc.

These files contain frontmatter with details like name, role, and image. They are used to generate leader grids and profiles on the site (e.g., in `_includes/leader-grid.html` or `_includes/leader-stack.html`).
