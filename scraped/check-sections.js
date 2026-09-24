const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');

// Find all text blocks in elementor widgets
const sections = [...home.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi)];
console.log('Total elementor widgets:', sections.length);
sections.forEach((s, i) => {
  const clean = s[1].replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length > 5 && !clean.includes('function(') && !clean.includes('var ')) {
    console.log(`[#${i}]: ${clean}`);
  }
});
