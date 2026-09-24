const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');

for (let i = 0; i < 9; i++) {
  const marker = `Parent ${i}`;
  // let's grab the HTML of each container
}

const parents = [...home.matchAll(/class="[^"]*e-parent[^"]*"([\s\S]*?)(?=<div[^>]*class="[^"]*e-parent|$)/gi)];
parents.forEach((p, idx) => {
  const content = p[1];
  const h = [...content.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const vids = [...content.matchAll(/data-settings="([^"]*)"/gi)].map(m => m[1].replace(/&quot;/g, '"')).filter(s => s.includes('video'));
  const imgs = [...content.matchAll(/<img[^>]+src="([^"]+)"/gi)].map(m => m[1]);
  console.log(`=== Container ${idx} ===`);
  console.log('Headings:', h);
  console.log('Videos:', vids);
  console.log('Images:', imgs);
});
