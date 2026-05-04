---
layout: default
title: Home – Bundoora Scouts
description: Bundoora Scouts – The Modern Trailfinder. Preparing youth for the trail ahead through adventure, leadership, and community.
image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHXw1B00pi49bVZwX7lXst0lCd2K-uNjRBm0zG9OB4eW6ypPZTEmBEUNepc1BX9MWkGRfNc26GcyB6l8huVLHjbnMmBdISKy2cXpGNS2NKvGYBPdxdrDUCdnMzkLQunzqFhW74TTn1MmbnDnPGauxRpYDf9ea3PJ5Wlq4D0UTm4dh3O1tHsEEdqFmC0yNlusFRmjUKXebC3-Ca7AnHeQIxtAnaqb9x3N3orChQ7AL1d4_COzGidNaedweMwSvZN2xr7m0BQEcYCM4"
---

<!-- Hero Section -->
<section class="relative w-full min-h-[700px] flex items-center bg-surface-container-low overflow-hidden shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <img src="{{ page.image }}" 
         alt="Scouts hiking" 
         class="w-full h-full object-cover opacity-80 mix-blend-multiply"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
  </div>
  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-24 md:pt-48 md:pb-32">
    <div class="max-w-2xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-tertiary text-on-tertiary text-sm font-bold tracking-widest uppercase">
        The Modern Trailfinder
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        Adventure Awaits in Bundoora.
      </h1>
      <p class="text-xl text-primary-fixed-dim mb-10 leading-relaxed font-body">
        Empowering youth through outdoor education, leadership, and community. Join the journey from Joeys to Rovers.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="#scouting-sections" class="bg-secondary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg">
          Find Your Section
        </a>
        <a href="/about/" class="bg-surface-container-highest/20 backdrop-blur-sm text-on-primary px-8 py-4 rounded-lg font-medium border border-outline-variant/30 hover:bg-surface-container-highest/30 transition-all duration-300">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Sections Bento Grid -->
<section id="scouting-sections" class="max-w-[1440px] mx-auto px-6 md:px-12 mt-24 mb-24">
  <div class="flex items-center justify-between mb-16">
    <div>
      <h2 class="text-3xl md:text-5xl font-black text-primary tracking-tighter">Our <br/><span class="text-secondary">Sections.</span></h2>
      <p class="text-on-surface-variant mt-2 text-lg">A progressive journey of discovery.</p>
    </div>
    <a href="/sections/" class="bg-white text-primary px-6 py-3 rounded-lg font-bold shadow-sm hover:scale-105 transition-transform flex items-center gap-2">
      View All Sections<span class="material-symbols-outlined">arrow_forward</span>
    </a>
  </div>
  
  <div class="max-w-7xl mx-auto">
    {% assign active_sections = site.data.sections | where: "active", true %}
    {% assign count = active_sections | size %}
    
    <div class="flex flex-wrap justify-center gap-8">
      {% for s in active_sections %}
        <div class="flex flex-col w-full 
             {% if count == 1 %} max-w-2xl
             {% elsif count == 2 or count == 4 %} md:w-[calc(50%-1rem)] lg:max-w-[500px]
             {% else %} lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)]
             {% endif %}"
             data-gsap="reveal" data-delay="{{ forloop.index | times: 0.1 }}">
          {% include section-card.html section=s %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Latest from The Campfire -->
<section class="bg-surface-container-low rounded-[3xl] py-24 px-6 md:px-12 mx-4 lg:mx-8 mb-24">
  <div class="max-w-[1440px] mx-auto">
    <div class="flex items-center justify-between mb-16">
      <h2 class="text-3xl md:text-5xl font-black text-primary tracking-tighter">Latest from <br/><span class="text-on-tertiary-container">The Campfire.</span></h2>
      <a href="/the-campfire/" class="bg-white text-primary px-6 py-3 rounded-lg font-bold shadow-sm hover:scale-105 transition-transform flex items-center gap-2">
        Read All Stories <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {% for post in site.posts limit:3 %}
        <div data-gsap="reveal" data-delay="{{ forloop.index | times: 0.1 }}">
          {% include blog-card.html post=post %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

