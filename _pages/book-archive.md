---
layout: splash
title: "Recommended Books"
excerpt: "<br /><br /><br />"
permalink: /books/
author_profile: false
header:
    overlay_image: /assets/images/Book_Library.jpeg
    caption: "Photo credit: [Tylor Lib](http://www.taylor.lib.mi.us/892/Braille-Talking-Books)"
---
<style>
.archive__item-teaser {
    max-height:400px !important;
}
</style>

<div class="grid__wrapper">
  {% assign books = site.books | reverse %}
  {% for post in books  %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
