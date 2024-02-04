const http = require("http");
const dt = require("./dateModule");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // http header
    // res.write(`${http.IncomingMessage}`) // object
    res.write(`${req.url}`)
    res.write(`Write anything here but you can't write anything after res.end().`)
    res.write(`see I wrote second line using write. \n`)
    res.end(`Date: ${dt.myDateTime()}`); //end the response
  })
  .listen(8080);
