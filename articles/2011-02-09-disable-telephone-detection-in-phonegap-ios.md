--- 
title: Disable Telephone Detection in PhoneGap-iOS
date: 09/02/2011
tag: PhoneGap iOS iPhone

The iPhone's Mobile Safari can automatically detect and link telephone numbers.

Disable Telephone Detection in Mobile Safari
--------------------------------------------

For mobile web applications, you can disable telephone number detection with `<meta name="format-detection" content="telephone=no" />`.

Disable Telephone Detection in UIWebView
----------------------------------------

PhoneGap instantiates a browser using the [UIWebView Class](http://developer.apple.com/library/ios/#documentation/uikit/reference/UIWebView_Class/Reference/Reference.html). Unfortunately, `UIWebView` ignores `<meta name="format-detection" content="telephone=no" />`.

For PhoneGap-iPhone / PhoneGap-iOS applications, you can disable telephone number detection by adding the following to your project's application delegate:

<script src="https://gist.github.com/819020.js?file=MyProjectAppDelegate.m"></script>