--- 
title: Xcode Multiple Values
date:  28/07/2009
tag:   Xcode

Description
===========
Inside the Xcode build properties, some values are displayed as `<Multiple Values>`

Incorrect Meaning
=================
This can be a little confusing. At first, I thought it meant that the a property contained a list of values.

Correct Meaning
===============
`<Multiple Values>` means that the **Debug** and **Release** builds contain different values for the same property.
  
To see the actual value, select one of the build types.


