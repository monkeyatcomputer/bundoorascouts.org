---
layout: section
title: "Cub Scouts"
redirect_from: [/sections/cub-scouts/]
description: "The Cub Scout program is specifically designed to meet the developmental needs of 8 to 11 year olds, focusing on independence, teamwork, and exploration."
tagline: "Learn new skills. Explore the outdoors. Work together."
age_range: "8–11"
colour: "#E9C46A"
colour_dark: "#FFCD00"
icon: forest
section_slug: cubs
motto: "Do Your Best"
award:
  title: "Award Scheme"
  name: "Grey Wolf Award"
  description: "The pinnacle of achievement in the Cub Scout Section. To earn the Grey Wolf Award a Cub Scout must hold a Gold Boomerang badge, participate in outdoor activities, attend Pack Councils, and complete multiple achievement badges."
features:
  - icon: tent
    title: "Outdoor Adventures"
    description: "Going on Outings and Nature Trails, Orienteering, and Camping."
  - icon: sports_esports
    title: "Team Games"
    description: "Organising and playing team games with your Six."
  - icon: build
    title: "Practical Skills"
    description: "Learn practical skills like knots, construction, and first aid."
  - icon: airplanemode_active
    title: "Water & Air Activities"
    description: "Participating in Air Activities, Water Activities and Water Safety."
intro:
  title: "Positive Development through Adventure"
  paragraphs:
    - "The Cub Scout program provides opportunities for young people to develop and grow as individuals and as members of a team. Activities are planned to cover a broad range of interests and topics to trigger their imagination and curiosity."
    - "As a member of a 'Six' you and your Pack will work together to explore the world. Your Cub Scout Leader will help you along the way and encourage you to participate in Scouting activities. You'll learn life-long skills, earn badges, make friends and have fun!"
  rotation: "rotate-2"
testimonials:
  - quote: "Cub Scouts has been a fantastic experience for my son. He has learned so much and made great friends."
    source: "A Cub Scout Parent"
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
