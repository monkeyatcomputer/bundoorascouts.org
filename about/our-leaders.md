---
layout: default
title: Our Leaders
description: Meet the dedicated volunteer team behind Bundoora Scouts. Highly trained and passionate about empowering the next generation of trailfinders.
---

<!-- Hero Section -->
<header class="relative w-full min-h-[500px] flex items-center bg-surface-container-low overflow-hidden mb-12 shadow-ambient-lg">
  <div class="absolute inset-0 z-0">
    <div class="w-full h-full bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 md:pt-48 md:pb-24">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      <div data-gsap="reveal">
        <span class="text-tertiary-fixed font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Meet the Team</span>
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-on-primary mb-8 leading-[0.9]">
          Our <span class="text-secondary-fixed">Leaders</span>
        </h1>
        <p class="text-xl text-primary-fixed-dim leading-relaxed max-w-xl font-body">
          At Bundoora Scouts, our volunteer leaders are the heart of our community. Dedicated, passionate, and highly trained, they guide our youth members through life-changing experiences, fostering growth, resilience, and a love for the great outdoors.
        </p>
        <div class="mt-10 flex gap-4">
          <div class="flex -space-x-4">
            {% assign stack_leaders = site.people | limit: 3 %}
            {% for leader in stack_leaders %}
            <div class="w-12 h-12 rounded-full border-4 border-primary bg-surface-container-highest overflow-hidden">
              <img src="/assets/images/people/{{ leader.title | downcase }}.jpg" alt="{{ leader.title }}" class="w-full h-full object-cover" onerror="this.src='/assets/images/people/nophoto.jpg'">
            </div>
            {% endfor %}
          </div>
          <div class="text-sm font-semibold self-center text-on-primary-container bg-primary-container px-3 py-1 rounded-full">
            {{ site.people.size }} Active Leaders
          </div>
        </div>
      </div>
      <div class="relative hidden md:block" data-gsap="reveal" data-delay="0.2">
        <div class="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl border-8 border-white/10">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnJp-ZCAR8tI6YeV7nSQUR3i7p9x5mQ3EF5cTkAEXD_Mn6zS8h11fZ0Gi5uaqsKxu_g0OM5Y4XeUjPz4MMj4EkKXNYzCSVU-xQPBZjLNf5X5cBKEbDKruG9Gi7FTIv-Uv-mroIKweqcJfhxP4F-WnEFLPhLNsm1FnoTq350nTa2lSQJQvcBfhUU-2zN0DAPVHBGuwdvOyNG4a5gRbwQrU1vg0e7OVgQI_tR3Hh9mQbLaSjN4-n3iZTO6LtyBpAACMOTIfxw2rrk" 
               alt="Scouts around campfire" class="w-full h-full object-cover">
        </div>
        <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
          <span class="material-symbols-outlined text-secondary text-4xl block mb-2">volunteer_activism</span>
          <p class="text-xs font-bold text-primary uppercase tracking-widest leading-tight">100% Volunteer Powered</p>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-32">

  {% assign sections = "group,joey-scouts,cub-scouts,scouts,venturer-scouts,rover-scouts,adult-volunteer" | split: "," %}
  
  {% for section_slug in sections %}
    {% assign section_people = site.people | where: "section", section_slug %}
    {% if section_people.size > 0 %}
      
      {% case section_slug %}
        {% when 'group' %}
          {% assign section_name = "Group Leadership" %}
          {% assign section_desc = "The strategic core of Bundoora Scouts." %}
          {% assign section_color = "#100e4c" %}
          {% assign section_label = "GROUP" %}
        {% when 'joey-scouts' %}
          {% assign section_name = "Joey Scouts" %}
          {% assign section_desc = "Leaders for our 5-7 year old explorers." %}
          {% assign section_color = "#F4A261" %}
          {% assign section_label = "JOEYS" %}
        {% when 'cub-scouts' %}
          {% assign section_name = "Cub Scouts" %}
          {% assign section_desc = "Leaders for our 8-10 year old adventurers." %}
          {% assign section_color = "#E9C46A" %}
          {% assign section_label = "CUBS" %}
        {% when 'scouts' %}
          {% assign section_name = "Scouts" %}
          {% assign section_desc = "Mentors for our 11-14 year old scouts." %}
          {% assign section_color = "#2A9D8F" %}
          {% assign section_label = "SCOUTS" %}
        {% when 'venturer-scouts' %}
          {% assign section_name = "Venturers" %}
          {% assign section_desc = "Advisors for our 15-17 year old pioneers." %}
          {% assign section_color = "#A6264C" %}
          {% assign section_label = "VENTURERS" %}
        {% when 'rover-scouts' %}
          {% assign section_name = "Rovers" %}
          {% assign section_desc = "Supporting our 18-25 year old leaders." %}
          {% assign section_color = "#DC291E" %}
          {% assign section_label = "ROVERS" %}
        {% when 'adult-volunteer' %}
          {% assign section_name = "Adult Supporters" %}
          {% assign section_desc = "Valued volunteers assisting our group operations." %}
          {% assign section_color = "#3f5e94" %}
          {% assign section_label = "TEAM" %}
      {% endcase %}

      <section data-gsap="reveal">
        <div class="flex items-end justify-between mb-12 border-l-8 pl-6" style="border-color: {{ section_color }};">
          <div>
            <h2 class="text-4xl font-black text-primary tracking-tight">{{ section_name }}</h2>
            <p class="text-on-surface-variant text-lg">{{ section_desc }}</p>
          </div>
          <span class="hidden md:block font-black text-8xl opacity-5 select-none" style="color: {{ section_color }};">{{ section_label }}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {% for person in section_people %}
            <div class="group bg-surface-container-lowest p-8 rounded-2xl hover:shadow-ambient transition-all duration-500 border border-outline-variant/30 flex flex-col">
              <div class="flex items-center gap-6 mb-8">
                <div class="w-24 h-24 rounded-2xl overflow-hidden bg-surface-container-high group-hover:scale-105 transition-transform duration-500 shadow-md">
                  <img src="/assets/images/people/{{ person.title | downcase }}.jpg" 
                       alt="{{ person.title }}" 
                       class="w-full h-full object-cover"
                       onerror="this.src='/assets/images/people/nophoto.jpg'">
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-primary leading-tight">{{ person.title }}</h3>
                  {% if person.alias and person.alias != "" %}
                    <p class="text-secondary font-bold text-sm italic mb-1">"{{ person.alias }}"</p>
                  {% endif %}
                  <p class="text-on-surface-variant font-bold text-xs uppercase tracking-widest">{{ person.role }}</p>
                </div>
              </div>
              <!-- Decorative section accent -->
              <div class="mt-auto pt-6 flex justify-end">
                <div class="w-12 h-1 rounded-full" style="background-color: {{ section_color }};"></div>
              </div>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endif %}
  {% endfor %}

</div>