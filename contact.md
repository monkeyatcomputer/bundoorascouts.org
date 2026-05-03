---
layout: page
title: "Contact Us"
badge: "Get in touch"
description: "Whether you want to enrol your child, volunteer as a leader, or just find out more — we'd love to hear from you."
hero_image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHXw1B00pi49bVZwX7lXst0lCd2K-uNjRBm0zG9OB4eW6ypPZTEmBEUNepc1BX9MWkGRfNc26GcyB6l8huVLHjbnMmBdISKy2cXpGNS2NKvGYBPdxdrDUCdnMzkLQunzqFhW74TTn1MmbnDnPGauxRpYDf9ea3PJ5Wlq4D0UTm4dh3O1tHsEEdqFmC0yNlusFRmjUKXebC3-Ca7AnHeQIxtAnaqb9x3N3orChQ7AL1d4_COzGidNaedweMwSvZN2xr7m0BQEcYCM4"
---

<div class="max-w-[1440px] mx-auto">

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

    <!-- Contact Form -->
    <div>
      <h2 class="font-headline text-2xl font-bold text-primary mb-8">Send us a message</h2>
      <form id="contact-form" class="flex flex-col gap-6" action="mailto:info@bundoorascouts.org" method="POST" enctype="text/plain">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label for="contact-name" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Your Name</label>
            <input id="contact-name" name="name" type="text" required
                   placeholder="Jane Smith"
                   class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"/>
          </div>
          <div class="flex flex-col gap-2">
            <label for="contact-email" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Email Address</label>
            <input id="contact-email" name="email" type="email" required
                   placeholder="jane@example.com"
                   class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"/>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-subject" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">What can we help with?</label>
          <select id="contact-subject" name="subject"
                  class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all">
            <option value="enrol">Enrolling my child</option>
            <option value="volunteer">Volunteering as a leader</option>
            <option value="hall-hire">Hall hire enquiry</option>
            <option value="general">General question</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-message" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Message</label>
          <textarea id="contact-message" name="message" rows="5" required
                    placeholder="Tell us a bit about yourself..."
                    class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all resize-none"></textarea>
        </div>

        <button type="submit" id="contact-submit"
                class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-headline font-bold text-base hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(16,14,76,0.2)]">
          Send Message <span class="material-symbols-outlined">send</span>
        </button>

      </form>
    </div>

    <!-- Contact Info -->
    <div class="flex flex-col gap-8">
      <h2 class="font-headline text-2xl font-bold text-primary">Get in touch directly</h2>

      <div class="flex flex-col gap-6">

        <div class="flex flex-row gap-6 p-8 bg-surface-container-low rounded-2xl items-start not-prose">
          <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary text-2xl">location_on</span>
          </div>
          <div class="flex-1">
            <h3 class="mt-0 font-headline font-bold text-primary text-2xl mb-2 leading-tight">Scout Hall</h3>
            <p class="text-on-surface-variant text-base leading-relaxed">
              Bundoora Scout Group<br/>
              20 Noorong Ave<br/>
              Bundoora, VIC 3083
            </p>
          </div>
        </div>

        <div class="flex flex-row gap-6 p-8 bg-surface-container-low rounded-2xl items-start not-prose">
          <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary text-2xl">schedule</span>
          </div>
          <div class="flex-1">
            <h3 class="mt-0 font-headline font-bold text-primary text-2xl mb-3 leading-tight">Meeting Times</h3>
            <div class="space-y-3">
              {% assign meeting_sections = site.data.sections | where_exp: "item", "item.time" %}
              {% for section in meeting_sections %}
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 pb-2 border-b border-outline-variant/10 last:border-0 last:pb-0">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-xs uppercase tracking-wider" style="color: {{ section.colour }};">
                    {{ section.name }}
                  </span>
                </div>
                <span class="text-on-surface-variant text-xs font-medium">{{ section.time }}</span>
              </div>
              {% endfor %}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
