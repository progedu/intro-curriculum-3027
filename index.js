'use strict';
const http = require('http');
const cp = require('child_process');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end("<h1>あなたのリクエストしたパスは" + path +"です。</h1>");
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});