'use strict';
const http = require('http');
const cp = require('child_process');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end('echo ' + path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});