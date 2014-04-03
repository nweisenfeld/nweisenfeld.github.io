---
layout: post
status: publish
published: true
title: Git revision control
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
excerpt: "For revision control, I've been using <a href=\"http:&#47;&#47;git-scm.com&#47;\">git<&#47;a>
  for about a year, with mostly (see below) good success.  I haven't compared it to
  other <em>distributed<&#47;em> revision control systems, but have cut my teeth on
  the original SCCS, followed by RCS, CVS, and Subversion, once the FSFS backend came
  about.  Git is an entirely new beast.\r\n\r\n"
wordpress_id: 74
wordpress_url: http://neilweisenfeld.com/wp/?p=74
date: '2011-05-05 21:21:30 -0400'
date_gmt: '2011-05-06 01:21:30 -0400'
categories:
- Uncategorized
- Coding
- Front Page
tags:
- git
comments: []
---
<p>For revision control, I've been using <a href="http:&#47;&#47;git-scm.com&#47;">git<&#47;a> for about a year, with mostly (see below) good success.  I haven't compared it to other <em>distributed<&#47;em> revision control systems, but have cut my teeth on the original SCCS, followed by RCS, CVS, and Subversion, once the FSFS backend came about.  Git is an entirely new beast.</p>
<p><a id="more"></a><a id="more-74"></a>One caution that I have about Git is its memory (not <em>disk space<&#47;em>) requirements. &nbsp;Git loads objects into memory during various operations, and if you're hosting on a cheap, shared server with a stingy per-process limit, you may eventually suffer some <a href="http:&#47;&#47;www.google.com&#47;search?q=git+out+of+memory">woe<&#47;a>. &nbsp;Since I keep Powerpoint presentations under version control (remember the days when Powerpoint would <em>routinely<&#47;em> eat presentations?), I need a system robust to large binary files. &nbsp;In my current shared hosting situation, git won't do for those types of files. &nbsp;My strategy has been to keep manuscripts and presentations under Subversion's care and to use Git's Subversion interface, <a href="http:&#47;&#47;www.kernel.org&#47;pub&#47;software&#47;scm&#47;git&#47;docs&#47;git-svn.html">git-svn<&#47;a>, to access it. &nbsp;As a convention, I name those checked out working directories (or <em>cloned repositories<&#47;em>) with an "svn-" prefix so I remember to use a slightly different set of git-svn specific commands.</p>
<p>Another possible gotcha for people migrating from Subversion to Git is that Git is somewhat file-centric.  The upside of Git's architecture is that multiple copies of a file will be stored only once, but the downside is that empty directories (which have no files) are ignored completely.  Git-svn apologizes for this after a checkout by creating empty directories, but if you're using git-svn to <em>import<&#47;em> a new tree, Git is going to ignore any empty directories in what you import.</p>
<p>If you're interested in Git, I heartily recommend the O'Reilly Book <a href="http:&#47;&#47;www.amazon.com&#47;Version-Control-with-Git-ebook&#47;dp&#47;B002L4EXHO&#47;">Version Control with Git<&#47;a> with the warning that it's extremely detailed, so if you don't want to understand the underlying data model, you should look elsewhere.</p>
<p>Here's an (automatically updated) list of the last 15 git-related things that I've bookmarked on delicious.com.  See <a href="http:&#47;&#47;www.delicious.com&#47;weisen&#47;git">here<&#47;a> for all of them.<br />
[rss url="http:&#47;&#47;feeds.delicious.com&#47;v2&#47;rss&#47;weisen&#47;git?count=15" count=15]</p>
