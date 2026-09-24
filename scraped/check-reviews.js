const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');
const tiMatch = home.match(/class="[^"]*ti-widget[^"]*"[\s\S]*?<\/div>\s*<\/div>/i);
if (tiMatch) {
  console.log('TI Widget found, length:', tiMatch[0].length);
  console.log(tiMatch[0].substring(0, 1000));
} else {
  // search for reviews or text
  const reviews = [...home.matchAll(/class="ti-review-content"[^>]*>([\s\S]*?)<\/div>/gi)];
  console.log('Reviews count:', reviews.length);
  reviews.forEach(r => console.log(r[1].trim()));
}
