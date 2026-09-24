const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'assets', 'outlets');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, filename) {
  return new Promise((resolve) => {
    const dest = path.join(dir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = 'https://fullrburgers.lk' + loc;
        return download(loc, filename).then(resolve);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`Downloaded ${filename} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Failed ${filename}:`, err.message);
      resolve(false);
    });
  });
}

const list = [
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/crescat-1024x683.jpg', file: 'crescat.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/welisara-1024x683.jpg', file: 'welisara.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/mount_lavinia-1024x683.jpg', file: 'mount_lavinia.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/maharagama-1024x683.jpg', file: 'maharagama.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/colombo_05-scaled.jpg', file: 'colombo_05.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/09/281bcf03-ea95-49fa-a7c1-84484236f46d-scaled.jpg', file: 'nawala.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_5236-scaled.jpg', file: 'pita_kotte.jpg' },
  { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Image-Coming-Soon.png', file: 'coming_soon.png' },
];

async function run() {
  for (const item of list) {
    await download(item.url, item.file);
  }
  console.log('All outlet photos downloaded!');
}

run();
