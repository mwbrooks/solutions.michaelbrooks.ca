--- 
title: Hide StatusBar on iOS
date: 30/06/2011
tag: iOS PhoneGap

A PhoneGap-iOS application is just a regular Xcode iOS project.

## Hide Status Bar by Configuration

1. Open your Xcode project `MyApp.xcodeproj`
2. Open your project's pList file `MyApp-Info.plist`
3. Add a new row (right-click -> Add Row)
    - Key: "Status bar is initially hidden" (`UIStatusBarHidden`)
    - Value: `YES`

## Hide Status Bar Programmatically

    [UIApplication sharedApplication].statusBarHidden = YES;