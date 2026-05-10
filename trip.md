---
layout: default
title: Expeditions
description: "Follow our adventures and expeditions across the country."
permalink: /trip/
---

<!-- Hero Section -->
<section class="relative w-full min-h-[400px] flex items-center bg-primary-container overflow-hidden mb-12 shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <div class="w-full h-full" style="background: linear-gradient(135deg, #1e3a8a, #0f172a); opacity: 0.8;"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20 md:pt-40 md:pb-24">
    <div class="max-w-3xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-on-primary text-sm font-bold tracking-widest uppercase shadow-sm">
        Our Journeys
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        Major <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-tertiary-fixed">Expeditions</span>
      </h1>
      <p class="text-xl text-primary-fixed-dim leading-relaxed font-body">
        Follow our tracks, view live telemetry, and share the adventure of our major trips across Australia.
      </p>
    </div>
  </div>
</section>

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
    {% else %}
      <div class="text-center py-24 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-4">explore</span>
        <h3 class="text-2xl font-bold text-primary">No expeditions found</h3>
        <p class="text-on-surface-variant">Check back later for updates on our upcoming adventures.</p>
      </div>
    {% endif %}

  </div>
</main>
