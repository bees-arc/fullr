const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');

const containers = [...home.matchAll(/<div[^>]*class="[^"]*e-parent[^"]*"[^>]*data-settings="([^"]*)"[^>]*>/gi)];
console.log('e-parent count with data-settings:', containers.length);
containers.forEach((c, i) => {
  console.log(`[Container ${i}]:`, c[1].replace(/&quot;/g, '"'));
});

// Also find all e-parent divs and their direct children or headings
const allParents = [...home.matchAll(/<div[^>]*class="([^"]*e-parent[^"]*)"[^>]*>/gi)];
console.log('all e-parent count:', allParents.length);
allParents.forEach((c, i) => {
  console.log(`Parent ${i}: class="${c[1]}"`);
});
