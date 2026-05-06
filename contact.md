---
layout: page
title: "Contact Us"
permalink: /contact
redirect_from: [/contact-us/]
badge: "Get in touch"
description: "Whether you want to enrol your child, volunteer as a leader, or just find out more – we'd love to hear from you."
---

<div class="max-w-[1440px] mx-auto not-prose">

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

    <!-- Contact Form -->
    <div>
      <h2 class="font-headline text-2xl font-bold text-primary mb-8">Send us a message</h2>
      <form id="contact-form" class="flex flex-col gap-6" action="{{ site.formspree_action }}" method="POST">
        <input type="hidden" name="_subject" value="New contact from bundoorascouts.org website">

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2 sm:col-span-2">
            <label for="contact-name" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Your Name <span class="text-error">*</span></label>
            <input id="contact-name" name="name" type="text" required
                   placeholder="Jane Smith"
                   class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"/>
          </div>
          <div class="flex flex-col gap-2">
            <label for="contact-email" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Email Address <span class="text-error">*</span></label>
            <input id="contact-email" name="_replyto" type="email" required
                   placeholder="jane@example.com"
                   class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"/>
          </div>
          <div class="flex flex-col gap-2">
            <label for="contact-phone" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Phone Number</label>
            <input id="contact-phone" name="phone" type="tel"
                   placeholder="0412 345 678"
                   class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all"/>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <span class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">What can we help with? <span class="text-error">*</span> <span class="normal-case font-normal opacity-70">(Select at least one)</span></span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {% assign help_options = "Joey Scouts - 5 to 7 Years,Cub Scouts - 8 to 10 Years,Scouts - 11 to 14 Years,Venturer Scouts - 15 to 17 Years,Rovers - 18 to 25 Years,Leaders and Adult Members,Hall Hire,Other" | split: "," %}
            {% for option in help_options %}
            <label class="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/20 bg-surface-container-high cursor-pointer hover:bg-surface-container-highest transition-colors">
              <input type="checkbox" name="help_with" value="{{ option }}" class="w-5 h-5 rounded border-outline text-primary focus:ring-secondary/30">
              <span class="text-on-surface text-sm">{{ option }}</span>
            </label>
            {% endfor %}
          </div>
        </div>

        <div id="extranet-suggestion" class="hidden">
          <div class="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
            <h4 class="font-headline font-bold text-primary text-lg mb-1">Ready to start the adventure?</h4>
            <p class="text-on-surface-variant text-sm mb-4">If you're looking to join, you can register your interest directly on the Scouts Victoria extranet. You can still send us a message if you just have a question!</p>
            <div id="extranet-buttons" class="flex flex-wrap gap-3">
              {% for section in site.data.sections %}
                {% if section.sectionid %}
                  {% assign encoded_id = section.sectionid | url_encode %}
                  {% assign join_url = site.onboarding_url | append: encoded_id %}
                  <a href="{{ join_url }}"
                    data-section-name="{{ section.name }}"
                    target="_blank" rel="noopener"
                    class="extranet-btn hidden text-white px-6 py-3 rounded-lg font-headline font-bold text-sm hover:scale-[1.02] transition-transform shadow-sm items-center justify-center gap-2"
                    style="background: linear-gradient(135deg, {{ section.colour | default: '#3f5e94' }}, {{ section.colour_dark | default: section.colour | default: '#100e4c' }});">
                    Join {{ section.name }} <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                {% endif %}
              {% endfor %}
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="contact-comments" class="text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Message <span class="text-error">*</span></label>
          <textarea id="contact-comments" name="comments" rows="5" required
                    placeholder="Tell us a bit about yourself..."
                    class="bg-surface-container-high border border-outline-variant/20 rounded-lg px-4 py-3 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all resize-none"></textarea>
        </div>
        
        <!-- reCAPTCHA -->
        <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
        <script>
          function onSubmit(token) {
            document.getElementById('contact-form').submit();
          }
          
          document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contact-form');
            const checkboxes = Array.from(form.querySelectorAll('input[name="help_with"]'));
            
            document.getElementById('contact-submit').addEventListener('click', function(event) {
              var isChecked = checkboxes.some(cb => cb.checked);
              
              if (!isChecked) {
                checkboxes[0].setCustomValidity('Please select at least one option.');
              } else {
                checkboxes[0].setCustomValidity('');
              }

              if (!form.checkValidity()) {
                event.preventDefault();
                event.stopImmediatePropagation();
                form.reportValidity();
              }
            }, true);

            
            const extranetSuggestion = document.getElementById('extranet-suggestion');
            const extranetButtons = Array.from(document.querySelectorAll('.extranet-btn'));

            const sectionMap = {
              'Joey Scouts - 5 to 7 Years': 'Joey Scouts',
              'Cub Scouts - 8 to 10 Years': 'Cub Scouts',
              'Scouts - 11 to 14 Years': 'Scouts'
            };

            function updateExtranetVisibility() {
              let showExtranet = false;
              const selectedSections = [];

              checkboxes.forEach(cb => {
                if (cb.checked && sectionMap[cb.value]) {
                  showExtranet = true;
                  selectedSections.push(sectionMap[cb.value]);
                }
              });

              if (showExtranet) {
                extranetSuggestion.classList.remove('hidden');
                extranetButtons.forEach(btn => {
                  if (selectedSections.includes(btn.dataset.sectionName)) {
                    btn.classList.remove('hidden');
                    btn.classList.add('inline-flex');
                  } else {
                    btn.classList.add('hidden');
                    btn.classList.remove('inline-flex');
                  }
                });
              } else {
                extranetSuggestion.classList.add('hidden');
              }
            }

            checkboxes.forEach(cb => {
              cb.addEventListener('change', () => {
                checkboxes[0].setCustomValidity('');
                updateExtranetVisibility();
              });
            });

            // Initial check
            updateExtranetVisibility();
          });
        </script>

        <button type="submit" id="contact-submit"
                class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-lg font-headline font-bold text-base hover:scale-[1.02] transition-transform shadow-[0_10px_30px_rgba(16,14,76,0.2)] g-recaptcha" data-sitekey="{{ site.recapcha_site_key }}" data-callback="onSubmit" data-action="site_contact">
          Send Message <span class="material-symbols-outlined">send</span>
        </button>

        <div class="text-xs text-on-surface-variant opacity-50">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.
        </div>

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
                  <span class="font-bold text-base uppercase tracking-wider" style="color: {{ section.colour }};">
                    {{ section.name }}
                  </span>
                </div>
                <span class="text-on-surface-variant text-base font-medium">{{ section.time }}</span>
              </div>
              {% endfor %}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
