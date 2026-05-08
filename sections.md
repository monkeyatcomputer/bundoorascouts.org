---
layout: default
title: "Our Sections – Bundoora Scouts"
permalink: /sections
description: "Explore all five Bundoora Scouts youth sections – from Joey Scouts (ages 5–8) all the way through to Rovers (18–26). Find the right section for your child."
---

<!-- Hero Section -->
<section class="relative w-full min-h-[400px] lg:min-h-[500px] flex items-center bg-primary-container overflow-hidden mb-12 shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <img src="{{ page.image }}" 
         alt="Scouting discovery background" 
         class="w-full h-full object-cover opacity-40 mix-blend-multiply"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent"></div>
  </div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-40 pb-20 lg:pt-48 lg:pb-24">
    <div class="max-w-3xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-on-primary text-sm font-bold tracking-widest uppercase shadow-sm">
        Our Sections
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        A Journey of <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-tertiary-fixed">Discovery.</span>
      </h1>
      <p class="text-xl text-primary-fixed-dim leading-relaxed font-body">
        Scouting is a progressive journey of discovery. Every section builds on the last, developing skills, confidence, and lifelong friendships in a safe and supportive environment.
      </p>
    </div>
  </div>
</section>

<div class="pb-20">

  <!-- Smart Section Grid -->
  <div class="max-w-7xl mx-auto px-6 md:px-12 not-prose">
    {% include section-grid.html %}
  </div>

  {% include scouting-journey.html %}

</div>
