const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9000;
const OUT_DIR = path.join(__dirname, 'out');

const server = http.createServer((req, res) => {
  let filePath = path.join(OUT_DIR, req.url);

  // Remove /Portfolio prefix for local testing
  let cleanUrl = req.url;
  if (cleanUrl.startsWith('/Portfolio/')) {
    cleanUrl = cleanUrl.slice(10);
  } else if (cleanUrl === '/Portfolio' || cleanUrl === '/Portfolio/') {
    cleanUrl = '/';
  }

  if (cleanUrl === '/') {
    filePath = path.join(OUT_DIR, 'index.html');
  } else {
    filePath = path.join(OUT_DIR, cleanUrl);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentTypeMap = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
  };

  const contentType = contentTypeMap[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Not Found</h1>');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Serving files from ${OUT_DIR}`);
  console.log(`Note: /Portfolio/ paths are being rewritten to / for local testing`);
});

