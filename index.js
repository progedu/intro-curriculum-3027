// 厳格モード
'use strict';
// httpモジュール呼び出し
const http = require('http');
// child_processモジュール呼び出し
// const cp = require('child_process');
/**
 * アクセスしたURLを表示する関数
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 */
let showPathFunc = function (req, res) {
    // アクセス先のURL
    const path = req.url;
    // child_processを利用して、アクセス先URLを表示する
    // (OSコマンド・インジェクションの危険性がある)
    // res.end(cp.execSync('echo ' + path));
    // アクセス先のURLを書き出して終了
    res.end(path);
}
/** 
 * サーバーを作成する
 * 第一引数：サーバーにアクセスが有った時に実行する関数
*/
const server = http.createServer(showPathFunc);
// ポート番号
const port = 8000;
/** 
 * 標準出力にサーバーが起動した旨と使用するポート番号を書き出す関数
*/
let logServerListeningFunc = function () {
    console.info('Listening on ' + port);
}
/**
 * サーバーを起動する
 * 第一引数：ポート番号
 * 第二引数：サーバー起動時に実行する関数
 */
server.listen(port, logServerListeningFunc);
