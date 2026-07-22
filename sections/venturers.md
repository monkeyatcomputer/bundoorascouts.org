---
layout: section
title: "Venturer Scouts"
permalink: /sections/venturers
redirect_from: [/sections/venturer-scouts]
description: "Self-directed program focused on personal growth, major expeditions, and vocational skills. For 15 to 18 year olds, the only limits are the ones they set themselves."
tagline: "Lead your own adventure."
age_range: "15–18"
colour: "#A6264C"
colour_dark: "#A6264C"
icon: hiking
section_slug: venturers
motto: "Look Wide"
award:
  title: "Award Scheme"
  name: "King's Scout Award"
  description: "The highest achievement for Venturer Scouts. The King's Scout Award recognizes outstanding leadership, initiative, and personal development through a self-directed program."
features:
  - icon: terrain
    title: "Adventurous Activities"
    description: "Caving, flying, rock climbing, abseiling, and white-water kayaking."
  - icon: group_add
    title: "Leadership & Management"
    description: "Units are self-governing, giving you the freedom to choose your own activities."
  - icon: self_improvement
    title: "Personal Growth"
    description: "Push your limits and discover what you're truly capable of."
  - icon: psychology
    title: "Vocational Skills"
    description: "Gain certificates and skills that translate directly to your future career."
intro:
  title: "Look Wide, Reach High"
  paragraphs:
    - "Life as a Venturer Scout is about making your own challenges. Scaling a 30m rock-face or abseiling into caves may frighten most people, but Venturers face it head-on."
    - "We fully support the Venturer section and transition our older Scouts into it, but we \"home\" our Venturer Scouts at other nearby groups to ensure they have access to a full unit experience."
    - "If you're interested in joining Venturers, please get in touch with us via our contact form and we'll help you find the right group!"
  rotation: "-rotate-1"
testimonials:
  - quote: "Venturers is where things get real. We plan our own adventures, push our limits, and learn stuff that actually matters – all while having a laugh with mates who’ve got your back."
    source: "A Venturer Scout"
badge_card:
  title: "The Achievement Pathway"
  description: "Follow the path up the mountain! The Achievement Pathway is your personal progression through the program towards the King's Scout Award."
  url: "/sections/venturers/achievement-pathway"
  icon: "terrain"
  button_text: "Explore the Pathway"
---

## What to Expect

{% include feature-grid.html features=page.features colour=page.colour %}

## {{ page.intro.title }}

{% include section-intro.html 
   section_slug=page.section_slug 
   paragraphs=page.intro.paragraphs 
   rotation=page.intro.rotation %}

{% include badge-card.html %}

## Our Promise and Law

{% include promise-law.html 
   colour=page.colour 
   motto=page.motto 
   section_slug=page.section_slug
   award_title=page.award.title 
   award_name=page.award.name 
   award_description=page.award.description %}

## What Our Families Say

{% include testimonial-grid.html testimonials=page.testimonials colour=page.colour %}

{% include info-grid.html colour=page.colour %}

{% assign section_people = site.people | where: "section", page.section_slug %}
{% if section_people.size > 0 %}
## Meet the Leaders

{% include leader-grid.html section_slug=page.section_slug colour=page.colour %}
{% endif %}
