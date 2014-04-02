---
layout: post
status: publish
published: true
title: Applescript to reload a web page in DevonThink Pro via Harvard's EZ-Proxy
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
wordpress_id: 80
wordpress_url: http://neilweisenfeld.com/wp/?p=80
date: '2010-04-15 12:41:46 -0400'
date_gmt: '2010-04-15 16:41:46 -0400'
categories:
- Uncategorized
tags:
- applescript
- devonthink
comments: []
---
<p>Whipped this up this morning.</p>
<p>The Error -128 exception is from one of DT's own scripts, so I'm not sure what that error is, precisely.</p>
<p>Feel free to comment as I'm a novice at AppleScript.<br />
[cc lang="applescript" nowrap="true"]<br />
tell application id "com.devon-technologies.thinkpro2"<br />
    try<br />
        if not (exists think window 1) then error "No window is open."<br />
        set old_URL to the URL of think window 1<br />
        set pat to "'s@(https*:&#47;&#47;[^&#47;]+)@\1.ezp2.harvard.edu@'"<br />
        set new_URL to do shell script "echo " &amp; quoted form of old_URL &amp; " | perl -pe " &amp; pat<br />
        set the URL of think window 1 to new_URL<br />
on error error_message number error_number<br />
        if the error_number is not -128 then display alert "DEVONthink Pro" message error_message as warning<br />
    end try<br />
end tell<br />
[&#47;cc]</p>
<p style="font-size: 10px;"><a href="http:&#47;&#47;posterous.com">Posted via web<&#47;a> from <a href="http:&#47;&#47;neilios.posterous.com&#47;applescript-to-reload-a-web-page-in-devonthin">neil's posterous<&#47;a><&#47;p></p>
