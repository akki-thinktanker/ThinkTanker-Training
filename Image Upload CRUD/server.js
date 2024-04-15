const express = require("express");

const app = express();
const connectDB = require('./DB/connectDB')

const userRouter = require('./routes/user.route')


// middleware
app.use(express.urlencoded({ extended: true }));
// app.use(express.urlencoded())
// app.use(express.json());

// connection to database
connectDB();


// routes
app.use('/', userRouter)

app.listen(5000, () => {
  console.log("server running on port 5000");
});
