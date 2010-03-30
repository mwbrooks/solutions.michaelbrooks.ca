--- 
title: Default .gitignore
date:  06/10/2009
tag:   Git

Use a `.gitignore` file to exclude files and directories from the Git version control system.

Multiple `.gitignore` files can be placed in subdirectories, but it is generally easier to use only one in the root directory, which is where the `.git/` directory exists.

    # Xcode
    build/*
    *.pbxuser
    *.mode1v3

    # Subversion
    .svn

    # OS X
    .DS_Store

    # Textmate
    *.tmproj
