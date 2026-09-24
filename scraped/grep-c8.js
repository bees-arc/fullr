const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');
const idx = home.indexOf('6c0c161');
console.log(home.substring(idx - 100, idx + 400));
