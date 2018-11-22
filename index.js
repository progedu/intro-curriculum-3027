'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type':'text/plain;charset=utf-8' //
  })
  const path = req.url;
  //正式に関数を用いない方法に変更
  res.end('echo ' + path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});