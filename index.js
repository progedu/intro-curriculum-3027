'use strict';
let http = require('http');
let cp = require('child_process');
let server = http.createServer((req, res) => {
  let path = req.url;
  res.end(cp.execSync('echo ' + path));
});
let port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});