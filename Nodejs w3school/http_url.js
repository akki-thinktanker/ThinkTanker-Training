const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // will return whatever is written after domain name. like localhost:8080/summer, so it will show summer
  res.end();
}).listen(8080);