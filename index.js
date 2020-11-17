'use strict';
const http = require('http');
const cp = require('child_process');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('このリクエストのパスは' + path + 'です。\r' + 'さらにコマンドラインでdateを入力：' + cp.execSync('date'));
  // res.end(cp.execSync('echo ' + path));
});

const port = 8000;
server.listen(port, () => {
  console.info(`Listen on ${port}`);
});