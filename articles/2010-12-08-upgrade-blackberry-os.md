--- 
title: Upgrade BlackBerry OS
date: 08/12/2010
tag: BlackBerry

Approach 1: Avoid Desktop Manager
=================================

Requirements
------------

Download & install the [BlackBerry Device Manager software](http://us.blackberry.com/apps-software/desktop/)

Unlock Device
-------------

Delete `C:\Program Files (x86)\Common Files\Research In Motion\AppLoader\Vendor.xml`

If you do not delete this file, then the software will only install if it matches your device's carrier/vendor.

Upgrade Device
--------------

1. Connect your device via USB
2. Open the `C:\Program Files (x86)\Common Files\Research In Motion\AppLoader\Loader.exe`
3. Click next many times

Approach 2: Use Desktop Manager
===============================

Requirements
------------

- Download & install the [BlackBerry Device Manager software](http://us.blackberry.com/apps-software/desktop/)
- Download & install the [BlackBerry device software](http://us.blackberry.com/support/downloads/download_sites.jsp) (e.g. OS 6.0.0.337 for 9800)

Unlock Device
-------------

Delete `C:\Program Files (x86)\Common Files\Research In Motion\AppLoader\Vendor.xml`

If you do not delete this file, then the software will only install if it matches your device's carrier/vendor.

Upgrade Device
--------------

1. Connect your device via USB
2. Open the _BlackBerry Device Manager_
3. Click _Device_ -> _Upgrade Device Software_

Troubleshooting
===============

__During the upgrade, I receive the following error: One of more modules could not be resolved__

One of the installed application's on your device is causing this problem. My solution was to remove all software from the device using the _Application_ section of the _Device Manager._
