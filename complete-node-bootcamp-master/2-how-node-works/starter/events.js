const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("A new sale is made");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Akash Nai");
});

myEmitter.on("newSale", (stock) => console.log(`${stock} left in stock`));

myEmitter.emit("newSale", 20);

///////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  console.log(req.url)
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request😊");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
