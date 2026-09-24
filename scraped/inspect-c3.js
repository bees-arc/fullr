const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');

const c3Match = home.match(/elementor-element-f597870[\s\S]*?(?=elementor-element-e9575cf)/i);
if (c3Match) {
  console.log(c3Match[0]);
}
