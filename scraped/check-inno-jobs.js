const fs = require('fs');

function cleanText(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/\s+/g, ' ').trim();
}

const inno = fs.readFileSync('innovations.html', 'utf-8');
console.log('--- INNOVATIONS HEADINGS ---');
const hInno = [...inno.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => cleanText(m[1]));
console.log(hInno);

const pInno = [...inno.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => cleanText(m[1])).filter(t => t.length > 15);
console.log('--- INNOVATIONS PARAGRAPHS ---', pInno);

const jobs = fs.readFileSync('jobs.html', 'utf-8');
console.log('--- JOBS HEADINGS ---');
const hJobs = [...jobs.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(m => cleanText(m[1]));
console.log(hJobs);
const pJobs = [...jobs.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => cleanText(m[1])).filter(t => t.length > 15);
console.log('--- JOBS PARAGRAPHS ---', pJobs);
