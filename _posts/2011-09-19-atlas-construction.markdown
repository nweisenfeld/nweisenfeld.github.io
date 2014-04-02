---
layout: page
status: publish
published: true
title: Atlas Construction
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
wordpress_id: 378
wordpress_url: http://neilweisenfeld.com/wp/?page_id=378
date: '2011-09-19 12:02:27 -0400'
date_gmt: '2011-09-19 16:02:27 -0400'
categories: []
tags: []
comments: []
---
<p>How to best define a common coordinate system for a group of subjects is an active area of research and the answer is likely application dependent. &nbsp;In the absence of perfect registration, capable of bringing <em>any<&#47;em> two subjects into perfect alignment, the choice of a registration target can have a dramatic impact on the results of any analysis.</p>
<p><a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;groupwise-alignment.png"><img class="alignright size-medium wp-image-383" title="groupwise-alignment" src="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;groupwise-alignment-295x300.png" alt="" width="295" height="300" &#47;><&#47;a></p>
<p>We created a new groupwise alignment algorithm with a data-driven notion of a common coordinate system and several unique properties. &nbsp;The algorithm directly aligns labeled images (segmentations) and incorporates a measure, which we call typicality, of how well each subject relates to the group. &nbsp;This allows the investigator to uncover multiple modes of variation within a population and to tailor the flexibility of the registration transform to the particular application and&#47;or cohort. &nbsp;For instance, when the algorithm is presented with a group of subjects with multiple modes of variation, it will attempt to align subjects from each of these modes to a common coordinate system. &nbsp;If the degrees of freedom in the requested alignment transform is insufficient to bring the modes into alignment, a single dominant mode will be chosen and the typicality parameters will indicate which subjects were properly aligned and which are "outliers." &nbsp;We demonstrate the differentiation of such a heterogeneous group of subjects in the manuscript.</p>
<p><a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-isbi2009-slides.pdf">[talk .pdf]<&#47;a> <a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-isbi09.pdf">[paper .pdf]<&#47;a></p>
