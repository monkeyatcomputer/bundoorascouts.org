# Frontmatter Reference

This document details the common frontmatter fields used in Markdown files across the repository.

## General Frontmatter

Frontmatter is the YAML block at the top of Markdown files. It defines metadata for the page.
Common fields:
*   `layout`: Which layout to use (e.g., `default`, `post`, `page`, `expedition`).
*   `title`: The title of the page/post.
*   `description`: Used for SEO meta tags.
*   `image`: Feature image for the page.

## Trip Frontmatter

For **Trips** (in `_trips/`), specific fields are used to link to data:
*   `data_mode`: e.g., `full`
*   `data_location`: Folder name in `_data/` for trip data.
*   `data_itinerary`: File name for itinerary.
*   `data_gallery`: File name for gallery.
*   `data_route`: File name for route.
*   `data_telemetry`: File name for telemetry.
