'use strict';
const http = require('http');
//const cp = require('child_process');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8' });
  const path = req.url;
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
