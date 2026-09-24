const fs = require('fs');

const locate = fs.readFileSync('scraped/locate.html', 'utf-8');

// Find all containers and widgets in locate.html
const containers = [...locate.matchAll(/class="([^"]*elementor-element-[a-f0-9]+[^"]*e-parent[^"]*)"/gi)];
console.log('Containers count in locate.html:', containers.length);
containers.forEach((c, i) => console.log(`Container ${i}: ${c[1]}`));

// Find all headings and texts in locate.html
const widgets = [...locate.matchAll(/<div class="elementor-widget-container">([\s\S]*?)<\/div>/gi)];
console.log('Total widgets:', widgets.length);
widgets.forEach((w, i) => {
  const text = w[1].replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length > 5 && !text.includes('function(')) {
    console.log(`[Widget ${i}]: ${text.substring(0, 150)}`);
  }
});

// Also look for images in locate.html
const imgs = [...locate.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/gi)].map(m => m[1]);
console.log('Images in locate.html:', [...new Set(imgs)]);
