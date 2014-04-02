---
layout: post
status: publish
published: true
title: Coarse-grained parallelism in bash
author: weisen
author_login: weisen
author_email: weisen123@gmail.com
excerpt: "We've spent a good deal of time writing (often-complicated) multi-threaded
  code in order to take advantage of our multi-core machines.  Our lab has two central
  compute servers, one with four quad-core processors, and another with six, and we
  have a lot of data to process.\r\n\r\nThe question is: if we have 100 cases to analyze
  on a 24-core machine, should we spend time re-writing algorithms to attempt to achieve
  a 24x speed-up on each case, or should we simply run 24 cases simultaneously?  In
  many situations, the answer is the latter, especially since it incurs zero extra
  development time.  To that end, you may find the following Bash script useful.\r\n\r\n"
wordpress_id: 148
wordpress_url: http://neilweisenfeld.com/wp/?p=148
date: '2011-05-12 15:42:07 -0400'
date_gmt: '2011-05-12 19:42:07 -0400'
categories:
- Uncategorized
- Coding
- Front Page
tags:
- bash
- linux
comments:
- id: 5
  author: Ole Tange
  author_email: neilweisenfeld.com@tange.dk
  author_url: http://ole.tange.dk
  date: '2011-08-03 07:58:07 -0400'
  date_gmt: '2011-08-03 11:58:07 -0400'
  content: "Consider using GNU Parallel instead:\r\n  parallel gzip ::: *.log\r\nThis
    will run one gzip per CPU core for all log files.\r\nOnly  disadvantage compare
    to the above is that GNU Parallel will never support bash functions. So convert
    those to scripts instead - unless GNU Parallel makes the script not needed:\r\nRun
    'experiment | wc' on all combinations of S, M, L, XL and M, F:\r\n  parallel experiment
    {1} {2} \\| wc ::: S M L XL ::: M F\r\nWatch the intro video to learn more: http:&#47;&#47;www.youtube.com&#47;watch?v=OpaiGYxkSuQ"
- id: 12
  author: weisen
  author_email: weisen123@gmail.com
  author_url: ''
  date: '2011-09-09 13:15:00 -0400'
  date_gmt: '2011-09-09 17:15:00 -0400'
  content: Very nice!  I still like having a "native" shell solution, but Parallel
    looks quite powerful.  I love the argument substitution features.
---
<p>We've spent a good deal of time writing (often-complicated) multi-threaded code in order to take advantage of our multi-core machines.  Our lab has two central compute servers, one with four quad-core processors, and another with six, and we have a lot of data to process.</p>
<p>The question is: if we have 100 cases to analyze on a 24-core machine, should we spend time re-writing algorithms to attempt to achieve a 24x speed-up on each case, or should we simply run 24 cases simultaneously?  In many situations, the answer is the latter, especially since it incurs zero extra development time.  To that end, you may find the following Bash script useful.</p>
<p><a id="more"></a><a id="more-148"></a>Suppose that you have a function "process" which is called with a list of files to, um, process:</p>
<p>[cce lang="bash"]<br />
function process {<br />
	for case in $*<br />
	do<br />
		do some stuff to $case<br />
	done<br />
}<br />
process 10.nii 11.nii 12.nii 13.nii 14.nii<br />
[&#47;cc]</p>
<p>The Bash script, <a href="https:&#47;&#47;gist.github.com&#47;1282132">parallel.sh<&#47;a>, lets you do the following:</p>
<p>[cc lang="bash"]<br />
source parallel.sh<br />
function process {<br />
	procno=$1; shift;    # unique id 0, 1, 2,... if we need it<br />
	for case in $*<br />
	do<br />
		do some stuff to $case<br />
	done<br />
}</p>
<p>parallel process 2 10.nii 11.nii 12.nii 13.nii 14.nii<br />
[&#47;cc]</p>
<p>This will create two child processes and feed one instance of the function "process" the following command line:<br />
<code><br />
0 10.nii 12.nii 14.nii<br />
<&#47;code><br />
and the other:<br />
<code><br />
1 11.nii 13.nii<br />
<&#47;code></p>
<p>The function "parallel" creates these round-robin command lines, executes your function "process" in separate processes, waits for all processes to complete, and kills all of the child processes if the main process is interrupted (something that wouldn't naturally happen -- see the 'trap' in the script).</p>
<p>The reason that a serial number is passed to each process is to allow, for instance, separate logging without having multiple, parallel jobs stepping on each other.  e.g.:</p>
<p>[cc lang="bash" strict="false"]<br />
function process {<br />
	procno=$1; shift;<br />
	(<br />
	for case in $*<br />
	do<br />
		do something to case $case<br />
	done<br />
	) 1>logfile.$procno.txt 2>&1<br />
}<br />
[&#47;cc]</p>
<p>This has been a huge win for processing large numbers of cases, in parallel, using serial code.  It's about 20 lines of Bash that has been enormously helpful in the past few years.</p>
<p>Let me know if you have questions&#47;suggestions&#47;comments&#47;etc.</p>
