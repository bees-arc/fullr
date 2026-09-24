const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');

const svgMatch = home.match(/<div class="elementor-shape elementor-shape-top"[\s\S]*?<\/svg>/i);
if (svgMatch) {
  console.log('Wave SVG:', svgMatch[0]);
} else {
  console.log('Not found');
}
