---
layout: default
title: "Our Sections — Bundoora Scouts"
description: "Explore all five Bundoora Scouts youth sections — from Joey Scouts (ages 5–8) all the way through to Rovers (18–26). Find the right section for your child."
---

<!-- Hero Section -->
<section class="relative w-full min-h-[500px] flex items-center bg-primary-container overflow-hidden mb-12 shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnIAnfVpIno6p_Yg629u1Z_G_O98U6-6S0v1Y_8Z2x_O6X87MsenFKDnKcJNQsnxr3Fp-2t3fQx85Uk__-0ZgqRKDbJzbj_N6mXwzZWor57nvhPMWz4D_ixdGtv-cT13sqUREL2R_DlRUaUAuUMTr1ytn5BcSWGHsO3Ls-ImTy-RbeQKDapsajiWMerbozm1cvvEGOtLPlkFpKbYz2h_nlN7pgT3raDPzBNOyJQddTWZbI47Tx681w-5bn3lB2A" 
         alt="Scouting discovery background" 
         class="w-full h-full object-cover opacity-40 mix-blend-multiply"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent"></div>
  </div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-48 md:pb-24">
    <div class="max-w-3xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-on-primary text-sm font-bold tracking-widest uppercase shadow-sm">
        Our Sections
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        A Journey of <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary-container">Discovery.</span>
      </h1>
      <p class="text-xl text-primary-fixed-dim leading-relaxed font-body">
        Scouting is a progressive journey of discovery. Every section builds on the last, developing skills, confidence, and lifelong friendships in a safe and supportive environment.
      </p>
    </div>
  </div>
</section>

<div class="pb-20">

  <!-- Smart Section Grid -->
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    {% assign active_sections = site.data.sections | where: "active", true %}
    {% assign count = active_sections | size %}
    
    <div class="flex flex-wrap justify-center gap-8">
      {% for s in active_sections %}
        <div data-gsap="reveal" data-delay="{{ forloop.index | times: 0.1 }}"
             class="flex flex-col w-full 
             {% if count == 1 %} max-w-2xl
             {% elsif count == 2 or count == 4 %} md:w-[calc(50%-1rem)] lg:max-w-[500px]
             {% else %} lg:w-[calc(33.333%-1.5rem)] md:w-[calc(50%-1rem)]
             {% endif %}">
          {% include section-card.html section=s %}
        </div>
      {% endfor %}
    </div>
  </div>

  {% include scouting-journey.html %}

</div>
