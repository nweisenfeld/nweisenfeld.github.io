---
layout: post
status: publish
published: true
title: Building PySide on the Mac
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
wordpress_id: 120
wordpress_url: http://neilweisenfeld.com/wp/?p=120
date: '2011-04-12 20:39:10 -0400'
date_gmt: '2011-04-13 00:39:10 -0400'
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
<p>So I'm building <a title="PySide.org" href="http:&#47;&#47;www.pyside.org&#47;">PySide<&#47;a>&nbsp;on the Mac as part of a new imaging endeavor and&nbsp;after struggling with tons of:<&#47;p></p>
<blockquote>
<p>type '...' is specified in typesystem, but not defined. This could potentially lead to compilation errors.<&#47;p><br />
<&#47;blockquote></p>
<p>errors, I realized that '&#47;usr&#47;include' was being prepended to every path passed to the generator and, with the help of Google (why I'm writing this for *you*), I realized that there's a workaround:<&#47;p><br />
[cc lang="cmake"]<br />
&#47;&#47;The Alternative value to QT_INCLUDE_DIR. Necessary to fix bug<br />
&#47;&#47; on cmake 2.8 MACOS users<br />
ALTERNATIVE_QT_INCLUDE_DIR:PATH=&#47;Library&#47;Frameworks<br />
[&#47;cc]</p>
<p>This was set for a Qt installed from binary as Mac Frameworks and the variable should pop up in CMake for you to set manually.<&#47;p></p>
<p>Hope that helps someone!<&#47;p></p>
