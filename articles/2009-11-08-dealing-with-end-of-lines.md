--- 
title: Dealing with End of Lines
date:  08/11/2009
tag:   Git

Strips all carriage-returns (CR) from commits and adds line-feeds (LF) when necessary.

    git config --global core.autocrlf input true
    
The above command adds the following to your `~/.gitconfig`
    [core]
        autocrlf = input
