const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const pages = [
  { file: 'index.html', component: 'Home' },
  { file: 'about.html', component: 'About' },
  { file: 'capabilities.html', component: 'Services' },
  { file: 'case-studies.html', component: 'Insights' },
  { file: 'contact.html', component: 'Contact' },
  { file: 'how-we-work.html', component: 'HowWeWork' },
];

const jsxDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(jsxDir)) {
  fs.mkdirSync(jsxDir, { recursive: true });
}

function convertHtmlToJsx(html) {
  // Extract content between the end of mobile-menu and start of footer
  const startIndex = html.indexOf('</div>\r\n\r\n\r\n  <!-- ════════════');
  const footerIndex = html.indexOf('<!-- FOOTER -->');
  
  let content = html;
  if (startIndex !== -1 && footerIndex !== -1) {
    // get from the start of the first section
    const sectionStart = html.indexOf('<section', startIndex);
    content = html.substring(sectionStart, footerIndex);
  } else {
    // just try to extract anything after nav and before footer, or body
    const bodyStart = html.indexOf('<body>');
    const bodyEnd = html.indexOf('</body>');
    content = html.substring(bodyStart + 6, bodyEnd);
  }

  // Common React replacements
  let jsx = content
    .replace(/class="/g, 'className="')
    .replace(/for="/g, 'htmlFor="')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-dashoffset/g, 'strokeDashoffset')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}')
    .replace(/<img(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<img${p1} />`;
    })
    .replace(/<br(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<br${p1} />`;
    })
    .replace(/<hr(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<hr${p1} />`;
    })
    .replace(/<input(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<input${p1} />`;
    })
    .replace(/<meta(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<meta${p1} />`;
    })
    .replace(/<link(.*?)>/g, (match, p1) => {
      if (p1.endsWith('/')) return match;
      return `<link${p1} />`;
    })
    .replace(/style="([^"]*)"/g, (match, p1) => {
       // extremely naive style converter, but most files don't have many inline styles except footer
       return 'style={{}}';
    });
    
  return `<>\n${jsx}\n</>`;
}

pages.forEach(page => {
  const htmlPath = path.join(srcDir, page.file);
  if (!fs.existsSync(htmlPath)) return;
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  const jsxContent = convertHtmlToJsx(html);
  
  const componentCode = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst ${page.component} = () => {\n  return (\n    ${jsxContent}\n  );\n};\n\nexport default ${page.component};\n`;
  
  fs.writeFileSync(path.join(jsxDir, `${page.component}.jsx`), componentCode);
  console.log(`Converted ${page.file} to ${page.component}.jsx`);
});
