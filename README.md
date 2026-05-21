# ⚜️ Bundoora Scout Group Website

Welcome to the digital den of the **Bundoora Scout Group**! We were *scouting* for a better way to connect with our community, and this repository is where we've set up camp.

This is a modern, responsive website built with Jekyll, designed to help our members *Be Prepared* for their next adventure.

## Pitch Your Tent (Local Setup)

If you want to run this project locally and explore the trail, follow these steps:

1. **Be Prepared**: Ensure you have [Ruby](https://www.ruby-lang.org/) and [Bundler](https://bundler.io/) installed.
2. **Setup Camp**: Clone the repository and navigate into the folder.
3. **Pack Your Gear**: Install the dependencies:
   ```bash
   bundle install
   ```
4. **Light the Fire**: Start the Jekyll development server:
   ```bash
   bundle exec jekyll serve --livereload
   ```
5. **Follow the Map**: Open your browser to `http://localhost:4000`.

### Windows note

On this machine, `tailwindcss-ruby` installs correctly but does not automatically resolve its bundled executable during Jekyll builds. If `bundle exec jekyll build` or `bundle exec jekyll serve` fails with a `Tailwindcss::Ruby::ExecutableNotFoundException`, set `TAILWINDCSS_INSTALL_DIR` to the gem's platform binary directory before running Jekyll:

```powershell
$env:TAILWINDCSS_INSTALL_DIR="$HOME\.local\share\gem\ruby\3.4.0\gems\tailwindcss-ruby-4.2.4-x64-mingw-ucrt\exe\x64-mingw-ucrt"
bundle exec jekyll build --trace
```

## Trail Map (Project Structure)

This repo is organized to keep things as neat as a well-tied bowline:

*   `_people/`: Profiles of our amazing leaders.
*   `_posts/`: News and updates from **The Campfire**.
*   `sections/`: Dedicated pages for Joeys, Cubs, Scouts, Venturers, and Rovers.
*   `_data/`: The group's inventory—galleries, navigation, and more.
*   `_includes/` & `_layouts/`: The structural lashing that holds the site together.
*   `assets/`: Images, scripts, and our CSS toolkit.

## The Gear (Tech Stack)

*   **Jekyll**: Our static site generator—it's *knot* your average CMS.
*   **Tailwind CSS**: For a UI that earns a badge for visual excellence.
*   **GitHub Pages**: Our reliable basecamp for hosting.

## Scout's Honor (Legal)

We take digital safety as seriously as we take child safety.
*   **[Privacy Policy](/privacy-policy.md)**: Based on the Scouts Victoria 2020 framework.
*   **[Terms and Conditions](/terms.md)**: Ensuring everyone follows the law of the trail.

## Helping Hand (Contributing)

Notice a bug or want to suggest an improvement? Don't be a *lost scout*! 
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/NewTrail`).
3. Commit your changes (`git commit -m 'Blaze a new trail'`).
4. Push to the branch (`git push origin feature/NewTrail`).
5. Open a Pull Request.

---

*“The most worth-while thing is to try to put happiness into the lives of others.”* — Lord Baden-Powell

**Made with ❤️, a little help from a 🤖, and a lot of coffee by the Bundoora Scout Group, and published to the web via GitHub Pages.**
