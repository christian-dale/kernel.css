/**
 * Load different kernel.css stylesheet and script based on the environment.
 */

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.type = "text/css";

if (location.href.startsWith("http://localhost")) { // Development
    cssLink.href = "/build/kernel.css";
} else { // Production
    cssLink.href = "https://cdn.jsdelivr.net/gh/christian-dale/kernel.css@1.0.0/build/kernel.min.css";
}

document.head.appendChild(cssLink);
