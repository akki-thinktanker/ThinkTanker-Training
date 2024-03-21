const fs = require("fs");
const dirPath = __dirname;

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require('morgan')
const server = express();

// server.get("/", (req, res) => {
//   res.status(201).send("hello");
//   // res.sendFile(__dirname + '/index.html')

//   // res.sendStatus(404)

//   res.json(products);
// });

// Middleware
// this middleware will run everytime

// bodyParser
server.use(express.json());
// server.use(express.urlencoded());

server.use(morgan("default"));
server.use(express.static("public"));

// server.use((req, res, next) => {
//   console.log(
//     req.get("User-Agent"),
//     new Date(),
//     req.method,
//     req.ip,
//     req.hostname
//   );
//   next();
// });

const auth = (req, res, next) => {
  // console.log(req.query.password)

//   if (req.body.password == "12345678") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }

    next()
};

// API - End Point - Route
server.get("/product/:id", auth, (req, res) => {
    console.log(req.params)
  res.json({ type: "GET" });
});
server.post("/", auth, (req, res) => {
  res.json({ type: "POST" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080, () => {
  console.log(`Server started on 8080`);
});
