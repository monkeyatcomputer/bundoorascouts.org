---
title: "The Countdown to Uluru Begins: 50 Days to Go!"
subtitle: "From careful planning to the red dust of the outback"
description: "The Bundoora Scouts Uluru Adventure is almost here. 50 days until we hit the road with our friends from across Victoria."
image: /uploads/hero/uluru.jpg
author:
    - hamish
categories:
    - Scouts
    - Venturer Scouts
tags:
    - Uluru 2026
    - Adventure
    - Expedition
    - Camp
groups:
  - name: "Bundoora Scouts"
    image: "/assets/images/logo.png"
    description: "Trip Organizers"
  - name: "Heany Park Scouts"
    image: "/uploads/2025-08-16-uluru-adventure-2026/heany-park.png"
    description: "Trip Organizers"
    url: "https://heanyparkscouts.com.au/"
  - name: "Carlton Scouts"
    image: "/assets/images/logo-sv-light.svg"
    url: "https://www.carltonscoutgroup.com"
  - name: "Eaglemont Scouts"
    image: "/uploads/2025-08-16-uluru-adventure-2026/eaglemont.png"
    url: "https://eaglemontscouts.org.au"
  - name: "Gembrook Scouts"
    image: "/assets/images/logo-sv-light.svg"
    url: "https://scoutsvictoria.com.au/location/1ST-GEMBROOK"
  - name: "Greenhills Scouts"
    image: "/uploads/2025-08-16-uluru-adventure-2026/greenhills.png"
    url: "https://1stgreenhills.org.au"
  - name: "Grovedale Scouts"
    image: "/assets/images/logo-sv-light.svg"
    url: "https://scoutsvictoria.com.au/location/1st-grovedale/"
  - name: "Watsonia Scouts"
    image: "/uploads/2025-08-16-uluru-adventure-2026/watsonia.png"
    url: "https://www.watsoniascoutcentre.org.au"
---

It’s getting real… very real!

In a little over **50 days**, the Bundoora Scouts Uluru Adventure shifts from careful planning into red dust, long roads, and an experience of a lifetime.

> The countdown is on, the nerves are fluttering, and the excitement is building - Uluru, we’re coming!

### The Excitement is Building

There’s a growing mix of excitement, pride, and a little trepidation as this expedition we’ve been preparing for suddenly feels very close. Gear is coming together, final plans are locking in - and the reality of heading to the red heart of Australia is setting in.

We've done the pre-camp shakedown, now there's only one thing left to do...

### A Journey Shared

We’ve been incredibly fortunate to be planning this journey alongside our friends from **[Heany Park Scouts](https://heanyparkscouts.com.au/)**, whose collaboration and support have been invaluable every step of the way. 

And we won’t be traveling alone! We’re thrilled that Scouts from across Victoria will be joining us on this truly epic adventure:

<section class="my-12 py-12 bg-surface-container-lowest rounded-[3rem] border border-outline-variant/10 shadow-sm not-prose">
  <div class="flex flex-wrap justify-center gap-x-12 gap-y-10 px-6">
    {% for group in page.groups %}
    <div class="flex flex-col items-center text-center max-w-[120px] group/item">
      {% if group.url %}
      <a href="{{ group.url }}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center">
      {% endif %}
        <div class="w-24 h-24 rounded-full bg-white shadow-ambient-md border border-outline-variant/10 flex items-center justify-center overflow-hidden mb-4 group-hover/item:scale-110 transition-transform duration-300">
          <img src="{{ group.image }}" alt="{{ group.name }}" class="w-16 h-16 object-contain">
        </div>
        <h5 class="font-headline font-bold text-primary text-xs leading-tight">{{ group.name }}</h5>
      {% if group.url %}
      </a>
      {% endif %}
      {% if group.description %}
      <p class="text-[10px] text-secondary font-black uppercase tracking-tighter mt-1">{{ group.description }}</p>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>


### Follow the Adventure

To help everyone share in the journey, we’ve launched a **countdown timer and live expedition tracker**. Parents, carers, and friends will be able to follow along and see exactly where our adventurers are once we’re on the road.

<div class="flex flex-wrap gap-4 not-prose">
    <a href="/trip/uluru-2026" 
       class="text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
       style="background: linear-gradient(135deg, #3f5e94, #100e4c);">
        <span class="material-symbols-outlined group-hover:rotate-12 transition-transform">explore</span>
        Track the Uluru Expedition
        <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
    </a>
</div>

The countdown is on, and the excitement is building — **Uluru, here we come!**


