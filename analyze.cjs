const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  const sectionMatch = content.match(/<section[^>]*className="([^"]*)"/);
  const maxWMatch = content.match(/max-w-[a-z0-9-]+[^"]*/g);
  const pxMatch = content.match(/px-[a-z0-9-]+[^"]*/g);
  
  console.log(`--- ${file} ---`);
  if (sectionMatch) console.log(`SECTION: ${sectionMatch[1]}`);
  if (maxWMatch) console.log(`MAX-W: ${[...new Set(maxWMatch)].join(' | ')}`);
  if (pxMatch) console.log(`PX: ${[...new Set(pxMatch)].join(' | ')}`);
});
