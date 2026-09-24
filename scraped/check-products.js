const fs = require('fs');

const html = fs.readFileSync('homepage.html', 'utf-8');

const products = ['Desi Chick', 'Dragon Bait', 'Major General', 'Beef Me Up Scotty', 'Meatless Master'];

products.forEach(p => {
  const idx = html.indexOf(p);
  console.log(`=== ${p} ===`);
  if (idx !== -1) {
    console.log(html.substring(Math.max(0, idx - 200), Math.min(html.length, idx + 500)));
  } else {
    console.log('Not found');
  }
});
