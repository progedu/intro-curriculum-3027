// OS コマンドインジェクション脆弱性のある HTTP サーバーを、この脆弱性がないように修正してみましょう。
'use strict';
const http = require('http');
// const cp = require('child_process');//削除
const server = http.createServer((req, res) => {
  const path = req.url;
  // res.end(cp.execSync('echo ' + path));//削除
  res.end(path);//追加
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

// execSync のような OS コマンドを実行する関数はなるべく使わないことが望ましいです。