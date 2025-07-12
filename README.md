[![npm version](https://badge.fury.io/js/kernel.css.svg)](https://www.npmjs.com/package/kernel.css)

Welcome to the kernel.css library!

Table of contents
-----------------
 * [Introduction](#introduction)
 * [Installation](#installation)
 * [Contribute](#contribute)
 * [Contact](#contact)
 * [Changelog](#changelog)

Introduction
============

What is it?
-----------
The kernel.css library is a unintrusive, lightweight and semantic CSS library. It uses prefixes for all it's classes and is meant to be
a simple foundation to your project.

Features
--------
 * Grid system with 12 columns.
 * Flexbox support.
 * Responsive design.
 * Navigation with four preset sizes (ke-header-xs, ke-header-sm, ke-header-lg, ke-header-xl).
 * Cubic-bezier transitions.

Why was it created?
-------------------
kernel.css was created to be a simple, lightweight CSS library that could be used as a baseline for my other projects.
It is meant to be unintrusive, and not get in the way of your own styles.

It's far from finished
------------------------
The kernel.css framework is an ever evolving project, and will
continue to be improved upon. I hope you will find it useful.

Installation
============
Simple. Just include this tag in your html.
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/christian-dale/kernel.css@2.0.0/build/kernel.min.css" />
```

Navigation code example
-----------
```html
<body class="ke-base">
  <header class="ke-header ke-header-sm">
    <div class="ke-container">
	  <input class="ke-nav-toggle" id="ke-nav-toggle" type="checkbox">
	  <label for="ke-nav-toggle" class="ke-nav-toggle-hamburger"><span>☰</span></label>

	  <nav class="ke-nav">
	    <ul>
	      <li><a href="#">Projects</a></li>
		  <li><a href="#">Blog</a></li>
		  <li><a href="#">About</a></li>
		  <li><a href="#">Contact</a></li>
		</ul>
	  </nav>
    </div>
  </header>
</body>
```

Contribute
==========
If you like the project and would like to contribute, you can
do so at github.

You can also help support the continued development of this project on

<a href="https://www.buymeacoffee.com/christiandale" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Contributing code
-----------------
Required software:
 * git
 * nodejs
 * npm (bundled with nodejs)

The kernel.css webpage is located in the /docs directory, and the project
examples are also found in the /docs directory.

You can find the SCSS preprocessor files in the /scss directory.

After you build the project with "npm run build",
the newly built kernel.css file can be found in the /build directory. Please use the index.html file in /docs directory which uses the CSS file in /build, to test your changes.

Please run the "npm run lint" script before you commit any changes.

Writing documentation
---------------------
We always appreciate if you help out improving the documentation.
I have probably made lots of typos :)

Useful links
------------
 * Github page: http://github.com/christian-dale/kernel.css
 * Issue tracker: https://github.com/christian-dale/kernel.css/issues

Please don't hesitate to report any issues you may find.

Documentation
-------------
As of now the documentation can be found at: https://christian-dale.github.io/kernel.css/

License
-------
The project is licensed under the MIT license. Please read the file called LICENSE.md

Contact
=======
Christian Dale
 - Web: https://christiandale.no
 - Email: post@christiandale.no

Changelog
=========
Please read the file called CHANGELOG.md
