'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type' : 'text/html; charset=utf-8'
  });
  const path = req.url;
  const decoded = decodeURIComponent(path);
  res.end(decoded);
});
const port = 8000;
server.listen(port, () => {
  console.info(`ポート${port}番でサーバー起動`);
});