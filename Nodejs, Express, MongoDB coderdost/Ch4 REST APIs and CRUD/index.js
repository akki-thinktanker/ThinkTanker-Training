const fs = require("fs");
const dirPath = __dirname;

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
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
server.use(morgan("default"));
server.use(express.static("public"));

// Products
// API ROOT, base URL, example: google.com/api/v2/

// CREATE POST /products

server.post("/", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json(req.body);
});

// READ GET /products
server.get("/products", (req, res) => {
  res.json(products);
});

// READ GET /products/:id
server.get("/products/:id", (req, res) => {
  const id = +req.params.id;

  const product = products.find((p) => p.id === id);
  res.json(product);
});

// In put method we overwrite data
// UPDATE PUT /products/:id
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;

  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });

  res.status(201).json({});
});

// UPDATE PATCH /products/:id
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;

  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });

  res.status(201).json({});
});

// In patch we don't overwrite data

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);

  res.status(201).json(product);
});

// server listening
server.listen(8080, () => {
  console.log(`Server started on 8080`);
});
