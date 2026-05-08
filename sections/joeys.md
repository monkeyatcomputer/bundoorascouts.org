---
layout: section
title: "Joey Scouts"
permalink: /sections/joeys
redirect_from: [/sections/joey-scouts]
description: "Discover the world of Scouting for our youngest members. Joey Scouts is about fun, friendship and learning about the world through adventurous activities."
tagline: "Discover the world around you."
age_range: "5–8"
colour: "#F4A261"
colour_dark: "#C16733"
icon: child_care
section_slug: joeys
motto: "Discover Adventure"
award:
  title: "Participation & Awards"
  name: "Promise Challenge Badge"
  description: "The peak achievement for Joey Scouts. It allows older Joeys to gain a greater understanding of the Scout Promise and Law, and discover the history of Scouting."
features:
  - icon: sports_esports
    title: "Games & Activities"
    description: "Playing new games, learning songs, dressing up, storytelling, and acting."
  - icon: brush
    title: "Creative Fun"
    description: "Learning how to make craft projects and expressing creativity."
  - icon: landscape
    title: "Outdoor Adventures"
    description: "Going on outdoor activities, sleepovers, and Mob Holidays."
  - icon: group
    title: "Friendship & Teamwork"
    description: "Making new friends and developing skills in teamwork."
intro:
  title: "Adventure Starts Here"
  paragraphs:
    - "For Joey Scouts, life is an exciting adventure. They explore the wider world, stimulate their imagination and develop skills in team work."
    - "The Joey Scout Mob meets once a week under the care and supervision of professionally trained Joey Scout Leaders. Parents and Guardians are welcome to join in the road to adventure and share many new discoveries."
  rotation: "-rotate-2"
testimonials:
  - quote: "My child loves Joey Scouts! It's a great way for them to learn and have fun."
    source: "A Joey Scout Parent"
  - quote: "A great place for your child to have fun and adventures. My child is thriving at Bundoora scouts and learning life skills. I highly recommend scouts."
    source: "Jyall, Joey Scout Leader"
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
