require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/twitter", (req, res) => {
  res.send("<h2>akashnaitwt</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
