require("dotenv").config();
const express = require("express"); // for ease of backend, framework
const morgan = require("morgan"); // for logging of data response
const mongoose = require("mongoose"); // for ODM, creating of schema and models

const cors = require("cors");
const server = express(); // server is variable via which we can do things related to req response, which we got from express.
const productRouter = require("./routes/product"); // what to do while made a request over urls for products
const userRouter = require("./routes/user"); // what to do while made a request over urls for users

// db connection
// db connection is fast but it will still take slight of time, so we made it async

main().catch((err) => console.log(err)); // if some issue occur during connection of db it will throw error
async function main() {
  //async function so it will wait for dbserver to connect, if failed it will throw error object
  // await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce"); // connecting to localdb server using mongoose
  await mongoose.connect(process.env.MONGO_URL); // connecting to localdb server using mongoose
  console.log("database connected"); //if the above line is successfully executed then this line will print in console
}

// bodyParser

// Middlewares - Go thru me before loading a site
server.use(cors()); // for not stopping you from accessing other links
server.use(express.json()); // for parsing json
server.use(morgan("default")); // "default" means log some basic info from server
server.use(express.static(process.env.PUBLIC_DIR)); // set static directory for serving frontend, express provides this facility of serving static files
server.use("/products", productRouter.routes); // use /products route to go thru all routes while using productRouter, from routes folder
server.use("/users", userRouter.routes); // use /users routes to go thru all routes while using userRouter, from routes folder

// server listening
server.listen(process.env.PORT, () => {
  //server listens on some port, and then there is callback function which will be executed
  console.log(`Server started on 8080`);
});
