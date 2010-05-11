--- 
title: Getting Started with Merb on Heroku
date: 10/05/2010
tag:  Merb Heroku

Install Merb
============
* `sudo gem update --system`
* `sudo gem install merb`

Create a Merb Project
=====================
* `merb-gen app myproject`
* `cd myproject`
* `bundle install`
    * Requires bundler: `sudo gem install bundler`
* `thin start -R config.ru`
    * Requires thin: `sudo gem install thin`

Setup Git Repository
====================
* `cd myproject`
* `git init`
* `git add .`
* `git commit -m "Initial commit"`

Add Heroku Repository
=====================
* `git remote add heroku git@heroku.com:myproject.git`

Update Heroku Stack to use Bamboo (Beta)
========================================
This is required because bundler is the gem manager. Currently, the Bamboo stack is in beta. Heroku provides a [nice article on bundler](http://docs.heroku.com/bundler).

* View stack options: `heroku stack`
* Activate the stack: `heroku stack:migrate bamboo-ree-1.8.7`

Prepare Gemfile for Heroku Bamboo Stack
=======================================
The Heroku Bamboo stack does have preinstalled gems, so all gems must be declared in the Gemfile. Merb generates a default Gemfile that covers most of the gems. However, Heroku requires a few extras.

* Gem Source: `source :gemcutter`
* Bundler: `gem 'bundler', '0.9.20'`
    * Bundler is a tricky one. Each Bamboo stack uses a different bundler version. See the [heroku bundler article for details](http://docs.heroku.com/bundler).
* SQLite3 for Development
* Postgres for Production

<script src="http://gist.github.com/396912.js"></script>

Deploy to Heroku
================
* `git push heroku master`
* Open browser to: http://myproject.heroku.com/
