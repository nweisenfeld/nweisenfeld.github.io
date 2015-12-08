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
- computing
- mac
tags:
- applescript
- devonthink
comments: []
---
Whipped this up this morning.

The Error -128 exception is from one of DT's own scripts, so I'm not sure what that error is, precisely.

Feel free to comment as I'm a novice at AppleScript.

{% highlight applescript %}
tell application id "com.devon-technologies.thinkpro2"
    try
        if not (exists think window 1) then error "No window is open."
        set old_URL to the URL of think window 1
        set pat to "'s@(https*://[^/]+)@\1.ezp2.harvard.edu@'"
        set new_URL to do shell script "echo " & quoted form of old_URL & " | perl -pe " & pat
        set the URL of think window 1 to new_URL
on error error_message number error_number
        if the error_number is not -128 then display alert "DEVONthink Pro" message error_message as warning
    end try
end tell
{% endhighlight %}
