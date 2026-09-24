const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');

const c4Match = home.match(/elementor-element-e9575cf[\s\S]*?(?=elementor-element-7e2e4b0)/i);
if (c4Match) {
  console.log(c4Match[0]);
}
