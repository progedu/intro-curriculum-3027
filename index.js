'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
