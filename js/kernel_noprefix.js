/*
    kernel.css v0.6.0
    MIT License
    github.com/ionogy/kernel.css
*/

class KernelCSS {
    constructor() {

    }

    /**
     * Helper method for finding the index of a child element.
     */

    index(el) {
        if (!el) {
            return -1;
        }

        let i = 0;

        while (el = el.previousElementSibling) {
            i++;
        }

        return i;
    }

    /**
     * Enable tabs support.
     */

    tabs(tab) {
        const nav = tab.querySelectorAll("ul li");
        const content = tab.querySelectorAll(".tab");

        nav.forEach(el => {
            el.onclick = (event) => {
                content.forEach(x => x.classList.remove("tab-selected"));

                content[this.index(event.currentTarget)].classList.add('tab-selected');

                content.forEach(x =>
                    x.style.display = x.classList.contains("tab-selected") ? "block" : "none"
                );
            };
        });
    }

    /**
     * Enable nav support.
     */

    nav(e) {
        const header = e.currentTarget.closest(".header");

        if (header.classList.toggle("toggled")) {
            var navMobile = document.createElement("nav");
            navMobile.innerHTML = header.querySelector(".nav").innerHTML;
            navMobile.className = "header-mobile fade-in";
            navMobile.style["margin-top"] = header.offsetHeight + "px";

            header.appendChild(navMobile);

            function onMouseUp(e) {
                if (
                    e.target != navMobile &&
                    e.target != header.querySelector(".nav-toggle") &&
                    e.target != header.querySelector(".nav-toggle i")
                ) {
                    navMobile.remove();
                    header.classList.remove("toggled");
                }
            }

            window.addEventListener('mouseup', onMouseUp);
        } else {
            header.querySelector(".header-mobile").remove();
        }
    }

    notice(e) {
        e.currentTarget.closest('.notice').remove();
    }

    init() {
        document.querySelectorAll(".tabs").forEach(x => this.tabs(x));
        document.querySelector(".header .nav-toggle").onclick = this.nav;
        document.querySelectorAll(".notice i").forEach(x => x.onclick = this.notice);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const kernelcss = new KernelCSS();
    kernelcss.init();
});
