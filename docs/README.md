# Repository Documentation - Bundoora Scouts

This documentation is intended for anyone who needs to maintain or understand the Bundoora Scouts website repository.

## Documentation Sections

*   [Repository Architecture](architecture.md): Layout, layouts, includes, scripts, assets & uploads.
*   [Directory & File Reference](directory_reference.md): Details on files in `_layouts/`, `_includes/`, and `_people/`.
*   [Configuration](configuration.md): Explanation of `_config.yml`.
*   [Data & Collections](data_collections.md): Data files and collections.
*   [Frontmatter Reference](frontmatter.md): Details on frontmatter fields.

## How-To Guides

*   [How to add a blog post](guide-add-blog-post.md)
*   [How to add a trip](guide-add-trip.md)
*   [How to add a regular page](guide-add-page.md)

## Running Locally

To run the site locally for development:

1.  Ensure you have Ruby installed.
2.  Install Bundler: `gem install bundler`
3.  Install dependencies: `bundle install`
4.  Run the site: `bundle exec jekyll serve`
5.  Open `http://localhost:4000` in your browser.

*Note: The `docs/` folder is excluded from the build and will not be visible on the local server or the published site. It is only for reference in the repository on GitHub.*
