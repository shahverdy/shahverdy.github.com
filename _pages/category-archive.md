---
layout: archive
permalink: /categories/
title: "Posts by Category"
author_profile: true
header:
    overlay_image: /assets/images/Blog.jpg
    caption: "Photo credit: [cloudsrpretty](https://www.reddit.com/r/fountainpens/comments/8j5ed7/boyfriend_bought_me_my_first_fountain_pen_a/)"
---

{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
