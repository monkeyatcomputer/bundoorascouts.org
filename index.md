---
layout: default
title: Home – Bundoora Scouts
description: Bundoora Scouts – The Modern Trailfinder. Preparing youth for the trail ahead through adventure, leadership, and community.
image: "/uploads/hero/aerial.jpg"
---

<!-- Hero Section -->
<section class="relative w-full min-h-[700px] flex items-center bg-surface-container-low overflow-hidden shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <img src="{{ page.image }}" 
         alt="Scouts hiking" 
         class="w-full h-full object-cover opacity-80 mix-blend-multiply"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
  </div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-24 lg:pt-48 lg:pb-32">
    <div class="max-w-2xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-tertiary text-on-tertiary text-sm font-bold tracking-widest uppercase">
        The Modern Trailfinder
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        Adventure Awaits in <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-tertiary-fixed">Bundoora.</span>
      </h1>
      <p class="text-xl text-primary-fixed-dim mb-10 leading-relaxed font-body">
        Empowering youth through outdoor education, leadership, and community. Join the journey from Joeys to Rovers.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="#scouting-sections" class="bg-secondary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg">
          Find Your Section
        </a>
        <a href="/about" class="bg-surface-container-highest/20 backdrop-blur-sm text-on-primary px-8 py-4 rounded-lg font-medium border border-outline-variant/30 hover:bg-surface-container-highest/30 transition-all duration-300">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Sections Bento Grid -->
<section id="scouting-sections" class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mt-6 mb-6">
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
    <div>
      <h2 class="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-[0.85]">
        Our <br/>
        <span class="text-secondary">Sections.</span>
      </h2>
      <p class="text-on-surface-variant mt-4 text-lg md:text-xl">A progressive journey of discovery.</p>
    </div>
    <a href="/sections" class="flex-shrink-0 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 border border-outline-variant/10">
      View All Sections <span class="material-symbols-outlined">arrow_forward</span>
    </a>
  </div>
  
  <div class="max-w-7xl mx-auto not-prose">
    {% include section-grid.html %}
  </div>
</section>

<!-- Latest from The Campfire -->
<section class="bg-surface-container-low rounded-[3xl] mx-2 sm:mx-4 lg:mx-8 mb-6">
  <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-4">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
      <h2 class="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-[0.85]">
        Latest from <br/>
        <span class="text-on-tertiary-container">The Campfire.</span>
      </h2>
      <a href="/the-campfire" class="flex-shrink-0 bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 border border-outline-variant/10">
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

<!-- Hall Hire CTA Section -->
<section class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-12" data-gsap="reveal">
  <div class="relative bg-surface-container-high rounded-[3rem] overflow-hidden shadow-ambient-lg border border-outline-variant/20">
    <div class="absolute inset-0 z-0">
      <img src="/uploads/hall-hire/Main-Hall-2.jpg" alt="Bundoora Scout Hall Interior" class="w-full h-full object-cover opacity-20 mix-blend-overlay">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5"></div>
    </div>
    
    <div class="relative z-10 flex flex-col md:flex-row items-center">
      <div class="w-full md:w-1/2 p-6 sm:p-8 md:p-16 lg:p-24">
        <span class="inline-block px-4 py-1 mb-6 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase border border-secondary/20">
          Venue Hire
        </span>
        <h2 class="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-[0.9] mb-8">
          A Space for the <br/>
          <span class="text-secondary">Community.</span>
        </h2>
        <p class="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg">
          Our affordable, versatile hall in N.J. Telfer Reserve is the perfect venue for your next class, meeting, or event.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/about/hall-hire" class="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl">
            Learn More
          </a>
          <a href="https://www.spacetoco.com/space/bundoora-scout-hall" target="_blank" class="bg-white/50 backdrop-blur-md text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/80 transition-all border border-primary/10 flex items-center gap-3">
            <span class="material-symbols-outlined">event_available</span>
            Book Now
          </a>
        </div>
      </div>
      
      <div class="w-full md:w-1/2 p-8 md:pr-16 lg:pr-24 hidden md:block">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <img src="/uploads/hall-hire/Main-Hall-1.jpg" alt="Hall interior" class="rounded-3xl shadow-lg w-full aspect-square object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/uploads/hall-hire/Kitchen-1.jpg" alt="Kitchen" class="rounded-3xl shadow-lg w-full aspect-video object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500">
          </div>
          <div class="space-y-4 pt-12">
            <img src="/uploads/hall-hire/Parking.jpg" alt="Parking" class="rounded-3xl shadow-lg w-full aspect-video object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="/uploads/hall-hire/Bio-Garden.jpg" alt="Garden" class="rounded-3xl shadow-lg w-full aspect-square object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>