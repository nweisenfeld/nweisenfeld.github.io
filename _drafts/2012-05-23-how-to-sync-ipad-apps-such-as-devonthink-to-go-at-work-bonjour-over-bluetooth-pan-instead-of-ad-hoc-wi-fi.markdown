---
layout: post
status: publish
published: true
title: 'How to Sync iPad Apps Such as DevonThink To Go at Work: Bonjour over Bluetooth
  PAN instead of Ad-Hoc Wi-Fi'
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
excerpt: "So for most of the two years that I've had an iPad, I've tried (and failed)
  to get DevonThink To Go to sync data in some reasonably useful manner with DevonThink
  Pro on my laptop. &nbsp;Set aside for the moment the litany of complaints that people
  <a href=\"http:&#47;&#47;www.devontechnologies.com&#47;search.html?dtsearch_term=sync&amp;dtsearch_realm=forum\">have<&#47;a>&nbsp;about
  the synchronization in DevonThink To Go failing in a variety of circumstances and
  assume that it, at least, works as advertised. &nbsp;The problem is:\r\n<p style=\"padding-left:
  30px;\">DevonThink, like many iPad apps, uses Apple's service discovery system \"Bonjour\"
  to find the companion computer that it's trying to sync with on the network. &nbsp;And
  Bonjour doesn't work on many corporate networks.<&#47;p>\r\nOr it doesn't work between
  subnets or other LAN segments. &nbsp;Heck, I've even tried to set up \"wide-area\"
  Bonjour using my own domain and routing \"discovery\" information over the public
  Internet. &nbsp;All of this so that you can click \"synchronize with <strong>this<&#47;strong>
  computer,\" having chosen from a dynamically generated list of suitable mates that
  the program magically \"sees\" on the network. &nbsp;The backup plan? &nbsp;Well,
  there isn't one. &nbsp;It's Bonjour or nothing.\r\n"
wordpress_id: 420
wordpress_url: http://neilweisenfeld.com/wp/?p=420
date: '2012-05-23 17:51:58 -0400'
date_gmt: '2012-05-23 21:51:58 -0400'
categories:
- Front Page
- Mac
tags:
- mac
- bonjour
- iOS
comments:
- id: 30
  author: Pip
  author_email: pip@popomo.com
  author_url: http://www.popomo.com
  date: '2012-06-07 12:39:38 -0400'
  date_gmt: '2012-06-07 16:39:38 -0400'
  content: Thanking you very much. Bonjour is such a nightmare. Looking forward to
    when DenonThink To Go gets it's sh** together.
---
<p>So for most of the two years that I've had an iPad, I've tried (and failed) to get DevonThink To Go to sync data in some reasonably useful manner with DevonThink Pro on my laptop. &nbsp;Set aside for the moment the litany of complaints that people <a href="http:&#47;&#47;www.devontechnologies.com&#47;search.html?dtsearch_term=sync&amp;dtsearch_realm=forum">have<&#47;a>&nbsp;about the synchronization in DevonThink To Go failing in a variety of circumstances and assume that it, at least, works as advertised. &nbsp;The problem is:</p>
<p style="padding-left: 30px;">DevonThink, like many iPad apps, uses Apple's service discovery system "Bonjour" to find the companion computer that it's trying to sync with on the network. &nbsp;And Bonjour doesn't work on many corporate networks.<&#47;p><br />
Or it doesn't work between subnets or other LAN segments. &nbsp;Heck, I've even tried to set up "wide-area" Bonjour using my own domain and routing "discovery" information over the public Internet. &nbsp;All of this so that you can click "synchronize with <strong>this<&#47;strong> computer," having chosen from a dynamically generated list of suitable mates that the program magically "sees" on the network. &nbsp;The backup plan? &nbsp;Well, there isn't one. &nbsp;It's Bonjour or nothing.<br />
<a id="more"></a><a id="more-420"></a><br />
The standard way of dealing with this issue is a pain: you set up an ad-hoc Wifi network between your laptop and iPad. &nbsp;This is hardly the worst thing that's happened in the world, but remember: if you're using the Wifi for your Internet connection on your laptop, this means taking the laptop off the 'net every time you want to sync with an iPad app that uses Bonjour. &nbsp;In fact, this is so noxious, that I'm convinced that it has driven growth in Dropbox. &nbsp;Dropbox became the defacto standard for synchronization between iOS apps and other computers simply because the alternatives, either Bonjour discovery of computers on the local LAN or drag-n-drop in iTunes, are inconvenient at best. &nbsp;And Dropbox "just works," even if it does send your precious stuff out into the big bad world.</p>
<p>So that was a long lead-up to something that I discovered today: iPads (any) and iPhones as old as the 3GS support a Bluetooth profile called PAN, or Personal Area Network. &nbsp;Using PAN, your iOS device can join the network that your laptop is on, but via the laptop and in a way that preserves Bonjour. &nbsp;Here's what you do (only once):</p>
<ol>
<li>Go to "Preferences->Sharing" on MacOS and turn on Internet Sharing with "Bluetooth PAN" enabled.<&#47;li>
<li>Turn on Bluetooth on both your iOS and MacOS device (e.g. your laptop)<&#47;li>
<li>"Pair" the iOS device to the laptop. &nbsp;Use Bluetooth Setup Assistant on the Mac to pair the iOS device and acknowledge the pairing on the iOS device itself.<&#47;li><br />
<&#47;ol><br />
From then on, when you want to sync your iOS application, go to Bluetooth under iOS General Settings and connect to your laptop. &nbsp;Both your laptop and the iOS device still have Internet access. &nbsp;But the iOS device is sharing your laptop's Internet connection and, even if your corporate LAN doesn't support Bonjour, it can still see one device: the laptop that it's connected to via Bluetooth.</p>
<p>Now you can go back to that original concern: does synchronization even work in DevonThink to Go? &nbsp;Well, so far so good for the latest version, but I'll not trust it to anything critical.... yet.</p>
