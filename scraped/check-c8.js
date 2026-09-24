const fs = require('fs');

const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');
const post15 = fs.readFileSync('scraped/post-15.css', 'utf-8');

const regex = /\.elementor-element-6c0c161[^{]*\{([^}]+)\}/gi;
let match;
while ((match = regex.exec(css)) !== null) {
  console.log('Container 8 rule:', match[0]);
}

const regex0 = /\.elementor-element-69331c5f[^{]*\{([^}]+)\}/gi;
while ((match = regex0.exec(css)) !== null) {
  console.log('Container 0 rule:', match[0]);
}

// Also check any other background colors in post-5230
const bgMatches = [...css.matchAll(/background-color:([^;}]+)/gi)].map(m => m[1].trim());
console.log('All bg colors used in post-5230:', [...new Set(bgMatches)]);
