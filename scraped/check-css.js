const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const css = await fetchUrl('https://fullrburgers.lk/wp-content/uploads/elementor/css/post-5230.css');
  fs.writeFileSync('post-5230.css', css);
  console.log('Saved post-5230.css, length:', css.length);
  
  // extract background-colors, color, font-family
  const bgColors = [...new Set(css.match(/background(?:-color)?:\s*([^;]+);/gi) || [])];
  console.log('Background styles:', bgColors.slice(0, 15));
  
  const fonts = [...new Set(css.match(/font-family:\s*([^;]+);/gi) || [])];
  console.log('Fonts:', fonts);
}

run();
