# How to Add a Regular Page

Follow these steps to add a new regular page to the site.

## Steps

1.  **Create a file**: Create a new Markdown file in the root directory or a subdirectory.
    *   Example: `new-page.md` in the root.
    *   Example: `scouting/new-page.md` for a page in the scouting section.
2.  **Add Frontmatter**: Add the following frontmatter block:
    ```yaml
    ---
    layout: page # or 'default' depending on needs
    title: "Page Title"
    permalink: /page-url/
    ---
    ```
    *   Replace `Page Title` with the title.
    *   Replace `/page-url/` with the desired URL path.
3.  **Write Content**: Below the closing `---`, write your page content in Markdown.
4.  **Navigation**: If you want the page to appear in the main navigation, you must add it to `_data/navigation.yml`.
