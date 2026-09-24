const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const products = [
  'desi-chick-featured',
  'dragon-bait-featured',
  'major-general-featured',
  'beef-me-up-scotty-featured',
  'meatless-master-featured'
];

async function run() {
  const details = {};
  for (const slug of products) {
    const html = await fetchUrl(`https://fullrburgers.lk/product/${slug}/`);
    // extract product short description or description
    const descMatch = html.match(/<div class="woocommerce-product-details__short-description">([\s\S]*?)<\/div>/i);
    const fullDescMatch = html.match(/<div class="woocommerce-Tabs-panel--description[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    const imgMatch = html.match(/<div class="woocommerce-product-gallery__image[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"/i);
    details[slug] = {
      shortDesc: descMatch ? descMatch[1].replace(/<[^>]+>/g, ' ').trim() : '',
      fullDesc: fullDescMatch ? fullDescMatch[1].replace(/<[^>]+>/g, ' ').trim() : '',
      image: imgMatch ? imgMatch[1] : ''
    };
  }
  console.log(JSON.stringify(details, null, 2));
}

run();
