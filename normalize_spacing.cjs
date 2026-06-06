const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

if (fs.existsSync(componentsDir)) {
  const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

  for (const file of files) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Normalize Section Vertical Padding
    content = content.replace(/py-24 md:py-32/g, 'py-16 lg:py-20');
    content = content.replace(/py-20 sm:px-6 lg:px-8 lg:py-32/g, 'py-16 sm:px-6 lg:px-8 lg:py-20');
    content = content.replace(/pt-24 pb-20/g, 'pt-24 pb-16'); // Hero

    // Normalize Margin Bottom for Section Headings
    content = content.replace(/mb-16 md:mb-20/g, 'mb-10 lg:mb-14');
    content = content.replace(/mb-16 text-center/g, 'mb-10 lg:mb-14 text-center');

    // Normalize Grid / Flex Gaps
    content = content.replace(/gap-12 lg:gap-16/g, 'gap-8 lg:gap-12');
    
    // Add tighter tracking to headings for professional look
    content = content.replace(/text-3xl sm:text-4xl md:text-5xl font-bold/g, 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight');
    content = content.replace(/text-3xl font-bold text-white sm:text-4xl lg:text-5xl/g, 'text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight');
    
    // Hero heading tracking
    content = content.replace(/font-extrabold leading-tight tracking-tight/g, 'font-extrabold leading-tight tracking-tighter');

    fs.writeFileSync(filePath, content, 'utf-8');
  }
  console.log('Normalized spacing in components.');
} else {
  console.log('Components directory not found.');
}
