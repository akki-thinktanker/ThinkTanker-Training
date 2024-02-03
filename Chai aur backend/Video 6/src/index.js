// require('dotenv').config({path: './env'})
// This is an old approach

// new and usable approach
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// imported this
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

// this is async function so we will get a promise in return which
// we can handle using .then() and .catch()

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed !!!", err);
  });

///////////////////////////////////////////////
// 1st approach

/*
import express from 'express'
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on('error', (error) => {
        console.log("Error:", error)
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on PORT ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
})();
*/
