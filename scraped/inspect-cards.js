const fs = require('fs');

const locate = fs.readFileSync('scraped/locate.html', 'utf-8');

// Inspect container 1 (7e2e4b0) and container 2 (67537ef)
const c1 = locate.match(/elementor-element-7e2e4b0[\s\S]*?(?=elementor-element-67537ef)/i);
if (c1) {
  console.log('--- CONTAINER 1 ---');
  console.log(c1[0].substring(0, 1000));
}

const c2 = locate.match(/elementor-element-67537ef[\s\S]*?(?=elementor-element-6c0c161)/i);
if (c2) {
  console.log('--- CONTAINER 2 ---');
  // let's look at one card structure (e.g. Pita Kotte)
  const pitaMatch = c2[0].match(/Pita Kotte[\s\S]*?(?=Crescat)/i);
  if (pitaMatch) {
    console.log('Pita Kotte card HTML:\n', pitaMatch[0]);
  }
}
