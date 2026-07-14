---
layout: default
title: Expeditions
description: "Follow our adventures and expeditions across the country."
permalink: /trip/
---

<header class="hero-shell bg-primary-container">
  <div class="hero-media">
    <div class="hero-fallback" style="--hero-fallback-start: #1e3a8a; --hero-fallback-end: #0f172a;"></div>
    <div class="hero-overlay"></div>
  </div>

  <div class="site-container hero-content">
    <div class="hero-copy">
      <span class="eyebrow eyebrow--tertiary">
        Our Journeys
      </span>
      <h1 class="hero-title">
        Major <span class="hero-title-accent">Expeditions</span>
      </h1>
      <p class="hero-description">
        Follow our tracks, view live telemetry, and share the adventure of our major trips across Australia.
      </p>
    </div>
  </div>
</header>

<main class="flex-grow w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
  <div class="w-full">
    
    <!-- Trips Listing -->
    {% assign trips = site.trips | sort: "start_date" | reverse %}
    
    {% if trips.size > 0 %}
      <div class="space-y-12">
        {% for trip in trips %}
          {% include trip-card.html trip=trip %}
        {% endfor %}
      </div>
      {% include trip-contact.html variant="next_adventure" %}
    {% else %}
      <div class="text-center py-24 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-4" aria-hidden="true">explore</span>
        <h3 class="text-2xl font-bold text-primary">No expeditions found</h3>
        <p class="text-on-surface-variant">Check back later for updates on our upcoming adventures.</p>
      </div>
    {% endif %}

  </div>
</main>
