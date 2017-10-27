---
title: Posts By Topic
layout: page
---

<ul>
{% for category in site.categories %}
{% assign cat = category | first %}
<li>{{cat | capitalize}}
<ul>
{% for post in site.categories[cat] limit:15 %}<li><a href="{{post.url}}">{{post.date|date_to_string}} - {{post.title}}</a></li>
{% endfor %}
</ul>
{% endfor %}
</ul>
