--- 
title: Remote Git Repository
date:  15/09/2009
tag:   Git

Server: Create Remote Git Repository
====================================
    # Repository is just an ordinary directory
    mkdir /home/git-data/my_repository.git
    
    # Initialize a bare git repository
    cd /home/git-data/my_repository.git
    git --bare init

Local: Add Remote Repository
============================
    cd ~/Documents/Development/my_project/
    git remote add origin ssh://user@your-repo-server.com:22/home/user/my_repository.git
    git push origin master

[Source](http://toolmantim.com/articles/setting_up_a_new_remote_git_repository)
