---
layout: expedition
title: "Uluru Adventure 2026"
subtitle: "Live Expedition Tracker"
description: "Follow our 15-day journey from Bundoora to the red centre of Australia. Real-time updates as our three buses make their way across the outback."
image: /uploads/hero/uluru.jpg
permalink: /trip/uluru-2026
published: true
sitemap: false
test_date: "2026-06-27T08:00:00"
test_mode: true

# ─── ITINERARY ────────────────────────────────────────────────────────────────
# One entry per calendar day.
# date:      ISO string — JS auto-calculates status: complete / current / upcoming
# location:  Overnight location (map marker label + card heading)
# image:     Day card thumbnail
# events:    Ordered child activities. Each event:
#   time:    HH:MM (24h)
#   type:    depart | travel | activity | lunch | arrive | camp
#   label:   Short display name
#   lat/lng: Coordinates (Leaflet map waypoint)
#   detail:  Optional expanded description (shown on tap/hover)
itinerary:

  - day: 1
    date: "2026-06-27"
    title: "Muster Day"
    location: "Bundoora Scout Hall"
    image: /uploads/2025-08-16-uluru-adventure-2026/bus.jpg
    events:
      - time: "17:30"
        type: arrive
        label: "Arrive at Hall"
        lat: -37.7081
        lng: 145.0631
        detail: "Gear drop-off, final checks, and briefing for tomorrow's early start."

  - day: 2
    date: "2026-06-28"
    title: "Bundoora to Broken Hill"
    location: "Broken Hill"
    image: /uploads/2025-08-16-uluru-adventure-2026/broken-hill.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Bundoora Hall"
        lat: -37.7081
        lng: 145.0631
      - time: "12:30"
        type: lunch
        label: "Lunch Stop — Mildura"
        lat: -34.2068
        lng: 142.1362
      - time: "17:00"
        type: arrive
        label: "Arrive Broken Hill"
        lat: -31.9505
        lng: 141.4534

  - day: 3
    date: "2026-06-29"
    title: "Mine Tour, Broken Hill"
    location: "Broken Hill"
    image: /uploads/2025-08-16-uluru-adventure-2026/silver-mine.jpg
    events:
      - time: "10:00"
        type: activity
        label: "Underground Mine Tour"
        lat: -31.9505
        lng: 141.4534
        detail: "Explore a real working silver mine — helmets on!"
      - time: "12:30"
        type: lunch
        label: "Lunch"
      - time: "17:30"
        type: camp
        label: "Second Night — Broken Hill"
        lat: -31.9505
        lng: 141.4534

  - day: 4
    date: "2026-06-30"
    title: "Broken Hill to Coober Pedy"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/coober-pedy.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Broken Hill"
        lat: -31.9505
        lng: 141.4534
      - time: "14:30"
        type: lunch
        label: "Lunch on Bus — Glendambo Stop"
        lat: -30.9880
        lng: 135.7570
        detail: "Road lunch as the Glendambo stop falls at 2:30pm."
      - time: "18:00"
        type: arrive
        label: "Arrive Coober Pedy"
        lat: -29.0135
        lng: 134.7544

  - day: 5
    date: "2026-07-01"
    title: "Opal Mining, Coober Pedy"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/opal-mining.jpg
    events:
      - time: "09:00"
        type: activity
        label: "Opal Mining Experience"
        lat: -29.0135
        lng: 134.7544
        detail: "Try your luck noodling for precious opals in the world's opal capital."
      - time: "12:30"
        type: lunch
        label: "Lunch"
      - time: "17:30"
        type: camp
        label: "Night — Coober Pedy"
        lat: -29.0135
        lng: 134.7544

  - day: 6
    date: "2026-07-02"
    title: "Coober Pedy Onwards"
    location: "Alice Springs / Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/ghost-town.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Coober Pedy"
        lat: -29.0135
        lng: 134.7544
      - time: "12:30"
        type: lunch
        label: "Lunch — Erldunda"
        lat: -25.1994
        lng: 133.2003
      - time: "17:30"
        type: arrive
        label: "Arrive — Alice Springs / Curtin Springs"
        lat: -25.2744
        lng: 133.7751
        detail: "Group splits here. Bus 1 overnights in Alice Springs; Buses 2 & 3 head to Curtin Springs base camp."

  - day: 7
    date: "2026-07-03"
    title: "MacDonnell Ranges / Curtin Springs"
    location: "Alice Springs / Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/swim-waterhole.jpg
    events:
      - time: "09:00"
        type: activity
        label: "Bus 1 — MacDonnell Ranges"
        lat: -23.6980
        lng: 133.8807
      - time: "09:00"
        type: activity
        label: "Buses 2 & 3 — Curtin Springs Station"
        lat: -25.3184
        lng: 131.7607
      - time: "17:30"
        type: camp
        label: "Night — Alice / Curtin"
        lat: -25.2744
        lng: 133.7751

  - day: 8
    date: "2026-07-04"
    title: "Reunion at Curtin Springs"
    location: "Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/desert-camp.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Bus 1 Departs Alice Springs"
        lat: -23.6980
        lng: 133.8807
      - time: "12:30"
        type: arrive
        label: "Reunion at Curtin Springs"
        lat: -25.3184
        lng: 131.7607
        detail: "All three buses re-group at our main desert base camp."

  - day: 9
    date: "2026-07-05"
    title: "The Heart of Australia"
    location: "Uluru"
    image: /uploads/2025-08-16-uluru-adventure-2026/sunset-uluru.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Depart Curtin Springs"
        lat: -25.3184
        lng: 131.7607
      - time: "10:00"
        type: activity
        label: "Uluru Cultural Centre"
        lat: -25.3444
        lng: 131.0369
      - time: "17:30"
        type: camp
        label: "Night — Uluru Resort"
        lat: -25.2422
        lng: 130.9832

  - day: 10
    date: "2026-07-06"
    title: "Sunrise & Kata Tjuta"
    location: "Uluru / Kata Tjuta"
    image: /uploads/2025-08-16-uluru-adventure-2026/kata-tjuta.jpg
    events:
      - time: "05:30"
        type: activity
        label: "Sunrise at Uluru"
        lat: -25.3444
        lng: 131.0369
      - time: "10:00"
        type: activity
        label: "Kata Tjuta — Valley of the Winds"
        lat: -25.3000
        lng: 130.7333
      - time: "17:30"
        type: camp
        label: "Night — Uluru Resort"
        lat: -25.2422
        lng: 130.9832

  - day: 11
    date: "2026-07-07"
    title: "Uluru to Kings Canyon"
    location: "Kings Canyon"
    image: /uploads/2025-08-16-uluru-adventure-2026/kings-canyon.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Depart Uluru Resort"
        lat: -25.2422
        lng: 130.9832
      - time: "13:00"
        type: arrive
        label: "Arrive Kings Canyon"
        lat: -24.2541
        lng: 131.5731

  - day: 12
    date: "2026-07-08"
    title: "Kings Canyon Rim Walk"
    location: "Kings Canyon"
    image: /uploads/2025-08-16-uluru-adventure-2026/hike-kings-canyon.jpg
    events:
      - time: "07:00"
        type: activity
        label: "Canyon Rim Walk"
        lat: -24.2541
        lng: 131.5731
        detail: "A spectacular 6km loop with breathtaking views of the Garden of Eden."
      - time: "17:30"
        type: camp
        label: "Night — Kings Canyon"
        lat: -24.2541
        lng: 131.5731

  - day: 13
    date: "2026-07-09"
    title: "The Long Drive South"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/long-road.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Kings Canyon"
        lat: -24.2541
        lng: 131.5731
      - time: "12:30"
        type: lunch
        label: "Lunch — Erldunda"
        lat: -25.1994
        lng: 133.2003
      - time: "18:00"
        type: arrive
        label: "Arrive Coober Pedy"
        lat: -29.0135
        lng: 134.7544

  - day: 14
    date: "2026-07-10"
    title: "Coober Pedy to Gawler"
    location: "Gawler"
    image: /uploads/2025-08-16-uluru-adventure-2026/salt-lake.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Coober Pedy"
        lat: -29.0135
        lng: 134.7544
      - time: "12:30"
        type: lunch
        label: "Lunch — Port Augusta"
        lat: -32.4952
        lng: 137.7634
      - time: "17:30"
        type: arrive
        label: "Arrive Gawler"
        lat: -34.6060
        lng: 138.7445

  - day: 15
    date: "2026-07-11"
    title: "Gawler to Home"
    location: "Bundoora Scout Hall"
    image: /uploads/2025-08-16-uluru-adventure-2026/bus.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Gawler"
        lat: -34.6060
        lng: 138.7445
      - time: "12:30"
        type: lunch
        label: "Lunch — Horsham"
        lat: -36.7135
        lng: 142.1998
      - time: "17:30"
        type: arrive
        label: "Arrive Home — Bundoora Scout Hall"
        lat: -37.7081
        lng: 145.0631

