'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
