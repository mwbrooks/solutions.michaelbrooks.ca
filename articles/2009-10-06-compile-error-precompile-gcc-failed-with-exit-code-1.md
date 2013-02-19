--- 
title: "Compile Error: Precompile gcc failed with exit code 1"
date:  06/10/2009
tag:   C++

Error Message
=============
    Precompile <<precompile header name.pch>>
        Command /Developer/usr/bin/gcc-4.2 failed with exit code 1

Solution
========
The Xcode target (or maybe project) configuration may not have the correct precompiled header path.

1. Right-click on the target and select Get Info
2. Select the Build tab
3. Select All Configurations
4. Go to the section GCC 4.2 Language
5. Find the setting Prefix Header
6. Check if the path and name are correct.
    * If you have moved your source files into a subfolder inside the project, then include the subfolder in the setting.
    * e.g. `Sources/MyProject_Prefix.pch`


