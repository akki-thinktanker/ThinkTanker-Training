const http = require("http");
const uc = require("upper-case");

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write(uc.upperCase("Hello world"))
  res.end()
}).listen(8080)
