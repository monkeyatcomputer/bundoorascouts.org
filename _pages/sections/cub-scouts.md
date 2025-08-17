---
title: Cub Scouts
subtitle: "Create the Path"
description: "Information for members in our Cub Scouts section"
permalink: /sections/cub-scouts
image: /assets/images/hero-cub-scouts.jpg
custom_js:
    - "//www.google.com/recaptcha/api.js"

# Page-specific data
callout:
  title: "Cub Scouts (Ages 8-10)"
  content: "**Meeting Time:** Monday 7:00pm – 8:30pm during school term."

activity_cards:
  - title: "Team Games"
    text: "Organising and playing team games."
  - title: "Practical Skills"
    text: "Learn practical skills like knots and construction."
  - title: "Outdoor Adventures"
    text: "Going on Outings and Nature Trails, Orienteering, and Camping."
  - title: "Water & Air Activities"
    text: "Participating in Air Activities, Water Activities and Water Safety."

testimonials:
  - quote: "Cub Scouts has been a fantastic experience for my son. He has learned so much and made great friends."
    source: "A Cub Scout Parent"
---

{% include callout.html title=page.callout.title content=page.callout.content %}

- TOC
{:toc}

<img class="float-md-right mx-auto d-block" src="/assets/images/logo-cub-scouts-full.png" />

Positive Development! The Cub Scout program is specifically designed to meet the developmental needs of 8 to 10 year old children. It provides opportunities for young people to develop and grow as individuals and as members of a team. Cub Scout activities are planned to cover a broad range of interests and topics to trigger their imagination and curiosity.

As a member of a 'Six' you and your Pack will work together to explore the world. Your Cub Scout Leader will help you along the way and encourage you to participate in Scouting activities. You'll learn life-long skills, participate in the Cub Scout's Award Scheme, earn badges, make friends and have fun!

<div class="clearfix"></div>

### What Do Cub Scouts Do?

{% include activity_cards.html cards=page.activity_cards %}

### What Our Families Say

{% include testimonial.html testimonials=page.testimonials %}

### Our Promise and Law

{% capture left_col %}
#### Cub Scout Motto

Do Your Best

#### Cub Scout Promise

**There are two versions of the Australian Scout Promise. Individuals may select which version they wish to make.**

On my honour, I promise
To do my best,
To be true to my spiritual beliefs,
To contribute to my community and our world,
To help other people,
And to live by the Cub Scout Law.

**OR**

On my honour
I promise that I will do my best
To do my duty to my God, and
To the King of Australia,
To help other people,
And to live by the Cub Scout Law.

#### Cub Scout Law

Cub Scouts are loyal and obedient
Cub Scouts do not give in to themselves
{% endcapture %}

{% capture right_col %}
#### Award Scheme

The major components of the Cub Scout Award Scheme are the Bronze, Silver and Gold Boomerang badges. To earn each of these badges, Cub Scouts must complete at least ten challenges under the guidance of Leaders.

Cub Scouts can set challenges for themselves to earn Achievement Badges from the areas of Arts and Literature, Nature, Science and Technology, Sports and Recreation, and Our World. There are also a number of Special Interest badges.

**Grey Wolf Award:** This is the pinnacle of achievement in the Cub Scout Section. To earn the Grey Wolf Award a Cub Scout must hold a Gold Boomerang badge, participate in a minimum of four outdoor activities and attend two Pack Councils in the previous 12 months, complete four Level 2 Achievement badges (one from each category) and one Special Interest badge, and develop and present a resource for the Six or Pack based on the Cub Scout's understanding of The Jungle Book.
{% endcapture %}

{% include two-col.html left=left_col right=right_col %}

### Other Information

{% capture col1 %}
#### Fees

Detailed information regarding fees is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}).
{% endcapture %}

{% capture col2 %}
#### Uniform

Youth members, young adults and Leaders are required to attend in full uniform, which includes section specific shirt, scarf, woggle and enclosed shoes (unless otherwise advised for individual meetings). Uniform requirements are available at [Youth Badge Placement](https://scoutsvictoria.com.au/age-sections-adults/cub-scouts/uniform-and-badge-placement/).

Detailed information regarding uniform requirements is provided on the [Parent and Caregiver Information Page]({{ site.baseurl }}{% link _pages/about-scouting/parent-caregiver-information.md %}#what-is-the-uniform).

*All Members should dress appropriately for the type of activity in which they are participating.*
{% endcapture %}

{% capture col3 %}
#### Link Badge

**The commencement for advancement in Sections may vary up to 6 months.**

Cub Scouts may commence transition (Link Badge) any time after their 10th birthday and have progressed to Scouts by their 11th birthday. Extensions beyond age range may be granted in accordance with the Victorian Branch Scouting Instructions (VBSI) Section 2.1.12. Further information is available from our Group Leader.
{% endcapture %}

{% include three-col.html col1=col1 col2=col2 col3=col3 %}

### Section Leaders

{% include people.html section='cub-scouts' %}

{% include join_cta.html section='Cub Scouts' %}
