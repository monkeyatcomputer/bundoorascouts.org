---
title: "Joey Scouts"
subtitle: "Discover Adventure"
permalink: /sections/joey-scouts
description: "Information for members in our Joey Scouts section"
image: /assets/images/hero-joey-scouts.jpg
custom_js:
    - "//www.google.com/recaptcha/api.js"

# Page-specific data
callout:
  title: "Joey Scouts (Ages 5-7)"
  content: "**Meeting Time:** Thursday 6:00pm to 7:00pm during school term."

activity_cards:
  - title: "Games & Activities"
    text: "Playing new games, learning songs, dressing up, storytelling, and acting."
  - title: "Creative Fun"
    text: "Learning how to make craft projects and expressing creativity."
  - title: "Outdoor Adventures"
    text: "Going on outdoor activities, sleepovers, and Mob Holidays."
  - title: "Friendship & Teamwork"
    text: "Making new friends and developing skills in teamwork."

testimonials:
  - quote: "My child loves Joey Scouts! It's a great way for them to learn and have fun."
    source: "A Joey Scout Parent"
---

{%- assign section = site.data.sections['joey-scouts'] -%}
{%- assign ctitle = section.name | append: " (Ages " | append: section.age | append: ")" -%}
{%- assign ccontent = "**Meeting Time:** " | append: section.time | append: " during school term." -%}
{%- include callout.html title=ctitle content=ccontent -%}

- TOC
{:toc}

<img class="float-md-right mx-auto d-block" src="/assets/images/logo-joey-scouts-full.png" />

Joey Scouts is the youngest section of the Scouting movement. For Joey Scouts, life is an exciting adventure. They explore the wider world, stimulate their imagination and develop skills in team work.

The Joey Scout Mob meets once a week for 1 hours under the care and supervision of professionally trained Joey Scout Leaders. Parents and Guardians are welcome to join in the road to adventure with their Joey Scouts and share many new discoveries.

<div class="clearfix"></div>

### What Do Joey Scouts Do?

{% include activity_cards.html cards=page.activity_cards %}

### What Our Families Say

{% include testimonial.html testimonials=page.testimonials %}

### Our Promise and Law

{% capture left_col %}
#### Joey Scout Motto

Help Other People
(HOP)

#### Joey Scout Promise

**There are two versions of the Australian Scout Promise. Individuals may select which version they wish to make.**

On my honour, I promise
To do my best,
To be true to my spiritual beliefs,
To contribute to my community and our world,
To help other people,
And to live by the Joey Scout Law.

**OR**

On my honour
I promise that I will do my best
To do my duty to my God, and
To the King of Australia,
To help other people,
And to live by the Joey Scout Law.

#### Joey Scout Law

A Joey Scout cares
A Joey Scout shares
{% endcapture %}

{% capture right_col %}
#### Award Scheme

There is no award scheme for Joey Scouts however there are several participation challenge badges available that Joeys can earn as a Mob. These badges are built into the weekly programs, and cover special activities including:

* A Buddy Scheme with another Mob
* Care and Share activities
* Environmental activities
* Adventure Challenge

**Promise Challenge Badge:** This is available to older Joey Scouts (must be at least 7 years old to undertake the challenge), is earned on an individual basis, and can be worn on the Cub Scout Uniform until the Grey Wolf Award (the highest Cub Scout award) is achieved.

The aim of this challenge is to allow older Joey Scouts to gain a greater understanding of the Scout Promise and Law, to learn about Scouting’s Founder, Lord Robert Baden-Powell, and to discover the history of Scouting.

The challenge requires the Joey Scout to complete certain elements, such as research and discussion with their parents and Leaders, away from the Mob meetings. The Joey will also be required to give a presentation to the Mob on completion of the task.
{% endcapture %}

{% include two-col.html left=left_col right=right_col %}

### Other Information

{% capture col1 %}
#### Fees

Detailed information regarding fees is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}).
{% endcapture %}

{% capture col2 %}
#### Uniform

Youth members, young adults and Leaders are required to attend in full uniform, which includes section specific shirt, scarf, woggle and enclosed shoes (unless otherwise advised for individual meetings). Uniform requirements are available at [Youth Badge Placement](https://scoutsvictoria.com.au/age-sections-adults/joey-scouts/uniform-and-badge-placement/).

Detailed information regarding uniform requirements is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}#what-is-the-uniform).

*All Members should dress appropriately for the type of activity in which they are participating.*
{% endcapture %}

{% capture col3 %}
#### Link Badge

**The commencement for advancement in Sections may vary up to 6 months.**

Joey Scouts may commence transition (Link Badge) any time after their 7th birthday and have progressed to Cub Scouts by their 8th birthday. Extensions beyond age range may be granted in accordance with the Victorian Branch Scouting Instructions (VBSI) Section 2.1.12. Further information is available from our Group Leader.
{% endcapture %}

{% include three-col.html col1=col1 col2=col2 col3=col3 %}

### Section Leaders

{% include people.html section='joey-scouts' %}

{% include join_cta.html section='Joey Scouts' %}
