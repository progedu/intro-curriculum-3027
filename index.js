'use strict';
const http = require('http');
const cp = require('child_process');
const server = http.createServer((req, res) => {
  const path = req.url;
  res.end(path);//execSync のような OS コマンドを実行する関数はなるべく使わないことが望ましい
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});