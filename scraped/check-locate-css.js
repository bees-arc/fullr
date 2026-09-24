const https = require('https');
const fs = require('fs');

const locate = fs.readFileSync('scraped/locate.html', 'utf-8');
const cssLinks = [...locate.matchAll(/href=["'](https:\/\/fullrburgers\.lk\/wp-content\/uploads\/elementor\/css\/[^"']+\.css[^"']*)["']/gi)].map(m => m[1]);
console.log('CSS links in locate:', cssLinks);

// let's fetch post-6331.css which is the specific locate page css!
https.get('https://fullrburgers.lk/wp-content/uploads/elementor/css/post-6331.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scraped/post-6331.css', data);
    console.log('Saved post-6331.css, length:', data.length);
    // check background-colors
    const bgColors = [...new Set(data.match(/background(?:-color)?:\s*([^;]+);/gi) || [])];
    console.log('Bg colors in locate:', bgColors);
    
    // check rules for card containers
    const rules = data.split('}');
    rules.forEach(r => {
      if (r.includes('67537ef') || r.includes('background') || r.includes('border-radius')) {
        const sel = r.split('{')[0].trim();
        const body = r.split('{')[1]?.trim();
        if (body && (body.includes('background') || body.includes('border'))) {
          console.log(sel, '-->', body);
        }
      }
    });
  });
});
