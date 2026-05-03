---
layout: default
title: Our Leaders
description: Meet the dedicated volunteer team behind Bundoora Scouts. Highly trained and passionate about empowering the next generation of trailfinders.
---

<!-- Hero Section -->
<header class="relative w-full min-h-[500px] flex items-center bg-primary-container overflow-hidden mb-12 shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <img src="{{ page.image }}" 
         alt="Scouts around campfire" 
         class="w-full h-full object-cover opacity-40 mix-blend-multiply"/>
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-48 md:pb-24">
    <div class="max-w-3xl">
      <span class="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-on-primary text-sm font-bold tracking-widest uppercase shadow-sm">
        Meet the Team
      </span>
      <h1 class="text-5xl md:text-7xl font-bold font-headline text-on-primary mb-6 leading-tight tracking-tight">
        {% assign title_words = page.title | split: " " %}
        {% for word in title_words %}
          {% if forloop.last %}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary-container">{{ word }}</span>
          {% else %}
            {{ word }} 
          {% endif %}
        {% endfor %}
      </h1>
      <p class="text-xl text-primary-fixed-dim leading-relaxed mb-10 font-body">
        At Bundoora Scouts, our volunteer leaders are the heart of our community. Dedicated, passionate, and highly trained, they guide our youth members through life-changing experiences, fostering growth, resilience, and a love for the great outdoors.
      </p>
      
      <div class="flex gap-4 items-center">
        <div class="flex -space-x-4">
          {% assign stack_leaders = site.people | limit: 3 %}
          {% for leader in stack_leaders %}
          <div class="w-12 h-12 rounded-full border-4 border-primary bg-surface-container-highest overflow-hidden shadow-lg">
            <img src="/assets/images/people/{{ leader.title | downcase }}.jpg" alt="{{ leader.title }}" class="w-full h-full object-cover" onerror="this.src='/assets/images/people/nophoto.jpg'">
          </div>
          {% endfor %}
        </div>
        <div class="text-sm font-bold text-on-primary-container bg-primary-container/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-sm">
          {{ site.people.size }} Active Leaders
        </div>
      </div>
    </div>
  </div>
</header>


<div class="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-32">

  {% assign leader_sections = site.data.sections | where: "show_on_leaders", true %}
  
  {% for section in leader_sections %}
    {% assign section_people = site.people | where: "section", section.slug %}
    {% if section_people.size > 0 %}
      
      <section data-gsap="reveal">
        <div class="relative flex items-end justify-between mb-12">
          <div class="border-l-4 pl-6" style="border-color: {{ section.colour }};">
            <h2 class="text-3xl font-black text-primary tracking-tight">{{ section.name }}</h2>
            <p class="text-on-surface-variant">{{ section.leader_tagline }}</p>
          </div>
          {% if section.logo-light %}
            <img src="{{ section.logo-light }}" alt="{{ section.name }} Logo" class="absolute right-0 top-0 hidden md:block w-28 h-auto select-none pointer-events-none">
          {% elsif section.shortname %}
            <span class="absolute right-0 top-0 hidden md:block font-black text-6xl opacity-10 select-none uppercase pointer-events-none" style="color: {{ section.colour }};">{{ section.shortname }}</span>
          {% endif %}
        </div>

        <div class="grid grid-cols-1 {% if section.slug == 'group' %}md:grid-cols-3{% else %}md:grid-cols-4{% endif %} gap-8">
          {% for person in section_people %}
            {% include leader-card.html person=person colour=section.colour %}
          {% endfor %}
        </div>
      </section>
    {% endif %}
  {% endfor %}

</div>
