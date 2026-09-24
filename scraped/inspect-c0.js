const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');

const c0Match = home.match(/elementor-element-69331c5f[\s\S]*?(?=elementor-element-38259eb)/i);
if (c0Match) {
  console.log(c0Match[0]);
}
