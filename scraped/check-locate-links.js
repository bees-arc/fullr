const fs = require('fs');

const locate = fs.readFileSync('locate.html', 'utf-8');
const links = [...locate.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)];
console.log('--- ALL LINKS IN LOCATE ---');
links.forEach(l => {
  const href = l[1];
  const txt = l[2].replace(/<[^>]+>/g, '').trim();
  if (href.includes('maps') || href.includes('tel') || href.includes('ubereats') || href.includes('pickme') || href.includes('bit.ly') || txt.length > 0) {
    console.log(`${txt} -> ${href}`);
  }
});
