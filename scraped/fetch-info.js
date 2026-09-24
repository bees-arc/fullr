const https = require('https');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  try {
    const html = await fetchUrl('https://fullrburgers.lk/');
    fs.writeFileSync('homepage.html', html, 'utf-8');
    console.log('Homepage saved, length:', html.length);

    // Extract video tags
    const videoMatches = [...html.matchAll(/<video[^>]*>([\s\S]*?)<\/video>/gi)];
    console.log('Video tags count:', videoMatches.length);
    videoMatches.forEach((m, i) => console.log(`Video ${i}:`, m[0].substring(0, 300)));

    // Extract video src / source src / mp4 / webm
    const mediaRegex = /https?:\/\/[^"'\s)]+\.(mp4|webm|mov|m4v)/gi;
    const mediaFiles = [...new Set(html.match(mediaRegex) || [])];
    console.log('Found video files:', mediaFiles);

    // Extract img src
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    const images = [];
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      images.push(match[1]);
    }
    console.log('Images count:', images.length);
    console.log('Sample images:', images.slice(0, 20));

    // Extract fonts
    const fontRegex = /https:\/\/fonts\.googleapis\.com\/css2\?[^"']+/gi;
    const fonts = html.match(fontRegex) || [];
    console.log('Fonts:', fonts);

    // Let's also check background images in style
    const bgRegex = /url\(["']?([^"')]+)["']?\)/gi;
    const bgs = [];
    while ((match = bgRegex.exec(html)) !== null) {
      bgs.push(match[1]);
    }
    console.log('Sample background images:', bgs.slice(0, 15));
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
