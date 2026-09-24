const fs = require('fs');

const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');

// find all selectors mentioning f597870 (red), e9575cf (green), 7e2e4b0 (purple), 54abdf25 (yellow)
const ids = ['f597870', 'e9575cf', '7e2e4b0', '54abdf25', '6c0c161', 'c047bbe'];

ids.forEach(id => {
  console.log(`\n=== RULES FOR ${id} ===`);
  const regex = new RegExp(`\\.elementor-element-${id}[^{]*\\{([^}]+)\\}`, 'gi');
  let match;
  while ((match = regex.exec(css)) !== null) {
    console.log(match[0]);
  }
});
