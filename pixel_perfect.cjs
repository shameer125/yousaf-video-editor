const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove all px-* from <section> tags
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+px-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+sm:px-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+md:px-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+lg:px-[a-z0-9-]+)+/g, '$1');
  
  // 2. Standardize vertical padding on <section> to py-20 lg:py-28
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+py-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+md:py-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className="[^"]*)(\s+lg:py-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(<section[^>]*className=")([^"]*)(")/g, (match, p1, p2, p3) => {
    if (!p2.includes('py-20')) {
      return `${p1}${p2} py-20 lg:py-28${p3}`;
    }
    return match;
  });

  // 3. Fix max-w-* divs to ALWAYS have px-4 sm:px-6 lg:px-8 
  // First, remove existing px-* from max-w-*
  content = content.replace(/(max-w-[a-z0-9-]+[^"]*)(\s+px-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(max-w-[a-z0-9-]+[^"]*)(\s+sm:px-[a-z0-9-]+)+/g, '$1');
  content = content.replace(/(max-w-[a-z0-9-]+[^"]*)(\s+lg:px-[a-z0-9-]+)+/g, '$1');
  // Then append standard padding if it's the main container (usually has mx-auto)
  content = content.replace(/(max-w-[a-z0-9-]+\s+mx-auto)/g, '$1 w-full px-6 md:px-12 lg:px-20');

  // Ensure double spaces are cleaned up
  content = content.replace(/\s{2,}/g, ' ');
  content = content.replace(/ \)/g, ')');
  content = content.replace(/ "/g, '"');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Pixel perfect standard applied.');
