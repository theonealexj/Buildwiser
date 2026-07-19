import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find where the footer starts
  const footerStart = content.indexOf('{/* FOOTER */}');
  const footerStart2 = content.indexOf('<footer');
  
  let cutIndex = -1;
  if (footerStart !== -1) {
    cutIndex = footerStart;
  } else if (footerStart2 !== -1) {
    cutIndex = footerStart2;
  }
  
  if (cutIndex !== -1) {
    // Cut off everything from the footer onwards, and close the fragment and component
    content = content.substring(0, cutIndex) + '\n</>\n  );\n};\n\nexport default ' + file.replace('.jsx', '') + ';\n';
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up ${file}`);
  }
});
