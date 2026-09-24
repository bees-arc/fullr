const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');
const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');
const globalCss = fs.readFileSync('scraped/post-15.css', 'utf-8');

// Find all container classes and their css in post-5230.css
const containerMatches = [...home.matchAll(/class="([^"]*elementor-element-[a-f0-9]+[^"]*e-parent[^"]*)"/gi)];
console.log('Containers on live homepage:');
containerMatches.forEach((m, idx) => {
  const fullClass = m[1];
  const idMatch = fullClass.match(/elementor-element-([a-f0-9]+)/);
  const elementId = idMatch ? idMatch[1] : '';
  console.log(`\n--- Container ${idx}: .elementor-element-${elementId} ---`);
  
  // Find rule in css
  const regex = new RegExp(`\\.elementor-element-${elementId}[^{]*\\{([^}]+)\\}`, 'gi');
  let rule;
  while ((rule = regex.exec(css)) !== null) {
    console.log(rule[0]);
  }
});
