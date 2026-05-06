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
#   type:    depart | travel | activity | lunch | dinner | arrive | camp
#   label:   Short display name
#   lat/lng: Coordinates (Leaflet map waypoint)
#   bus:     Optional array [1, 2, 3] if event is specific to certain buses
#   detail:  Optional expanded description (shown on tap/hover)
itinerary:

  - day: 1
    date: "2026-06-27"
    title: "Muster Day"
    location: "Bundoora Scout Hall"
    image: /uploads/2025-08-16-uluru-adventure-2026/bus.jpg
    events:
      - time: "17:00"
        type: arrive
        label: "Muster at Bundoora Hall"
        lat: -37.7046500
        lng: 145.0631543
        detail: "All three buses and support vehicles assemble. Final packing and logistics briefing."
      - time: "18:30"
        type: dinner
        label: "Group Dinner"
        lat: -37.7046500
        lng: 145.0631543

  - day: 2
    date: "2026-06-28"
    title: "Bundoora to Broken Hill"
    location: "Broken Hill"
    image: /uploads/2025-08-16-uluru-adventure-2026/broken-hill.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Bundoora Hall"
        lat: -37.7046500
        lng: 145.0631543
      - time: "09:30"
        type: travel
        label: "Charlton Rest Stop"
        lat: -36.2731100
        lng: 143.3592200
      - time: "12:30"
        type: lunch
        label: "Lunch Stop — Mildura"
        lat: -34.1852300
        lng: 142.1630100
      - time: "15:30"
        type: travel
        label: "Wentworth Turnoff"
        lat: -34.1031200
        lng: 141.9142400
      - time: "17:30"
        type: arrive
        label: "Arrive Broken Hill"
        lat: -31.9568100
        lng: 141.4650200
      - time: "18:30"
        type: dinner
        label: "Dinner at Broken Hill"

  - day: 3
    date: "2026-06-29"
    title: "Mine Tour & Living Desert"
    location: "Broken Hill"
    image: /uploads/2025-08-16-uluru-adventure-2026/silver-mine.jpg
    events:
      - time: "09:00"
        type: activity
        label: "Living Desert Sculptures"
        lat: -31.8950400
        lng: 141.4320100
      - time: "11:30"
        type: activity
        label: "Underground Mine Tour"
        lat: -31.9567950
        lng: 141.4649750
      - time: "13:00"
        type: lunch
        label: "Lunch in Town"
      - time: "15:00"
        type: activity
        label: "Royal Flying Doctor Service"
        lat: -31.99602
        lng: 141.46803
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 4
    date: "2026-06-30"
    title: "Broken Hill to Coober Pedy"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/coober-pedy.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Broken Hill"
        lat: -31.9567950
        lng: 141.4649750
      - time: "10:00"
        type: travel
        label: "Peterborough"
        lat: -32.9754100
        lng: 138.8412200
      - time: "12:30"
        type: lunch
        label: "Lunch — Port Augusta"
        lat: -32.4930100
        lng: 137.7660200
      - time: "15:30"
        type: travel
        label: "Glendambo"
        lat: -30.9880100
        lng: 135.7570100
      - time: "18:30"
        type: arrive
        label: "Arrive Coober Pedy"
        lat: -29.0140200
        lng: 134.7530300
      - time: "19:30"
        type: dinner
        label: "Underground Dinner"

  - day: 5
    date: "2026-07-01"
    title: "Opal Mining & Breakaways"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/opal-mining.jpg
    events:
      - time: "09:00"
        type: activity
        label: "Opal Mining Experience"
        lat: -29.0140200
        lng: 134.7530300
      - time: "12:30"
        type: lunch
        label: "Lunch"
      - time: "14:30"
        type: activity
        label: "The Breakaways Lookout"
        lat: -28.8470100
        lng: 134.6540200
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 6
    date: "2026-07-02"
    title: "Coober Pedy to The Centre"
    location: "Alice Springs / Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/ghost-town.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Coober Pedy"
        lat: -29.0140200
        lng: 134.7530300
      - time: "09:30"
        type: travel
        label: "Marla"
        lat: -27.2974100
        lng: 133.6212200
      - time: "12:30"
        type: lunch
        label: "Lunch — Erldunda"
        lat: -25.2230100
        lng: 133.1950200
      - time: "15:30"
        type: arrive
        label: "Bus 2 & 3: Arrive Curtin Springs"
        lat: -25.3090620
        lng: 131.7247730
        bus: [2, 3]
      - time: "17:30"
        type: arrive
        label: "Bus 1: Arrive Alice Springs"
        lat: -23.7027870
        lng: 133.8828340
        bus: [1]
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 7
    date: "2026-07-03"
    title: "Ranges & Stations"
    location: "Alice Springs / Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/swim-waterhole.jpg
    events:
      - time: "09:00"
        type: activity
        label: "Bus 1: West MacDonnell Ranges"
        lat: -23.6700100
        lng: 133.2700200
        bus: [1]
      - time: "09:00"
        type: activity
        label: "Bus 2 & 3: Mount Conner Lookout"
        lat: -25.3000100
        lng: 131.9000200
        bus: [2, 3]
      - time: "12:30"
        type: lunch
        label: "Lunch"
      - time: "14:00"
        type: activity
        label: "Bus 1: Simpson's Gap"
        lat: -23.6780100
        lng: 133.7220200
        bus: [1]
      - time: "14:00"
        type: activity
        label: "Bus 2 & 3: Curtin Springs Station"
        lat: -25.30906
        lng: 131.72477
        bus: [2, 3]
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 8
    date: "2026-07-04"
    title: "Reunion at Curtin Springs"
    location: "Curtin Springs"
    image: /uploads/2025-08-16-uluru-adventure-2026/desert-camp.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Bus 1: Depart Alice Springs"
        lat: -23.7027870
        lng: 133.8828340
        bus: [1]
      - time: "10:30"
        type: travel
        label: "Bus 1: Erldunda"
        lat: -25.2230100
        lng: 133.1950200
        bus: [1]
      - time: "12:30"
        type: arrive
        label: "Reunion at Curtin Springs"
        lat: -25.3090620
        lng: 131.7247730
      - time: "14:00"
        type: activity
        label: "Camp Prep & Skills"
        lat: -25.3090620
        lng: 131.7247730
      - time: "18:30"
        type: dinner
        label: "Camp Oven Dinner"

  - day: 9
    date: "2026-07-05"
    title: "The Heart of Australia"
    location: "Uluru"
    image: /uploads/2025-08-16-uluru-adventure-2026/sunset-uluru.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Depart Curtin Springs"
        lat: -25.30906
        lng: 131.72477
      - time: "09:30"
        type: arrive
        label: "Uluru Cultural Centre"
        lat: -25.3500100
        lng: 131.0200200
      - time: "12:30"
        type: lunch
        label: "Lunch — Uluru Base"
        lat: -25.3444100
        lng: 131.0369200
      - time: "14:00"
        type: activity
        label: "Uluru Base Walk"
        lat: -25.34441
        lng: 131.03692
      - time: "17:30"
        type: activity
        label: "Sunset Viewing"
        lat: -25.3383330
        lng: 131.0058330
      - time: "19:00"
        type: arrive
        label: "Yulara Resort"
        lat: -25.2422100
        lng: 130.9832200
      - time: "19:30"
        type: dinner
        label: "Dinner"

  - day: 10
    date: "2026-07-06"
    title: "Sunrise & Kata Tjuta"
    location: "Uluru / Kata Tjuta"
    image: /uploads/2025-08-16-uluru-adventure-2026/kata-tjuta.jpg
    events:
      - time: "05:30"
        type: depart
        label: "Depart for Sunrise"
        lat: -25.2422100
        lng: 130.9832200
      - time: "06:30"
        type: activity
        label: "Sunrise at Uluru"
        lat: -25.33833
        lng: 131.00583
      - time: "10:00"
        type: activity
        label: "Kata Tjuta — Valley of the Winds"
        lat: -25.2847290
        lng: 130.7259110
      - time: "12:30"
        type: lunch
        label: "Lunch at Kata Tjuta"
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 11
    date: "2026-07-07"
    title: "Uluru to Kings Canyon"
    location: "Kings Canyon"
    image: /uploads/2025-08-16-uluru-adventure-2026/kings-canyon.jpg
    events:
      - time: "08:00"
        type: depart
        label: "Depart Uluru Resort"
        lat: -25.24221
        lng: 130.98322
      - time: "10:30"
        type: travel
        label: "Angas Downs"
        lat: -25.02941
        lng: 132.26122
      - time: "12:30"
        type: lunch
        label: "Lunch — Kings Creek Station"
        lat: -24.40201
        lng: 131.81502
      - time: "14:30"
        type: arrive
        label: "Arrive Kings Canyon Resort"
        lat: -24.2557540
        lng: 131.5702700
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 12
    date: "2026-07-08"
    title: "Kings Canyon Rim Walk"
    location: "Kings Canyon"
    image: /uploads/2025-08-16-uluru-adventure-2026/hike-kings-canyon.jpg
    events:
      - time: "07:00"
        type: activity
        label: "Canyon Rim Walk"
        lat: -24.2557540
        lng: 131.5702700
      - time: "12:30"
        type: lunch
        label: "Lunch"
      - time: "14:30"
        type: activity
        label: "Kings Creek Hike"
        lat: -24.40201
        lng: 131.81502
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 13
    date: "2026-07-09"
    title: "The Long Drive South"
    location: "Coober Pedy"
    image: /uploads/2025-08-16-uluru-adventure-2026/long-road.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Kings Canyon"
        lat: -24.2557540
        lng: 131.5702700
      - time: "10:30"
        type: travel
        label: "Erldunda"
        lat: -25.22301
        lng: 133.19502
      - time: "13:00"
        type: lunch
        label: "Lunch — Marla"
        lat: -27.29741
        lng: 133.62122
      - time: "15:30"
        type: travel
        label: "Cadney Park"
        lat: -28.25401
        lng: 134.16802
      - time: "18:00"
        type: arrive
        label: "Arrive Coober Pedy"
        lat: -29.01402
        lng: 134.75303
      - time: "19:00"
        type: dinner
        label: "Dinner"

  - day: 14
    date: "2026-07-10"
    title: "Coober Pedy to Gawler"
    location: "Gawler"
    image: /uploads/2025-08-16-uluru-adventure-2026/salt-lake.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Coober Pedy"
        lat: -29.01402
        lng: 134.75303
      - time: "09:00"
        type: travel
        label: "Glendambo"
        lat: -30.98801
        lng: 135.75701
      - time: "12:30"
        type: lunch
        label: "Lunch — Port Augusta"
        lat: -32.49301
        lng: 137.76602
      - time: "15:00"
        type: travel
        label: "Port Pirie"
        lat: -33.18121
        lng: 138.01692
      - time: "17:30"
        type: arrive
        label: "Arrive Gawler"
        lat: -34.60301
        lng: 138.74902
      - time: "18:30"
        type: dinner
        label: "Dinner"

  - day: 15
    date: "2026-07-11"
    title: "Gawler to Home"
    location: "Bundoora Scout Hall"
    image: /uploads/2025-08-16-uluru-adventure-2026/bus.jpg
    events:
      - time: "06:00"
        type: depart
        label: "Depart Gawler"
        lat: -34.60301
        lng: 138.74902
      - time: "09:00"
        type: travel
        label: "Bordertown"
        lat: -36.31211
        lng: 140.76812
      - time: "12:30"
        type: lunch
        label: "Lunch — Horsham"
        lat: -36.71351
        lng: 142.19982
      - time: "15:30"
        type: travel
        label: "Ballarat"
        lat: -37.56221
        lng: 143.85032
      - time: "18:00"
        type: arrive
        label: "Arrive Home — Bundoora Scout Hall"
        lat: -37.7046500
        lng: 145.0631543
      - time: "19:00"
        type: arrive
        label: "Expedition Complete"

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
