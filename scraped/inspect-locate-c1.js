const fs = require('fs');

const locate = fs.readFileSync('scraped/locate.html', 'utf-8');
const c1Match = locate.match(/elementor-element-7e2e4b0[\s\S]*?(?=elementor-element-67537ef)/i);
if (c1Match) {
  console.log(c1Match[0]);
}
