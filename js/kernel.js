/*
    kernel.css v0.6.0
    MIT License
    github.com/ionogy/kernel.css
*/

var kernel = kernel || {};

(function(app) {
    'use strict';

    var getElementIndex = function(element) {
        var index = 0;

        while ((element = element.previousElementSibling)) {
            index++;
        }

        return index;
    };

    if (window.Element && !Element.prototype.closest) {
        Element.prototype.closest = function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;

            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {};
            } while ((i < 0) && (el = el.parentElement));

            return el;
        };
    }

    app.closeNotice = function(e) {
        e.currentTarget.closest('.notice, .notice').remove();
    };

    /**
     * Toogle header navigation.
     **/

    app.toggleNav = function(e) {
        var header = e.currentTarget.closest('.header, .header');

        if (header.classList.toggle('toggled')) {
            var navMobile = document.createElement('nav');
            navMobile.innerHTML = header.querySelector('.nav, .nav').innerHTML;
            navMobile.className = 'header-mobile fade-in';
            navMobile.style['margin-top'] = header.offsetHeight + 'px';

            header.appendChild(navMobile);

            function onMouseUp(e) {
                if (
                    e.target != navMobile &&
                    e.target != header.querySelector('.nav-toggle') &&
                    e.target != header.querySelector('.nav-toggle i')
                ) {
                    navMobile.remove();
                    header.classList.remove('toggled');
                }
            }

            window.addEventListener('mouseup', onMouseUp);
        } else {
            header.querySelector('.header-mobile, .header-mobile').remove();
        }
    };

    /**
     * Toggle the sidebar.
     **/

    app.toggleSidebar = function(e) {
        var sidebar = e.currentTarget.closest(".sidebar");

        if (sidebar.classList.toggle('active')) {
            function onMouseUp(e) {
                if (
                    e.target != sidebar &&
                    e.target != sidebar.querySelector('li:first-child') &&
                    e.target != sidebar.querySelector('li:first-child i')
                ) {
                    sidebar.style.width = '60px';
                    sidebar.classList.remove('active');
                }
            }

            window.addEventListener('mouseup', onMouseUp);

            sidebar.style.width = '220px';
        } else {
            sidebar.style.width = '60px';
        }
    };

    app.tabs = function(tab) {
        app.initTabs(document.querySelectorAll(tab));
    };

    app.initTabs = function(tabs) {
        tabs.forEach(function(tab) {
            var tabNavigation = tab.querySelectorAll('ul:first-child li');
            var tabContent = tab.querySelectorAll('.tab, .tab');

            tabNavigation.forEach(function(element) {
                element.onclick = function(event) {
                    tabContent.forEach(function(el) {
                        el.classList.remove('tab-selected');
                    });

                    tabContent[getElementIndex(event.currentTarget)].classList.add('tab-selected');

                    tabContent.forEach(function(el) {
                        if (el.classList.contains('tab-selected')) {
                            el.style.display = 'block';
                        } else {
                            el.style.display = 'none';
                        }
                    });
                };
            });
        });
    };

    app.initSlideshows = function(slideshows) {
        slideshows.forEach(function(slideshow) {
            var slide = 0;

            slideshow.innerHTML += '<div class="prev">&lt;</div><div class="next">&gt;</div>';

            function updateSlideshow() {
                var slides = slideshow.querySelectorAll('.slide');

                if (slide > slides.length - 1) {
                    slide = 0;
                }

                if (slide < 0) {
                    slide = slides.length - 1;
                }

                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';

                    if (i == slide) {
                        slides[i].style.display = 'block';
                    }
                }
            }

            function addNav() {
                var strnav = '';

                strnav += '<ul class="nav">';
                for (var i = 0; i < slideshow.querySelectorAll('.slide').length; i++) {
                    strnav += '<li>' + '&#9679;' + '</li>';
                }
                strnav += '</ul>';

                slideshow.innerHTML += strnav;
            }

            if (slideshow.dataset.nav) {
                addNav();
            }

            if (slideshow.dataset.auto) {
                setInterval(function() {
                    slide++;
                    updateSlideshow();
                }, 5000);
            }

            slideshow.querySelector('.prev').addEventListener('click', function() {
                slide --;
                updateSlideshow();
            });

            slideshow.querySelector('.next').addEventListener('click', function() {
                slide ++;
                updateSlideshow();
            });
        });
    };

    /**
     * Initializes dom elements.
     **/

    app.initEvents = function() {
        var navToggle = document.querySelectorAll('.header .nav-toggle');
        var sidebarToggle = document.querySelector('.sidebar ul li:first-child');
        var notice = document.querySelectorAll('.notice .material-icons');
        var tabs = document.querySelectorAll('.tabs');
        var slideshows = document.querySelectorAll('.slideshow');

        if (navToggle) {
            navToggle.forEach(function(element) {
                element.onclick = app.toggleNav;
            });
        }

        if (sidebarToggle) {
            sidebarToggle.onclick = app.toggleSidebar;
        }

        if (notice) {
            notice.forEach(function(element) {
                element.onclick = app.closeNotice;
            });
        }

        if (tabs) {
            app.initTabs(tabs);
        }

        if (slideshows) {
            app.initSlideshows(slideshows);
        }
    };

    app.init = function() {
        app.initEvents();
    };

    /**
     * Progressbar.
     **/

    function ProgressBar(el) {
        this.el = document.querySelector(el);
    }

    ProgressBar.prototype.setProgress = function(progress) {
        this.el.querySelector('.progress, .progress').style.width = progress + '%';
    };

    app.ProgressBar = ProgressBar;

    if (window.jQuery) {
        jQuery.fn.extend({
            ionTabs: function() {
                this.each(function() {
                    app.initTabs([this]);
                });
            }
        });
    }
})(kernel);

window.onload = kernel.init;
