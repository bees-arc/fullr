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
  const css = await fetchUrl('https://fullrburgers.lk/wp-content/uploads/elementor/css/post-15.css');
  fs.writeFileSync('post-15.css', css);
  
  // extract css variables
  const vars = [...css.matchAll(/--e-global-[^:]+:\s*[^;]+;/g)].map(m => m[0]);
  console.log('Global elementor variables:');
  vars.forEach(v => console.log(v));
}

run();
