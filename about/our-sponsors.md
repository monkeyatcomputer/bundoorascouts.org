---
layout: page
title: "Meet the Sponsors"
description: "Bundoora Scouts thrives thanks to the generous support of our local community partners and businesses. Their contributions help us provide life-changing adventures and essential skills to youth in our area."
---

<div class="max-w-[1440px] mx-auto w-full">

  <!-- Sponsors Grid -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for sponsor in site.data.sponsors %}
    <article class="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container shadow-[0_20px_40px_-15px_rgba(16,14,76,0.04)] relative overflow-hidden group">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative z-10">
        <div class="h-32 mb-8 bg-white rounded-xl flex items-center justify-center p-6 shadow-sm border border-outline-variant/10">
          <img src="{{ sponsor.logo }}" alt="{{ sponsor.name }}" class="max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity">
        </div>
        <h3 class="font-headline text-2xl font-bold text-primary mb-4 tracking-tight">{{ sponsor.name }}</h3>
        <p class="font-body text-on-surface-variant leading-relaxed text-sm mb-6">
          {{ sponsor.description }}
        </p>
      </div>
      <div class="relative z-10 mt-auto">
        <span class="inline-block bg-on-tertiary-container/10 text-on-tertiary-container font-label text-[0.75rem] uppercase tracking-wider px-4 py-1 rounded-full font-bold">
          {{ sponsor.tier }}
        </span>
      </div>
    </article>
    {% endfor %}
  </section>

  <!-- Call to Action Section -->
  <section class="mt-24 bg-surface-container-high rounded-3xl p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-[0_20px_40px_-15px_rgba(16,14,76,0.05)] relative overflow-hidden">
    <div class="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent hidden md:block"></div>
    <div class="max-w-2xl relative z-10">
      <h2 class="font-headline text-3xl font-bold text-primary mb-4 tracking-tight">Become a Supporter</h2>
      <p class="font-body text-on-surface-variant mb-8 md:mb-0 text-lg leading-relaxed">
        Interested in partnering with Bundoora Scouts? We are always looking for community-minded businesses to help us nurture the next generation of leaders.
      </p>
    </div>
    <div class="relative z-10">
      <a href="/contact/?subject=partnership" class="inline-flex bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-headline font-bold text-base hover:scale-[1.02] transition-transform shadow-[0_8px_20px_rgba(16,14,76,0.2)] whitespace-nowrap">
        Partner With Us
      </a>
    </div>
  </section>
</div>
