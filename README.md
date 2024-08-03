[![npm version](https://badge.fury.io/js/kernel.css.svg)](https://www.npmjs.com/package/kernel.css)

Welcome to the kernel.css framework!

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
The kernel.css framework is a unintrusive, lightweight and semantic CSS and JavaScript framework
inspired by the [material design spec](https://material.io/guidelines). It uses prefixes for all it's classes. It's meant to be
a foundation to your projects, and not a complete product.

Features
--------
 * Includes all the main colors specified in the material design colors spec.
 * Grid system based on flexbox.
 * Navigation with four preset sizes (ke-header-xs, ke-header-sm, ke-header-lg, ke-header-xl).
 * Cubic-bezier transitions.

Why was it created?
-------------------
kernel.css was originally created for the Ionogy [Libre](https://ionogy.com/libre) project.
We needed a framework that could be used for creating everything from websites to webapps, and the likes.
It also had to be customizable in order to let users
style their application how they wanted, but no other frameworks fit those requirements well enough.
That is why it was decided to release it as a standalone project.

It's far from finished
------------------------
The kernel.css framework is an ever evolving project, and will
continue to be improved upon. We hope you will find it useful.

Installation
============
Simple. Just include these tags in your html.
```
<link rel="stylesheet" type="text/css" href="kernel.css" />
<script type="text/javascript" src="kernel.js"></script>
```

Navigation code example
-----------
```
<body class="ke-base">
  <header class="ke-header ke-header-sm">
    <div class="ke-header-brand">kernel.css</div>

    <button class="nav-toggle">
        <i class="material-icons">menu</i>
    </button>

    <div class="ke-container">
      <nav class="ke-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Wiki</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      <nav class="ke-nav ke-float-right">
        <ul>
          <li><a href="#">Blog</a></li>
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

kernel.css uses [stylus](http://stylus-lang.com/) internally as it's CSS Preprocessor.

Contributing code
-----------------
Required software:
 * git
 * nodejs
 * npm (bundled with nodejs)

The kernel.css webpage is located in the /docs directory, and the project
examples are found in the /docs/examples directory.

You can find the stylus CSS files in the /stylus directory.

After you build your project with "npm run compile" or "npm run watch",
the newly built kernel.css file can be found in the /build directory. Please use the index.html file
in /test directory which uses the css file in /build, to test your changes.

Please run the "npm run lint" script before you commit any changes.

You can run "npm run release" to create a release directory.

Contributing design
-------------------

Writing documentation
---------------------
We always appreciate if you help out improving the documentation.
I have probably made lots of typos :)

Useful links
------------
 * Github page: http://github.com/ionogy/kernel.css
 * Issue tracker: https://github.com/ionogy/kernel.css/issues

Please don't hesitate to report any issues you may find.

Documentation
-------------
As of now the documentation can be found at: http://github.com/ionogy/kernel.css/README.md
It also comes bundled with this Framework.

License
-------
Please read the file called LICENSE.txt

Contact
=======
Jim Christian:
 - inquiry@christiandale.me

Changelog
=========
Please read the file called CHANGELOG.md
