require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// bodyParser
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/products", productRouter.routes);
server.use("/users", userRouter.routes);

// MVC - Model View Controller

// server listening
server.listen(process.env.PORT, () => {
  console.log(`Server started on 8080`);
});
