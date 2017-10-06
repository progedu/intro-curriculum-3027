'use strict';
const http = require('http');
const sabasushi = http.createServer((req, res) => {
  const path = req.url;
  res.end(path);
});
const port = 8000;
sabasushi.listen(port, () => {
  console.info('Listening on ' + port);
});