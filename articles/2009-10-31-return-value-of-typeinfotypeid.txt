--- 
title: Return value of typeinfo::typeid
date:  31/10/2009
tag:   C++

Usage
=====

<script src="http://gist.github.com/348420.js"></script>

Return Value
============
The return value is defined by the compiler. For example, `gcc` returns `i` for an int, while a Microsoft compiler may return `int`

Unix
====
Objects may have a number prefixed to their name, such as `13MyClass`

People suspect that this is related to the size of the object.

Summary
=======
While the type name is unique to the class, the number may change if the class is updated with new members or functions.