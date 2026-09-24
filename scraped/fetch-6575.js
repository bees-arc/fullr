const https = require('https');

https.get('https://fullrburgers.lk/wp-content/uploads/elementor/css/post-6575.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('post-6575 length:', data.length);
    const matches = data.match(/\.elementor-element-6c0c161[^{]*\{([^}]+)\}/gi) || [];
    console.log('Matches:', matches);
  });
});
