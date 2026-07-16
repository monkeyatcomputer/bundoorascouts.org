---
layout: page
title: "The Program"
permalink: /scouting/the-program
badge: "One Journey"
description: "Explore the 'One Journey, One Program' framework that delivers life skills, leadership, and adventure across all sections of Scouting."
image: /assets/images/scouting/the-program.jpg
image_alt: "A group of young people mountain biking together outdoors"
image_position: "center 46%"
---

## One Journey, One Program

Every Scout has the opportunity to achieve with our program. Our framework **One Journey, One Program**, features a continuous and progressive series of personal achievements.

The program aims to deliver a consistent developmental structure from Section to Section, providing young people the opportunity to develop their own Scouting Journey. The Achievement Pathways aims to deliver life skills, leadership, and teamwork opportunities, through participation in activities that are adventurous, fun, challenging and inclusive.

{% include scouting-photo.html src="/assets/images/scouting/adventure-skills.jpg" alt="Children paddling canoes together on a river" caption="The program turns shared adventures into practical skills and personal progression." position="center 50%" %}

## Achievement Pathways

Each youth section has its own Achievement Pathway guide:

{% assign pathway_sections = site.data.sections | where_exp: "section", "section.active == true and section.slug != 'adult'" %}

{% include program-section-link-grid.html sections=pathway_sections href_suffix="achievement-pathway" action="Achievement Pathway" %}

The Achievement Pathways consists of:

### Program Essentials

Introduces a young person to Scouting and their new Section, ensuring they understand the basics and feel welcome.

{% include program-section-link-grid.html sections=pathway_sections href_suffix="program-essentials" action="Program Essentials" compact=true visual="pills" %}

### Outdoor Adventure Skills (OAS)

A common set of skills across all Sections, including camping, bushwalking, bushcraft, and more specialized activities like alpine, cycling, and water activities.

{% include program-section-link-grid.html sections=pathway_sections href_suffix="outdoor-skills" action="Outdoor Adventure Skills" compact=true visual="oas" %}

### Special Interest Areas (SIA)

Allows Scouts to set their own goals in areas they are passionate about, such as STEM, Arts, Environment, or Community.

{% include program-section-link-grid.html sections=pathway_sections href_suffix="special-interests" action="Special Interest Areas" compact=true visual="sia" %}

### Peak Awards

Each Section has a Peak Award (like the Grey Wolf Award for Cubs or the Australian Scout Award for Scouts) that represents the pinnacle of their achievement in that Section.

{% include program-section-link-grid.html sections=pathway_sections href_suffix="peak-award" action="Peak Award" compact=true visual="peak" %}

> [!NOTE]
> The information and images on these pages are republished from Scouts Victoria’s [Parent and Caregiver Guide](http://www.scoutsvictoria.com.au/parent-guide) with permission.

{% include scouting-page-nav.html %}
