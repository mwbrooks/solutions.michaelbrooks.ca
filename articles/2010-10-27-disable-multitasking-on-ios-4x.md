--- 
title: Disable Multitasking on iOS 4.x
date: 27/10/2010
tag: Xcode iOS iPhone PhoneGap

By default, when an application is closed on iOS 4.x, it will suspend and not terminate the application.

You can opt out of suspending the application with a simple `Info.plist` setting.

1. Open your Xcode project
2. Open Info.plst
3. Add a new entry with the following KEY:VALUE pair `UIApplicationExitsOnSuspend : YES`