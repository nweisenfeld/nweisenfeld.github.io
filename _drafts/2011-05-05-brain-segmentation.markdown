---
layout: page
status: publish
published: true
title: Brain Segmentation
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
wordpress_id: 33
wordpress_url: http://neilweisenfeld.com/wp/?page_id=33
date: '2011-05-05 16:42:45 -0400'
date_gmt: '2011-05-05 20:42:45 -0400'
categories: []
tags: []
comments: []
---
<p><strong>Example-Based Segmentation<&#47;strong><br />
[gallery include="226,227,228"]</p>
<p>At MICCAI this year we're presenting a new algorithm called L3: Learning Likelihoods for Labeling (best we could do with the name -- we're scientists, not marketing folk).  Come see me at <strong>poster P7-159-M (Monday at 3pm, Section P7: Segmentation)<&#47;strong> or drop me a line.  I'll be around all week.</p>
<p><a href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-miccai2011-poster-small.png">[poster .png]<&#47;a> <a title="MICCAI paper" href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-miccai2011.pdf" target="_blank">[paper .pdf]<&#47;a></p>
<p>This work builds upon my previous segmentation studies to create a new, general-purpose segmentation algorithm where the <em>only<&#47;em> inputs are registered example segmentations and the (multi-spectral) data from the subject to be segmented.  Ultimately this algorithm unifies statistical classification and template fusion and combines the advantages of both.  My MICCAI <a title="MICCAI paper" href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;09&#47;weisenfeld-miccai2011.pdf" target="_blank">paper<&#47;a> describes a "leave-one-out" validation study in 14 subjects whose scans were professionally hand segmented.  Below, a hand-drawn segmentation, overlaid onto a T1 image, is shown at left, followed by the result from a state-of-the-art combined intensity&#47;label fusion algorithm, and then from our algorithm (L3) at right.</p>
<p>[gallery orderby="title" include="216,218,217"]</p>
<p>This mismatch between the segmentation and the T1 is apparent at the gray-white boundary in the label-fusion result.  The segmentations, without the associated T1 image, are show below with a few areas of interest highlighted by arrows:</p>
<p>[gallery orderby="title" include="315,316,317"]</p>
<p>[caption id="attachment_221" align="alignright" width="300" caption="Comparison of 14 subjects using expert hand-drawn segmentations.  CLICK for details."]<a rel="attachment wp-att-221" href="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;projects&#47;brain-segmentation&#47;cdiceboxplot"><img class="size-medium wp-image-221 " title="L3 ILF MV comparison" src="http:&#47;&#47;neilweisenfeld.com&#47;wp&#47;wp-content&#47;uploads&#47;2011&#47;05&#47;cdiceboxplot-300x222.png" alt="" width="300" height="222" &#47;><&#47;a>[&#47;caption]</p>
<p>In this data set, both label fusion and combined intensity&#47;label fusion fail to properly segment higher-order gyri and sulci that vary widely between subjects.  The variation between the templates and the target is not adequately captured through registration and the error is not mitigated through fusion.  These errors account for the primary differences in the quantitative evaluation shown to the right.</p>
<p>Our algorithm uses the templates individually as training data for a supervised classifier and also as a prior.  We have a learning algorithm which mitigates the impact of errors in the training data and the priors are smoothed under the assumption that there would be some registration error.  Because of this design, our algorithm is more robust to intersubject variation not captured by registration.  Furthermore, since our algorithm learns multi-spectral intensity likelihoods directly from the target subject, the particular scanner make, model, or even sequence modality used to create the template segmentations is of little consequence.  All that matters is that there is a sufficient way to register the templates to the target and that the structure of interest can be uniquely identified by spatial and&#47;or intensity information.</p>
<p>We have recently demonstrated this algorithm for generating a detailed parcellation and segmentation of the brain into 51 regions, and these results are shown at the top of the page.</p>
