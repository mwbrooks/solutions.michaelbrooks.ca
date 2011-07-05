--- 
title: Android Soft Keyboard Resizes Web View
date: 05/07/2011
tag: PhoneGap Android

The default behaviour of Android is to resize the web view when the
soft keyboard is displayed. This can cause undesirable behaviour when your PhoneGap
application has elements positioned as `fixed` or `absolute`.

__Normal Web View:__

<img src="/images/articles/tweetgap-default.png" />

__Soft Keyboard Resizes Web View:__

<img src="/images/articles/tweetgap-resize.png" />

__Desired Result:__

<img src="/images/articles/tweetgap-pan.png" />

__Solution:__

- Go to your Android application directory
- Open `AndroidManifest.xml`
- Add `android:windowSoftInputMode="adjustPan` to `<activity>`

        <!-- Before -->
        <activity android:configChanges="orientation|keyboardHidden" android:label="@string/app_name" android:name="PhotoGap">

        <!-- After -->
        <activity android:configChanges="orientation|keyboardHidden" android:windowSoftInputMode="adjustPan" android:label="@string/app_name" android:name="PhotoGap">

The [Android Developer Guides have good documentation](http://developer.android.com/guide/topics/manifest/activity-element.html#wsoft) for `android:windowSoftInputMode`
