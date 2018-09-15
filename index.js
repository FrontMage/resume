const markdownpdf = require('markdown-pdf');

markdownpdf()
  .from('./README.md')
  .to('./resume-chinese.pdf', function() {
    console.log('Done Chinese version');
  });

markdownpdf()
  .from('./resume.md')
  .to('./resume.pdf', function() {
    console.log('Done English version');
  });
