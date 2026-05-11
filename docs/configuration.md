# Configuration

This document explains the main configuration file for the site.

## `_config.yml`

The `_config.yml` file controls the Jekyll build process. Key sections include:

*   **Plugins**: Uses plugins like `jekyll-paginate-v2`, `jekyll-sitemap`, `jekyll-tailwind`, etc.
*   **Collections**: Defines `people` and `trips` collections. `trips` are output to the site, while `people` might not be (output: false).
*   **Exclude**: Lists files and folders that Jekyll should ignore during the build. `docs/` has been added here to ensure it only lives on GitHub.
