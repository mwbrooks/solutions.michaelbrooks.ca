--- 
title: "Error: C++ forbids declaration with no type"
date:  15/10/2009
tag:   C++

Error Message
=============
    Error: C++ forbids declaration with no type

Problem
=======
There is a circular reference somewhere.

This can happen if two classes include each other and at least one class declares a member instance of the other.

Solution
========
If possible, use a forward declaration instead of including the entire class.
    class MyClass;          // Forward declaration
    class OtherClass {
    public:
        // ...
        
    private:
        MyClass myClass;
    }
    
If a forward declaration is not possible, then try moving the #include to the implementation file.

