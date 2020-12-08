'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});//onst cp = require('child_process');
//const server = http.createServer((req, res) => {
//const path = req.url;
//res.end(cp.execSync('echo ' + path));