---
layout: post
title: Redirecting Page Requests on S3
date: 2014-04-22 13:19:00
categories: [computing,web]
tags: aws,s3
---

The purpose of this blog is really just a place for me to jot down things that I've done, especially when other people might benefit from the information.  While I'm not really interested in driving traffic to the site, I *do* use Google Analytics to check out what interests people and how they end up at my blog.

Two posts of mine ([here][post1] and ) drive about half of the traffic, and requests for the original version of these posts, continue to come long after my original web host [went down][textdrive] and I migrated this blog to its current Jekyll-based [solution][Jekyll].

Amazon's S3 static hosting provides two ways to redirect requests from one URL to another.  One method is file-based, allowing requests for a particular file to be redirected to a particular URL.  This is detailed [here][s3-redirect] in S3's documentation, but doesn't really solve our particular problem.  I need to redirect a non-existent URL to one that exists on this server.  In order to do this, I set up bucket-wide redirection rules.  These are specified in the properties tab for the bucket itself, under Static Website Hosting and Edit Redirection Rules.  Here are the rules I used:

{% highlight xml %}
	<RoutingRules>
	    <RoutingRule>
	        <Condition>
	            <KeyPrefixEquals>wp/420</KeyPrefixEquals>
	        </Condition>
	        <Redirect>
	            <ReplaceKeyWith>2012/05/23/how-to-sync-ipad-apps-such-as-devonthink-to-go-at-work-bonjour-over-bluetooth-pan-instead-of-ad-hoc-wi-fi</ReplaceKeyWith>
	        </Redirect>
	    </RoutingRule>
	    <RoutingRule>
	        <Condition>
	            <KeyPrefixEquals>wp/202</KeyPrefixEquals>
	        </Condition>
	        <Redirect>
	            <ReplaceKeyWith>2011/03/26/solution-for-itunes-credit-card-processing-is-temporarily-unavailable/</ReplaceKeyWith>
	        </Redirect>
	    </RoutingRule>
	</RoutingRules>
{% endhighlight %}

This should be pretty self-explanatory.  Any URL, on the site, starting with /wp/420 is rewritten to the address of the 2012/05/23 post and likewise with any URL *starting with* /wp/202.  This also redirects garbage URLs, as long as they start with the "magic" prefixes, but that's fine.  Matching on just the prefix was enough to make the original Wordpress URLs unique and made testing easy. The various types of `<RoutingRule>` entries are covered in the AWS documentation [here][s3-bucket-redirect]. 

[post1]: {% post_url 2012-05-23-how-to-sync-ipad-devonthink-over-bluetooth %}
[textdrive]: {% post_url 2014-04-03-hello-jekyll %}
[Jekyll]: {% post_url 2014-04-21-jekyll-blog-pt-1 %}
[s3-redirect]: http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html
[s3-bucket-redirect]: http://docs.aws.amazon.com/AmazonS3/latest/dev/HowDoIWebsiteConfiguration.html
