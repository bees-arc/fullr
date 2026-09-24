const fs = require('fs');

const html = fs.readFileSync('homepage.html', 'utf-8');

// Look for data-settings
const dataSettingsMatches = [...html.matchAll(/data-settings="([^"]+)"/g)];
console.log('--- DATA SETTINGS WITH VIDEO ---');
dataSettingsMatches.forEach(m => {
  const decoded = m[1].replace(/&quot;/g, '"');
  if (decoded.includes('video') || decoded.includes('youtube') || decoded.includes('mp4')) {
    console.log(decoded);
  }
});

// Look for all urls in html containing mp4, webm, youtube, vimeo
const videoLinks = html.match(/(https?:[^\s"'<>]*(?:mp4|webm|youtube|youtu\.be|vimeo)[^\s"'<>]*)/gi) || [];
console.log('--- VIDEO LINKS ---', videoLinks);

// Look for all uploads urls
const uploads = [...new Set(html.match(/https:\/\/fullrburgers\.lk\/wp-content\/uploads\/[^\s"')]+/g) || [])];
console.log('--- ALL UPLOAD URLS (' + uploads.length + ') ---');
uploads.forEach(u => console.log(u));

// Look for fonts
const fonts = [...new Set(html.match(/font-family:[^;}]+/g) || [])];
console.log('--- FONT FAMILIES ---', fonts.slice(0, 10));

// Check color codes (#hex, rgb, hsl)
const colors = [...new Set(html.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g) || [])];
console.log('--- COLORS ---', colors);
