const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');
const styles = [...home.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
console.log('Inline styles count:', styles.length);
styles.forEach((s, i) => {
  if (s[1].includes('6c0c161')) {
    console.log(`Found in style ${i}:`, s[1]);
  }
});
