--- 
title: Default Function Parameters
date:  07/10/2009
tag:   C++

<script src="http://gist.github.com/348529.js"></script>

Comments
========
* Default parameters must be at the end of the function signature.
    * `myClass->print(,,3); // Invalid`
* Functions with default parameters can be overloaded
    * `void print(int value);`
    * `void print(int value = 10);`
    * `print() // 10`
* Default parameters do not define a unique function
    * `void printValues(int value);`
    * `void printValues(int value, int value2 = 20);`
    * `printValues(12); // Error: Ambigious call because of default param`