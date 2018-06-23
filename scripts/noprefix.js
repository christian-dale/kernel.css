const fs = require('fs');

function prefixrem(css) {
    return css.replace(/\.ion-/g, '.');
}

const file = fs.readFileSync("./build/kernel.css", "utf8");
fs.writeFileSync("./build/kernel.css", prefixrem(file));
