const fs = require('fs');

const css = fs.readFileSync('scraped/post-5230.css', 'utf-8');

// Find all rules with font-size or color in post-5230
const rules = css.split('}');
rules.forEach(r => {
  if (r.includes('font-size') || r.includes('font-family') || r.includes('color:')) {
    const sel = r.split('{')[0].trim();
    const body = r.split('{')[1]?.trim();
    if (sel.includes('elementor-element-') && (body?.includes('font-size') || body?.includes('color:'))) {
      console.log(sel, '==>', body);
    }
  }
});
