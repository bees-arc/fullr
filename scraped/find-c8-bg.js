const fs = require('fs');

const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');

const regex = /\.elementor-element-6c0c161[^{]*\{([^}]+)\}/gi;
let match;
while ((match = regex.exec(css)) !== null) {
  console.log(match[0]);
}

// Also check background color of elementor-element-6c0c161 or its children
const regex2 = /\.elementor-element-6c0c161[^{]*background-color:([^;}]+)/gi;
while ((match = regex2.exec(css)) !== null) {
  console.log('C8 background-color:', match[0]);
}
