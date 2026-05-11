# How to Add a Blog Post

Follow these steps to add a new blog post to the site.

## Steps

1.  **Create a file**: Create a new file in the `_posts/` directory.
    *   The filename MUST follow the format: `YYYY-MM-DD-title.md` (e.g., `2026-05-11-new-adventure.md`).
2.  **Add Frontmatter**: At the very top of the file, add the following frontmatter block:
    ```yaml
    ---
    layout: post
    title: "Your Post Title"
    date: YYYY-MM-DD HH:MM:SS +1000
    categories: [tag1, tag2] # Optional
    image: /uploads/path-to-image.jpg # Optional
    ---
    ```
    *   Replace `Your Post Title` with the actual title.
    *   Replace `YYYY-MM-DD HH:MM:SS +1000` with the current date and time (or post date).
3.  **Write Content**: Below the closing `---`, write your post content in Markdown.
4.  **Images**: If you have images, place them in the appropriate folder in `uploads/` and reference them in the frontmatter or content.
