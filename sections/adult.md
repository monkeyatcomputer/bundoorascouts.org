---
layout: section
title: "Adult Volunteers & Leaders"
permalink: /sections/adult
redirect_from: [/sections/adult-volunteers]
description: "Scouting isn't just for kids. Join our team of dedicated volunteers and make a real difference in your community while gaining new skills."
tagline: "Lead the Adventure."
age_range: "18+"
colour: "#3f5e94"
colour_dark: "#100e4c"
icon: volunteer_activism
section_slug: adult
leader_slug: group
award:
  title: "Leader Training"
  name: "The Wood Badge"
  description: "The Wood Badge is the internationally recognized symbol of advanced training for Scouting leaders. To earn it, Leaders complete training and practical application to develop their leadership skills."
features:
  - icon: psychology
    title: Section Leaders
    description: Work with young people to help them develop skills, confidence and a sense of adventure.
  - icon: group
    title: Adult Helpers
    description: Assist Leaders in running activities, without the commitment of a full leadership role.
  - icon: corporate_fare
    title: Committee Members
    description: Join the team that helps manage the Group's operations, finances, and resources.
  - icon: volunteer_activism
    title: Friends of Scouting
    description: Stay connected and provide help in a more casual way as a supporter of the Group.
testimonials:
  - quote: "The personal satisfaction of helping young people to achieve their goals is immense. You're never alone, with a giant, supportive network of friends."
    source: "Hamish (Termite) - Bundoora Scout Leader"
intro:
  title: "Flexible Roles for Every Lifestyle"
  paragraphs:
    - "Scouting offers adults a host of rewarding opportunities to help make a difference in young people's lives. You're never too old to join the adventurous life of Scouting, even if you haven't been involved before."
    - "Where else can you take part in abseiling, rock climbing, scuba diving, and countless other adventurous activities with wonderful company and low costs? Bundoora Scout Group Leaders have incredible travel opportunities and a supportive network of thousands of fellow Leaders."
  rotation: "rotate-1"
---

## Ways to Get Involved

Whether you have two hours a week or two hours a month, there's a place for you at Bundoora Scouts.

{% include feature-grid.html features=page.features colour=page.colour %}

## {{ page.intro.title }}

{% include section-intro.html 
   section_slug=page.section_slug 
   paragraphs=page.intro.paragraphs 
   rotation=page.intro.rotation %}

## Our Promise and Law

{% include promise-law.html 
   colour=page.colour 
   motto="Lead the Adventure"
   award_title=page.award.title 
   award_name=page.award.name 
   award_description=page.award.description %}

## What Our Families Say

{% include testimonial-grid.html testimonials=page.testimonials colour=page.colour %}

{% assign section_people = site.people | where: "section", page.leader_slug %}
{% if section_people.size > 0 %}
## Meet the Leaders

{% include leader-grid.html section_slug=page.leader_slug colour=page.colour %}
{% endif %}
