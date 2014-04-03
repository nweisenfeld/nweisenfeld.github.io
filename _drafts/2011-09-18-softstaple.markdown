---
layout: page
status: publish
published: true
title: Probabilistic Label Fusion
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
wordpress_id: 359
wordpress_url: http://neilweisenfeld.com/wp/?page_id=359
date: '2011-09-18 11:56:47 -0400'
date_gmt: '2011-09-18 15:56:47 -0400'
categories: []
tags: []
comments: []
---
<p>At ISBI 2011, I presented a version of the STAPLE algorithm which accepts probabilistic inputs.  That is, instead of observing a label at each voxel for each rater, we observe the probability of every possible label at each voxel.  We call the new algorithm <strong>Soft<&#47;strong>STAPLE.</p>
<p>While the original, "hard" STAPLE was developed for the analysis of hand-drawn segmentations, we now have a need to analyze the output from multiple, machine-generated segmentations (e.g. in our <a title="Brain Segmentation" href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;projects&#47;brain-segmentation">L3<&#47;a> algorithm).  We developed softSTAPLE in order to enable such analyses without the loss of information inherent in transforming a probabilistic segmentation into a hard label map.  Besides classifier fusion, softSTAPLE allows hierarchical analyses.  Because the output reference standard from STAPLE is probabilistic, these can be fed into softSTAPLE for further analysis, for instance to enable the measurement of both inter- and intra- rater variability.</p>
<p>You can download my ISBI <a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-isbi2011-talk.pdf">[talk .pdf]<&#47;a> and <a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-isbi2011.pdf">[paper .pdf]<&#47;a></p>
