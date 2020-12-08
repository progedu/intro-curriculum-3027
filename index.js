'use strict';
const http = require('http');
// const cp = require('child_process');　プロセス削除
const server = http.createServer((req, res) => {
  const path = req.url;
//res.end(cp.execSync('echo ' + path));プロセスが消えたのでHTTPレスポンスに返すechoコマンドいらない。
  res.end(path);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});