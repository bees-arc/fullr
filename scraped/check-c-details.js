const fs = require('fs');

const home = fs.readFileSync('scraped/homepage.html', 'utf-8');
const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');

// Container 3 text & typography
console.log('--- CONTAINER 3 (RED #EA1E35) DETAILS ---');
const c3 = home.match(/elementor-element-f597870[\s\S]*?(?=elementor-element-e9575cf)/i);
if (c3) {
  const headings = [...c3[0].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[0]);
  console.log('Headings:', headings);
  const p = [...c3[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[0]);
  console.log('P tags:', p);
}

// Container 4 text & typography
console.log('--- CONTAINER 4 (GREEN #008A6B) DETAILS ---');
const c4 = home.match(/elementor-element-e9575cf[\s\S]*?(?=elementor-element-7e2e4b0)/i);
if (c4) {
  const headings = [...c4[0].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[0]);
  console.log('Headings:', headings);
  const p = [...c4[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[0]);
  console.log('P tags:', p);
}

// Container 5 text & typography
console.log('--- CONTAINER 5 (PURPLE #6851A1) DETAILS ---');
const c5 = home.match(/elementor-element-7e2e4b0[\s\S]*?(?=elementor-element-c047bbe)/i);
if (c5) {
  const headings = [...c5[0].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[0]);
  console.log('Headings:', headings);
}

// Container 7 text & typography
console.log('--- CONTAINER 7 (YELLOW #FAAD1B) DETAILS ---');
const c7 = home.match(/elementor-element-54abdf25[\s\S]*?(?=elementor-element-6c0c161)/i);
if (c7) {
  const headings = [...c7[0].matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => m[0]);
  console.log('Headings:', headings);
  const p = [...c7[0].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[0]);
  console.log('P tags:', p);
}
