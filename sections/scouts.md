---
layout: section
title: "Scouts"
permalink: /sections/scouts
description: "Taking charge of their own adventures, developing leadership skills, and tackling bigger challenges. For 11 to 15 year olds, Scouting is a constant round of adventure and discovery."
tagline: "Take charge of your own journey."
age_range: "11–15"
colour: "#2A9D8F"
colour_dark: "#00A94F"
icon: explore
section_slug: scouts
motto: "Be Prepared"
award:
  title: "Award Scheme"
  name: "Australian Scout Medallion"
  description: "The highest award in the Scout Section. To earn it, a Scout must participate in a Leadership Course, demonstrate an active leadership role, and achieve the Adventurer Cord."
features:
  - icon: kayaking
    title: "Adventurous Activities"
    description: "Abseiling, flying, hiking, camping, canoeing, and fishing."
  - icon: psychology
    title: "Leadership Development"
    description: "Develop leadership and management skills by leading your Patrol."
  - icon: brush
    title: "Personal Growth"
    description: "Editing your own film, discussing important issues, and exploring creativity."
  - icon: volunteer_activism
    title: "Community Involvement"
    description: "Gain your First Aid Certificate and help restore our environment."
intro:
  title: "Action Plus Adventure"
  paragraphs:
    - "\"Action Plus\" is the best way to describe the life of a Scout. Scouts have the opportunity to experience numerous adventures, discovering special interests and following them through with the help of Scout Leaders and Patrol Members."
    - "At Scouts you'll become a member of a Scout Patrol and your Patrol will work with other Patrols to form a larger Scout Troop. Together you'll make important decisions, set critical goals, and depend on each other to succeed."
  rotation: "rotate-1"
testimonials:
  - quote: "Scouts is the best part of my week – we get to try new things, go on adventures, and make heaps of friends. Every camp feels like a new story waiting to happen!"
    source: "A Scout"
  - quote: "It is always good to see kids learning new skills"
    source: "Peter, former Leader at Bundoora Scouts"
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
