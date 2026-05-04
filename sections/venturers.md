---
layout: section
title: "Venturer Scouts"
redirect_from: [/sections/venturer-scouts/]
description: "Self-directed program focused on personal growth, major expeditions, and vocational skills. For 15 to 18 year olds, the only limits are the ones they set themselves."
tagline: "Lead your own adventure."
age_range: "15–18"
colour: "#A6264C"
colour_dark: "#A6264C"
icon: hiking
section_slug: venturers
motto: "Be Prepared"
award:
  title: "Award Scheme"
  name: "King's Scout Award"
  description: "The highest achievement for Venturers. It requires setting goals, planning progress, and maintaining determination to complete challenging tasks, often recognized on school exit certificates."
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
    - "You’ll work in units with other Venturers and Adult Leaders who act as mentors. You’re given the freedom to choose your own activities, because we know that passion drives achievement."
  rotation: "-rotate-1"
testimonials:
  - quote: "Venturers is where things get real. We plan our own adventures, push our limits, and learn stuff that actually matters – all while having a laugh with mates who’ve got your back."
    source: "A Venturer Scout"
---

{% include feature-grid.html features=page.features colour=page.colour %}

{% include section-intro.html 
   section_slug=page.section_slug 
   title=page.intro.title 
   paragraphs=page.intro.paragraphs 
   rotation=page.intro.rotation %}

{% include promise-law.html 
   colour=page.colour 
   motto=page.motto 
   award_title=page.award.title 
   award_name=page.award.name 
   award_description=page.award.description %}

{% include testimonial-grid.html testimonials=page.testimonials colour=page.colour %}

{% include info-grid.html colour=page.colour %}

{% include leader-grid.html section_slug=page.section_slug colour=page.colour %}
