---
layout: page
title: "Meet the Sponsors"
permalink: /about/our-sponsors
redirect_from: [/about-us/sponsors]
badge: "Our Partners"
description: "Bundoora Scouts thrives thanks to the generous support of our local community partners and businesses. Their contributions help us provide life-changing adventures and essential skills to youth in our area."
---

<div class="max-w-[1440px] mx-auto w-full">

  <!-- Sponsors Grid -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {% for sponsor in site.data.sponsors %}
      <div data-gsap="reveal" data-delay="{{ forloop.index | times: 0.1 }}">
        {% include sponsor-card.html sponsor=sponsor %}
      </div>
    {% endfor %}
  </section>
</div>
