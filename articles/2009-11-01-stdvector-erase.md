--- 
title: std::vector Erase
date:  01/11/2009
tag:   C++

`std::vector::erase` method does not call the destructor on a data pointer.

You must delete the pointer yourself after you have erased the data from the vector array.