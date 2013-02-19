--- 
title: Setup Ogre3D Project for Xcode
date:  06/10/2009
tag:   Ogre3D

**Outdated: Ogre3D 1.6**

1. Create a new Cocoa project
2. Set Base SDK as 1.5 or 1.6
3. In `Project/Resources` Group
    1. Add the directory `/Media/`
        * Select the option that creates a single entry in the target's *Copy Bundle Resources* (second option)
    2. Add the files `/media.cfg, /plugins.cfg, /resources.cfg`
        * Make sure these are added to the *Copy Bundle Resources*
4. Add the following linked frameworks to the `Project/Frameworks` Group
    * CEGUI.framework
    * Cg.framework
    * Ogre.framework
    * OgreCEGUI.framework
    * libois.a
    * IOKit.framework
    * Cocoa.framework
5. Right-click on the target and select *Add->New Build Phase->New Copy Files Build Phase*
    * Drag the following files into the folder
        * CEGUI.framework
        * Cg.framework
        * Ogre.framework
        * OgreCEGUI.framework
        * libois.a
6. Target Build Options (Select All Configurations)
    1. Architecture: i386
        * This could be x86_64 if Ogre is recompiled under a 64-bit machine
    2. Framework Search Paths
        * `$(SRCROOT)/ExternalFrameworks`
    3. Header Search Paths
        * `$(SRCROOT)/ExternalFrameworks/Ogre.framework/Headers`
        * `$(SRCROOT)/ExternalIncludes/OIS`
            * OIS needs to have a root directory of OIS, which is why this path has subdirectory called OIS
        * `$(SRCROOT)/ExternalFrameworks/CEGUI.framework/Headers`
        * `$(SRCROOT)/ExternalIncludes/Samples`
            * Required for OgreCEGUIRenderer.h
    4. Library Search Paths
        * `$(SRCROOT)/ExternalLibraries/release`
7. Enable C++ code inside Objective-C
    1. Rename the class implementation file that is going to declare the Ogre3D instance to *.mm



