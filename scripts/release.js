"use strict";

const fs = require('fs');

if (!fs.existsSync('./release')) {
	fs.mkdirSync('./release');
}

fs.createReadStream('./build/kernel.css').pipe(fs.createWriteStream('./release/kernel.css'));
fs.createReadStream('./js/kernel.js').pipe(fs.createWriteStream('./release/kernel.js'));
