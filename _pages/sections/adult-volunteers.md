---
title: Adult Volunteers
subtitle: "Volunteer with us"
permalink: /sections/adult-volunteers
description: "Information for Leaders and Adult Volunteers"
custom_js:
    - "//www.google.com/recaptcha/api.js"

# Page-specific data
callout:
  title: "Adults in Scouting"
  content: "Scouting offers adults a host of rewarding opportunities to help make a difference in young people's lives. You're never too old to join the adventurous life of Scouting, even if you haven't been involved before."

roles:
  - title: "Section Leader"
    text: "Work with young people to help them develop skills, confidence and a sense of adventure. Many of our Leaders are parents, while others are just energetic people who enjoy helping young people be their best."
  - title: "Adult Helper"
    text: "Assist Leaders in running activities, without the commitment of a full leadership role. It's a great way to be involved and support the group."
  - title: "Committee Member"
    text: "Join the team that helps manage the Group's operations, finances, and resources. Your skills are invaluable to the success of the group."
  - title: "Friends of Scouting"
    text: "A way for supporters of the Group to stay connected and provide help in a more casual way."

testimonials:
  - quote: "A truly welcoming and friendly Scout group. Always feel welcome when I walk through the doors."
    source: "Wayne Green"
  - quote: "A great place for your child to have fun and adventures. My child is thriving at Bundoora scouts and learning life skills. I highly recommend scouts."
    source: "Lyall Haynes"
---

{% include callout.html title=page.callout.title content=page.callout.content %}

- TOC
{:toc}

<img class="float-right img-fluid" src="/assets/images/logo-sv-full.png" alt="Scouts Victoria Logo" />

The personal satisfaction of helping young people to achieve their goals is immense, and your sense of personal achievement when you help them through a hurdle is nearly as strong as theirs!

Where else can you take part in abseiling, rock climbing, scuba diving, and countless other adventurous activities with wonderful company and low costs? Bundoora Scout Group Leaders have incredible travel opportunities, interstate and overseas, to share discoveries with youth members.

And you're never alone, with thousands of fellow Leaders to turn to in a giant, supportive network of friends.

<div class="clearfix"></div>

### Ways to Get Involved

{% include activity_cards.html cards=page.roles %}

### What Our Volunteers Say

{% include testimonial.html testimonials=page.testimonials %}

### Our Group Leadership

Our adult support network is boosted by a great group of friends who are passionate about Scouting. The [Australian Scout Fellowship](https://scoutsvictoria.com.au/age-sections-adults/adults-in-scouting/fellowship/) and the [Friends of Scouting](https://scoutsvictoria.com.au/age-sections-adults/adults-in-scouting/friends-of-scouting/) organization are two great ways to be involved.

For those who have enjoyed the Scouting adventure, it’s an unforgettable experience. No matter what direction your career and family have taken you, the Scouting network can always be part of your life.

{% assign people = site.people | where: 'section', 'group' %}
{% unless people == empty %}
Below are our dedicated Group and Committee Leaders.

{% include people.html section='group' %}

{% endunless %}

{% include join_cta.html section='Leaders' %}
