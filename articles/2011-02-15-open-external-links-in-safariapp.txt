--- 
title: Open external links in Safari.app
date:  15/02/2011
tag:   PhoneGap iOS Objective-C

By default, PhoneGap-iOS opens external links within the PhoneGap WebView. This is a terrible default action because there are no navigation buttons within PhoneGap. A simple solution is to open the external links in... the external browser!

Given an external link such as:

    http://www.github.com/mwbrooks

When I am using PhoneGap-iOS.

When I want to open the link in the main browser (Safari.app).

Then add the following to the application delegate (`myproject/Classes/myprojectAppDelegate.m`):

<script src="https://gist.github.com/827979.js?file=projectAppDelegate.m"></script>