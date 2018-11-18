'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end(path);
});
const port = 8001;
server.listen(port, () => {
  console.info('Listening on ' + port);
});