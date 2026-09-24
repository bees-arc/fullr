const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');

const parents = [...home.matchAll(/class="[^"]*e-parent[^"]*"([\s\S]*?)(?=<div[^>]*class="[^"]*e-parent|$)/gi)];

parents.forEach((p, idx) => {
  console.log(`\n============================= CONTAINER ${idx} =============================`);
  const raw = p[0];
  // print first 600 chars of each
  console.log(raw.substring(0, 800));
  // print any images inside
  const imgs = [...raw.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/gi)].map(m => m[0]);
  console.log('Images inside:', imgs);
  // print any buttons or links inside
  const btns = [...raw.matchAll(/<a[^>]+class="[^"]*button[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => m[0]);
  console.log('Buttons inside:', btns);
});
