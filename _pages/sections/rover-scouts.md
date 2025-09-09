---
title: Handfield Rover Unit
subtitle: "Beyond the Horizon"
permalink: /sections/rover-scouts
description: "Information for members in the Handfield Rover Unit"
image: /assets/images/hero-rover-scouts.jpg
custom_js:
    - "//www.google.com/recaptcha/api.js"
email: 'handfieldrc@gmail.com'

# Page-specific data

activity_cards:
  - title: "Motorsports"
    text: "Get down and dirty with the rest of Victoria’s Rovers for motorsports at Mudbash."
  - title: "Social Events"
    text: "Costumed chaos reigns at MARB, the annual Rover Ball, and the annual Surfmoot camp at Anglesea."
  - title: "Outdoor Adventures"
    text: "The Armstrong 500 hiking competition, and our very own Rover Bogong Ski Chalet near Falls Creek."
  - title: "National Events"
    text: "Converge with Rovers from all over Australia for a ten-day activity extravaganza at the tri-annual National Moot."

testimonials:
  - quote: "Rovers is a great way to meet new people and have amazing experiences."
    source: "A Rover"
---

{%- assign section = site.data.sections['rover-scouts'] -%}
{%- assign ctitle = section.name | append: " (Ages " | append: section.age | append: ")" -%}
{%- assign ccontent = "**Meeting Time:** " | append: section.time | append: " during school term." -%}
{%- include callout.html title=ctitle content=ccontent -%}

- TOC
{:toc}

<div class="float-md-right mx-auto d-block"><img src="/assets/images/logo-handfield-rovers.png" /><br/>
<img src="/assets/images/logo-rover-scouts-full.png" /></div>

**Bundoora Scout Group is pleased to announce the Handfield Rover Unit will be hosted at the Bundoora Scout Hall Rover Den!**

"Rovers do stuff" is a popular sentiment in Rovers because we do in fact do lots of stuff!

As Rovers, we create our own adventure from start to finish, with many opportunities to build skills that are widely recognised outside of Scouting.

There are a multitude of activities, events, training experiences, and opportunities available in the Rover section, whether they be adventurous, expressive, innovative, community related or environmentally focused.

Each year we get down and dirty with the rest of Victoria’s Rovers for motorsports at Mudbash, and costumed chaos reigns at MARB, the annual Rover Ball. There’s the annual Surfmoot camp at Anglesea, or the Armstrong 500 hiking competition. You can develop your performance skills through one of the many Scout Gang Shows or Showtimes. Plus you can enjoy our very own Rover Bogong Ski Chalet near Falls Creek, or converge with Rovers from all over Australia for a ten-day activity extravaganza at the tri-annual National Moot.

The Rover section is run by Rovers at regional and state level Rover Councils, which shape our organisation and means that we are self-sufficient, with positions that any Rover can volunteer for!

Every Rover Unit is different as each has their own traditions, special interests and personalities. A Rover Unit runs itself, with an elected Unit Leader and Unit executive: the Unit Council.

Handfield Rover Unit is made up of keen people with 'give it a go' attitudes who are willing to take on new challenges for some serious fun.

Handfield Rover Unit welcomes all young adults from 18 to 25 years. You don’t need to have any Scouting experience, but you do need to keep up with some adventurous people and their adrenaline-packed adventures! A Rover Scout’s time in the Unit ends when they turn 26.

All adult members of Scouting need a Working with Children Check, but this is a small price to pay for the rewards of leadership, personal development, and the opportunity to bring a positive change to the people around you.

The Scouting movement is all about producing leaders, and here’s where Handfield Rover Unit shines. As part of the Scouting Achievement Pathway, and in line with our motto 'Service', you’ll be able to help lead activities with younger sections and other Scout Groups, contributing to the youth in the community and giving back to where we came from.

<div class="clearfix"></div>

### What Do Rovers Do?

{% include activity_cards.html cards=page.activity_cards %}

### What Our Rovers Say

{% include testimonial.html testimonials=page.testimonials %}

### Our Promise and Law

{% capture left_col %}
#### Rover Scout Motto

Service

#### Rover Scout Promise

**There are two versions of the Australian Scout Promise. Individuals may select which version they wish to make.**

On my honour, I promise
To do my best,
To be true to my spiritual beliefs,
To contribute to my community and our world,
To help other people,
And to live by the Rover Scout Law.

**OR**

On my honour
I promise that I will do my best
To do my duty to my God, and
To the King of Australia,
To help other people,
And to live by the Rover Scout Law.

#### Rover Scout Law

**Be Respectful**
Be friendly and considerate
Care for others and the environment

**Do What is Right**
Be trustworthy, honest and fair
Use resources wisely

**Believe in Myself**
Learn from my experiences
Face challenges with courage
{% endcapture %}

{% capture right_col %}
#### Award Scheme

There are three award levels that a Rover can achieve, the St George Award, the Baden-Powell Scout Award, and the World Scout Award.

**The St George Award** is the highest award available to Youth Members in Australia, and is recognised worldwide.

**The Baden-Powell Scout Award** is the highest award available to members of the Rover Section, and is recognised worldwide.

**The World Scout Award** is a global award that recognises a Rover's contribution to their community.
{% endcapture %}

{% include two-col.html left=left_col right=right_col %}

### Other Information

{% capture col1 %}
#### Fees

Detailed information regarding fees is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}).
{% endcapture %}

{% capture col2 %}
#### Uniform

Youth members, young adults and Leaders are required to attend in full uniform, which includes section specific shirt, belt, scarf, woggle and enclosed shoes (unless otherwise advised for individual meetings). Uniform requirements are available at [Youth Badge Placement](https://scoutsvictoria.com.au/age-sections-adults/rovers/uniform-and-badge-placement/).

Detailed information regarding uniform requirements is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}#what-is-the-uniform).

*All Members should dress appropriately for the type of activity in which they are participating.*
{% endcapture %}

{% capture col3 %}
#### Get updated

[Handfield Rover Unit on Facebook](https://www.facebook.com/Handfieldroverunit)
{% endcapture %}

{% include three-col.html col1=col1 col2=col2 col3=col3 %}

### Section Leaders

{% include people.html section='rover-scouts' %}

{% include contact.html section='Rover Scouts' %}
