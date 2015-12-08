---
layout: post
title: "Comprehensive variation discovery in single human genomes"
date: 2014-11-13 11:10:00
category: science
---

Our group has a new [paper] out (advance publication) at *Nature Genetics*
called "Comprehensive variation discovery in single human genomes."
This paper was the result of a ton of effort, of which mine is only a
part, and describes the earlier of our group's two versions of the [DISCOVAR] 
genome assembly algorithm.  

This *Nature Genetics* paper is an exploration of variant calling
by assembly (as opposed to alignment), including extensive validation
using finished Fosmid reference assemblies and selective Sanger
sequencing.  The combined variant caller/assembler is referred to
as DISCOVAR, and works on either small genomes, or on regions of
the human genome.  We demonstrate that traditional alignment-based
methods miss up to 25% of variants in a sample, with the misses
largely concentrated, unsurprisingly, in areas of the genome that
are challenging for alignment.

The current algorithm, called DISCOVAR *de novo*, is capable of *de
novo* assembly of a mammalian genome in 24 hours (32 standard Xeon
cores, 512 GB RAM) and will be the subject of an upcoming manuscript by
our group.

[paper]: http://www.nature.com/ng/journal/vaop/ncurrent/full/ng.3121.html
[DISCOVAR]: http://www.broadinstitute.org/software/discovar/blog/
