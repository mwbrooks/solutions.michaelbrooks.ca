--- 
title: C++ in Objective-C
date:  05/10/2009
tag:   C++ Objective-C

Problem
=======
How do I compile C++ code in Objective-C / Cocoa.

Solution
========
Rename the Objective-C implementation file from `*.m` to `*.mm`

This tells the Objective-C compiler that it is linking a C++ object

Hearsay (Untested)
==================
You cannot instantiate a C++ class directly because the constructor and destructor will not fire. Instead, you want to create a pointer and use the `new` and `delete` methods


