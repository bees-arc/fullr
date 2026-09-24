const https = require('https');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve) => {
    const dest = path.join(assetsDir, filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${filename}`);
      return resolve(true);
    }
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
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

async function run() {
  const assets = [
    // Video
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/06/fullr.mp4', file: 'fullr-hero.mp4' },
    // Logos
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/06/logo-burgers-white.svg', file: 'logo-burgers-white.svg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/logo-112.png', file: 'logo-112.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/cropped-fullr-192x192.jpg', file: 'favicon-fullr.jpg' },
    // Badges / SVGs
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/spicy-f.svg', file: 'spicy-f.svg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/cheese_cr-f.svg', file: 'cheese_cr-f.svg' },
    // Featured burgers
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Desi-Chick-1000x900.png', file: 'Desi-Chick.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Dragon-Bait-1000x900.png', file: 'Dragon-Bait.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Major-General-1000x900.png', file: 'Major-General.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Beef-Me-Up-Scotty-1-1000x900.png', file: 'Beef-Me-Up-Scotty.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Meatless-Master-1-1000x900.png', file: 'Meatless-Master.png' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2025/10/Dragon-Bait-2.jpg', file: 'Dragon-Bait-banner.jpg' },
    // Digital Menus
    { url: 'https://fullrburgers.lk/wp-content/uploads/2026/07/Digital-Menu-July-2026-Horizontal_01.jpg', file: 'Digital-Menu-01.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2026/07/Digital-Menu-July-2026-Horizontal_02.jpg', file: 'Digital-Menu-02.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2026/07/Digital-Menu-July-2026-Horizontal_03.jpg', file: 'Digital-Menu-03.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2026/07/Promo-FB-Website-July-AW-1.png', file: 'Promo-July.png' },
    // Innovations
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/12/Crispy-Kringle-1024x1024.jpg', file: 'Crispy-Kringle.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/12/The-Grinch-1024x1024.jpg', file: 'The-Grinch.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/12/Mistletoe-Munch-1024x1024.jpg', file: 'Mistletoe-Munch.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_9271-1024x1024.jpg', file: 'Grim-Reaper.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_9263-1024x1024.jpg', file: 'Mr-Hyde.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_9279-1-1024x1024.jpg', file: 'Vampire-Bites.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_8288-1024x1024.jpg', file: 'Mighty-Marmite.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_8215-1024x1024.jpg', file: 'Marmite-Chook.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_8304-1024x1024.jpg', file: 'Cheesy-Marmite.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_8296-1024x1024.jpg', file: 'Marmite-Mayo-Drumlets.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/10/IMG_8242-1024x1024.jpg', file: 'Call-Me-Maybe.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/11/IMG_5718-1024x1024.jpg', file: 'Weapon-X.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/11/IMG_5682-Edit-1-1024x1024.jpg', file: 'The-Merc.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Beef_Brisket_Sliders-1024x1024.jpg', file: 'Beef-Brisket-Sliders.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Chicken_Shawarma_Sliders-1024x1024.jpg', file: 'Chicken-Shawarma-Sliders.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Gojira-1024x1024.jpg', file: 'Gojira.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Kong-1024x1024.jpg', file: 'Kong.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Christmas_Cracker-1024x1024.jpg', file: 'Christmas-Cracker.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Royal_Spirit-1024x1024.jpg', file: 'Royal-Spirit.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Thomian_Grit-1024x1024.jpg', file: 'Thomian-Grit.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Love_Bite-1024x1024.jpg', file: 'Love-Bite.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Loaded_Fries-1024x1024.jpg', file: 'Loaded-Fries.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Original_Crispy_Chicken_Drumlets-1024x1024.jpg', file: 'Original-Drumlets.jpg' },
    { url: 'https://fullrburgers.lk/wp-content/uploads/2024/07/Korean_Crispy_Chicken_Drumlets-1024x1024.jpg', file: 'Korean-Drumlets.jpg' }
  ];

  console.log(`Starting download of ${assets.length} assets...`);
  for (const item of assets) {
    await download(item.url, item.file);
  }
  console.log('All downloads finished!');
}

run();
