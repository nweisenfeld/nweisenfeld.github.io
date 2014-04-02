---
layout: post
status: publish
published: true
title: And *why* I'm building PySide on the Mac
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
excerpt: "So I'm building <a title=\"PySide.org\" href=\"http:&#47;&#47;www.pyside.org&#47;\">PySide<&#47;a>
  on the Mac as part of a new medical imaging endeavor. &nbsp;For years I've wanted
  a usable mashup of <a href=\"http:&#47;&#47;www.itk.org\">ITK<&#47;a>, <a href=\"http:&#47;&#47;www.vtk.org\">VTK<&#47;a>,
  <a href=\"http:&#47;&#47;www.python.org\">Python<&#47;a>, and <a href=\"http:&#47;&#47;qt.nokia.com\">Qt<&#47;a>
  as a medical imaging toolkit. &nbsp;Add&nbsp;<a href=\"http:&#47;&#47;numpy.scipy.org\">numpy<&#47;a>
  and <a href=\"http:&#47;&#47;www.scipy.org\">scipy<&#47;a> on the Python side, and
  you have a very powerful combination of software. &nbsp;But if the interface to
  Python is achieved through automatically generated bindings for ITK, VTK, and Qt,
  you have a really brittle build. &nbsp;I keep finding such projects that seem to
  thrive for a year or so and then die as it becomes impossible to support people's
  use of the bindings with changing toolkits and with Python itself evolving.\r\n\r\n"
wordpress_id: 122
wordpress_url: http://neilweisenfeld.com/wp/?p=122
date: '2011-04-12 22:17:25 -0400'
date_gmt: '2011-04-13 02:17:25 -0400'
categories:
- Uncategorized
- Coding
- Front Page
tags:
- Qt
- python
- mac
comments: []
---
<p>So I'm building <a title="PySide.org" href="http:&#47;&#47;www.pyside.org&#47;">PySide<&#47;a> on the Mac as part of a new medical imaging endeavor. &nbsp;For years I've wanted a usable mashup of <a href="http:&#47;&#47;www.itk.org">ITK<&#47;a>, <a href="http:&#47;&#47;www.vtk.org">VTK<&#47;a>, <a href="http:&#47;&#47;www.python.org">Python<&#47;a>, and <a href="http:&#47;&#47;qt.nokia.com">Qt<&#47;a> as a medical imaging toolkit. &nbsp;Add&nbsp;<a href="http:&#47;&#47;numpy.scipy.org">numpy<&#47;a> and <a href="http:&#47;&#47;www.scipy.org">scipy<&#47;a> on the Python side, and you have a very powerful combination of software. &nbsp;But if the interface to Python is achieved through automatically generated bindings for ITK, VTK, and Qt, you have a really brittle build. &nbsp;I keep finding such projects that seem to thrive for a year or so and then die as it becomes impossible to support people's use of the bindings with changing toolkits and with Python itself evolving.</p>
<p><a id="more"></a><a id="more-122"></a>One way to deal with brittle builds is freeze each of the components at a particular version, and to upgrade only in a carefully tested and controlled manner. &nbsp;For our own software releases, this is how we work. &nbsp;But for new development and my own experimentation, it's nice to dream that you can build against a number of software packages, at random released or development versions, without having things break so frequently. &nbsp;The strategy for doing this is to limit the points of intersection between the various packages. &nbsp;The smaller the area of coverage of those interfaces, the more change tolerant they'll be (obviously).</p>
<p>At the moment, ITK, VTK, and Qt should be somewhat of a slam dunk. &nbsp;They only intersect in carefully controlled places and things work well. &nbsp;Adding language bindings for Python is troublesome, and the result may not be terribly satisfying (esp. in the case of heavily templated ITK). &nbsp;So I've decided to limit the interface between Python and other software to interfaces that we write, explicitly, by hand. &nbsp;We'll see how that goes.</p>
<p>Being able to develop and extend the UI from Python is appealing, however. &nbsp;If you're as old as I am, you may miss the good old days when Tcl&#47;Tk came into existence and suddenly X applications flourished. &nbsp;I'd like to get back there again. &nbsp;Hell, we did <em>surgical guidance<&#47;em> with user interfaces glued together with Tcl, but when the community moved to ITK for imaging development, the pace of development changed. &nbsp;You&nbsp;and I can write user interfaces in Qt with C++, but what we're missing is the ability to create specialized, possibly throw-away graphical user interfaces as easily as we create one-off Perl, Python, and Bash scripts. &nbsp;That makes me want to break my earlier rule about small intersection points and look to expose serious amounts of Qt to Python.</p>
<p>There seem to be at least three sets of Python bindings for Qt right now, and I've just scratched the surface exploring them. &nbsp;But I'm going to be biased, possibly unfairly, to PySide as it's hosted at qt.nokia.com and therefore, hopefully, has the weight of those resources behind it. &nbsp;And that's why I'm building PySide.</p>
<p>More on the project later.</p>
