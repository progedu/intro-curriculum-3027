'use strict';
const http = require('http');
const moment = require('moment-timezone'); //日付変換モジュール
const server = http.createServer((req, res) => {
  const path = req.url;
  const now = moment(new Date()).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');//日付取得
  console.info('アクセスされたパス ' + now + ' ' + path); //ログにも出力
  res.writeHead(200, { //ヘッダ出力
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end(now + ' ' + path); //時間とパスを返す
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});
