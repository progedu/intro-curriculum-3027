'use strict';
let http = require('http');
let server = http.createServer((req, res) => {
  let path = req.url;
  res.end(path);
});
let port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});