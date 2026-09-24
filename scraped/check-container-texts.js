const fs = require('fs');
const home = fs.readFileSync('homepage.html', 'utf-8');

const parents = [...home.matchAll(/class="[^"]*e-parent[^"]*"([\s\S]*?)(?=<div[^>]*class="[^"]*e-parent|$)/gi)];
[3, 4, 5, 7].forEach(idx => {
  console.log(`\n--- CONTAINER ${idx} RAW TEXT ---`);
  const text = parents[idx][1].replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(text);
});
