'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
  var path = req.url;
  res.end(path);
});
var port = 8000;
server.listen(port, function () {
  console.info('Listening on ' + port);
});