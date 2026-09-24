const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');

// Find all sections or containers
const sections = [...home.matchAll(/<section[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/section>/gi)];
console.log('Total sections:', sections.length);
sections.forEach((s, i) => {
  console.log(`\n=== Section ${i} classes: ${s[1]} ===`);
  const vids = [...s[2].matchAll(/<video[^>]*>([\s\S]*?)<\/video>/gi)];
  const imgs = [...s[2].matchAll(/<img[^>]+src="([^"]+)"/gi)].map(m => m[1]);
  const h = [...s[2].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('Videos:', vids.length);
  console.log('Images:', imgs);
  console.log('Headings:', h);
  const dataSettings = s[0].match(/data-settings="([^"]+)"/);
  if (dataSettings) console.log('Data-settings:', dataSettings[1].replace(/&quot;/g, '"'));
});
