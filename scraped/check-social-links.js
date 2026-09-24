const fs = require('fs');

const home = fs.readFileSync('homepage.html', 'utf-8');
const links = [...home.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log('--- ALL EXTERNAL LINKS IN HOME ---');
links.forEach(l => {
  const href = l[1];
  if (href.includes('instagram') || href.includes('facebook') || href.includes('tiktok') || href.includes('ubereats') || href.includes('pickme') || href.includes('whatsapp') || href.includes('youtube')) {
    console.log(`${l[2].replace(/<[^>]+>/g, '').trim()} -> ${href}`);
  }
});
