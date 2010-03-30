--- 
title: Modify Previous Commit
date:  05/11/2009
tag:   Git

Problem
=======
Forgot to add the project file to the previous commit.

    git commit -m "Created a new context class to manage PolyPlane interaction"

Solution
========
Make your corrections and amend the `HEAD`

    git add my_project_file.proj
    git commit -C HEAD --amend

`-C HEAD` uses the commit message from the HEAD (the previous commit)

`--amend` includes the contents of this commit inside the previous commit

Use `-c HEAD` to open editor with previous commit message.
