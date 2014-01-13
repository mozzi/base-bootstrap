Javascript
==========

If you need to update libraries you need to install and run bower::

    ~/project-dir/$ npm install --save-dev

    ~/project-dir/$ bower install


After that you need to run grunt script to concat and minify all necessary files::

    ~/project-dir/$ grunt


SASS and Compass Conventions
============================

Installation
------------

Install Ruby 32bit >= 2.0. On Windows ruby installation folder and your project folder should be on same drive. Use symlinks if necessary.
Install bundler::

    gem install bundler

Go to project root directory and run::

    bundle install

Usage
-----

To run on-the-fly sass compiler, in terminal window type::

    ~/project-dir/assets/sass/$ bundle exec compass watch

To run compilation for production once, in terminal window type::

    ~/project-dir/assets/sass/$ bundle exec compass compile -e production --force

If you want to use css debugging - use chrome. chrome >= 30 loads sourcemaps by default.


Compass Support in PhpStrom
---------------------------

Phpstorm can autocomplete compass mixins.

Video: http://www.screencast.com/t/HMOAqsqGW

dev comment: http://youtrack.jetbrains.com/issue/WEB-5802#comment=27-576409

On windows compass path detected as "C:/Ruby200/bin/compass", but it should look like this: "C:\\Ruby200\\lib\\ruby\\gems\\2.0.0\\gems\\compass-0.12.2\\bin\\compass"
