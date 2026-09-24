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
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = 'https://fullrburgers.lk' + loc;
        return resolve(fetchUrl(loc));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const pages = [
  { name: 'menu', url: 'https://fullrburgers.lk/fullrs-menu/' },
  { name: 'about', url: 'https://fullrburgers.lk/about-us/' },
  { name: 'innovations', url: 'https://fullrburgers.lk/fullrs-innovations/' },
  { name: 'locate', url: 'https://fullrburgers.lk/locate-fullrs/' },
  { name: 'jobs', url: 'https://fullrburgers.lk/job-openings/' }
];

async function run() {
  const allData = {};
  for (const page of pages) {
    console.log('Fetching', page.name, page.url);
    try {
      const html = await fetchUrl(page.url);
      fs.writeFileSync(`${page.name}.html`, html, 'utf-8');
      
      const uploads = [...new Set(html.match(/https:\/\/fullrburgers\.lk\/wp-content\/uploads\/[^\s"')]+/g) || [])];
      const videoLinks = html.match(/(https?:[^\s"'<>]*(?:mp4|webm|youtube|youtu\.be|vimeo)[^\s"'<>]*)/gi) || [];
      
      allData[page.name] = {
        uploads,
        videoLinks,
        length: html.length
      };
      console.log(`Saved ${page.name}, uploads: ${uploads.length}, videos: ${videoLinks.length}`);
    } catch (e) {
      console.error('Failed to fetch', page.name, e.message);
    }
  }
  fs.writeFileSync('all-pages-summary.json', JSON.stringify(allData, null, 2), 'utf-8');
}

run();
