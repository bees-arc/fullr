const fs = require('fs');

function cleanText(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/\s+/g, ' ').trim();
}

function parseMenu() {
  const html = fs.readFileSync('menu.html', 'utf-8');
  console.log('--- MENU ITEMS ---');
  // Match menu products or items
  const productMatches = [...html.matchAll(/<h[234][^>]*class="[^"]*product[^"]*"[^>]*>([\s\S]*?)<\/h[234]>/gi)];
  // Also look for products with title, price, description, images
  const itemMatches = [...html.matchAll(/<div[^>]*class="[^"]*(?:elementor-widget-container|jet-listing|product)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)];
  
  // Let's look for specific menu headings and cards
  const hMatches = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)];
  const headings = hMatches.map(m => cleanText(m[1])).filter(t => t.length > 2 && !t.includes('Menu') && !t.includes('Full’r'));
  console.log('Headings in Menu:', headings.slice(0, 30));

  // Extract all img tags with their src and alt in menu.html
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi)];
  console.log('Menu images count:', imgs.length);
  imgs.forEach(m => {
    if (m[1].includes('uploads')) console.log(m[2], ':', m[1]);
  });
}

function parseLocate() {
  const html = fs.readFileSync('locate.html', 'utf-8');
  console.log('--- LOCATE US ---');
  const hMatches = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)];
  console.log('Headings in Locate:', hMatches.map(m => cleanText(m[1])));
  // Let's find addresses, phone numbers, opening hours
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  pMatches.forEach(m => {
    const text = cleanText(m[1]);
    if (text.length > 5) console.log('Locate P:', text);
  });
}

function parseAbout() {
  const html = fs.readFileSync('about.html', 'utf-8');
  console.log('--- ABOUT US ---');
  const pMatches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
  pMatches.forEach(m => {
    const text = cleanText(m[1]);
    if (text.length > 20) console.log('About P:', text);
  });
}

parseMenu();
parseLocate();
parseAbout();