# ─── GALLERY ──────────────────────────────────────────────────────────────────
gallery:
  - image: /uploads/2025-08-16-uluru-adventure-2026/hike-uluru.jpg
    alt: "Scouts hiking at Uluru"
    caption: "Uluru Base Walk, Day 11"
    span: large
  - image: /uploads/2025-08-16-uluru-adventure-2026/camel-ride.jpg
    alt: "Venturers on camel ride at sunrise"
    caption: "Sunrise Camel Ride"
    span: normal
  - image: /uploads/2025-08-16-uluru-adventure-2026/hike-kings-canyon.jpg
    alt: "Kings Canyon rim walk"
    caption: "Kings Canyon, Day 10"
    span: normal
  - image: /uploads/2025-08-16-uluru-adventure-2026/opal-mining.jpg
    alt: "Opal mining in Coober Pedy"
    caption: "Opal Mining, Day 5"
    span: wide
  - image: /uploads/2025-08-16-uluru-adventure-2026/silver-mine.jpg
    alt: "Underground silver mine tour"
    caption: "Mine Tour, Broken Hill"
    span: normal
  - image: /uploads/2025-08-16-uluru-adventure-2026/salt-lake.jpg
    alt: "Venturers at the salt lake"
    caption: "Salt Lake Stop"
    span: normal
---
