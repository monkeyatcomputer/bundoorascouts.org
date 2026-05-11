# Repository Architecture

This document describes the folder structure and key components of the Bundoora Scouts repository.

## Repository Layout

The repository follows a standard Jekyll structure with some custom additions for specific features like trip tracking.

*   `_config.yml`: The main configuration file for the Jekyll site.
*   `_data/`: Contains YAML files with data used across the site (navigation, footer, sponsors, etc.).
*   `_includes/`: Reusable HTML snippets (navbars, footers, cards, etc.).
*   `_layouts/`: Templates for different page types (post, page, trip, etc.).
*   `_people/`: Collection for people (e.g., leaders).
*   `_posts/`: Blog posts.
*   `_trips/`: Collection for expeditions/trips (e.g., Kangaroo Island 2023).
*   `assets/`: Static assets like CSS, JS, and images used for the site design.
*   `uploads/`: User-uploaded content or media specific to posts/trips (e.g., trip photos).
*   `scripts/`: Custom scripts (e.g., for precomputing routes).
*   `docs/`: This documentation folder (excluded from the site build).

## Layouts (`_layouts/`)

Layouts provide the HTML skeleton for pages.
*   `default.html`: The base layout for most pages.
*   `post.html`: Layout for blog posts.
*   `trip.html` / `expedition.html`: Specialized layouts for trip pages with maps and timelines.

## Includes (`_includes/`)

Includes are reusable components.
*   `nav.html`: The main navigation bar.
*   `footer.html`: The footer.
*   `trip-banner.html`: Banner used on trip pages.
*   `expedition-map.html`: Complex include for rendering maps on expedition pages.

## Scripts (`scripts/`)

*   `scripts/precompute_route.js`: This script is used to precompute route data and telemetry for maps. It generates the `route.yml` and `telemetry.yml` files located in the trip's data folder within `_data/` (e.g., `_data/ki-2023/`).

## Assets & Uploads

*   **Assets** (`assets/`): Contains CSS (processed by Tailwind), JS, and theme-related images.
*   **Uploads** (`uploads/`): Contains images and media uploaded for specific content, such as trip photos or post images. Organized by topic (e.g., `uploads/trip/ki-2023/`).
