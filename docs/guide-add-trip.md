# How to Add a Trip

Follow these steps to add a new expedition or trip to the site.

## Steps

1.  **Create a file**: Create a new file in the `_trips/` directory (e.g., `my-trip.md`).
2.  **Add Frontmatter**: Add the following frontmatter block:
    ```yaml
    ---
    layout: expedition
    start_date: YYYY-MM-DD
    end_date: YYYY-MM-DD
    title: "Trip Title"
    subtitle: "Subtitle"
    description: "Description"
    image: /uploads/trip/my-trip/hero.png
    permalink: /trip/my-trip
    published: true
    data_mode: full
    data_location: my-trip # Name of folder in _data/
    data_itinerary: itinerary
    data_gallery: gallery
    data_route: route
    data_telemetry: telemetry
    ---
    ```
3.  **Create Data Folder**: Create a folder in `_data/` with the name matching `data_location` (e.g., `_data/my-trip/`).
4.  **Add Data Files**:
    *   Add `itinerary.yml` and `gallery.yml` to that folder.
    *   Generate `route.yml` and `telemetry.yml` using the script (see Architecture section).
5.  **Images**: Place images in `uploads/trip/my-trip/`.
