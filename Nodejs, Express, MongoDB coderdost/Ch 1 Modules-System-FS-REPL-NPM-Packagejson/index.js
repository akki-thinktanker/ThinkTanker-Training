// Common Module

const lib = require("./lib.js");
// console.log(lib.sum(4, 3), lib.diff(4, 4));

// ES module

// import { sum, sub } from "./lib.js";
// console.log(sum(5, 5), sub(5, 5));

const fs = require("fs");


const t1 = performance.now();   

// synchronously
const txt = fs.readFileSync("demo.txt", "utf-8");


// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//     console.log(txt)
// })

// console.log(lib.sum(4, 3), lib.diff(4, 4));
const t2 = performance.now();

// console.log(t2 - t1)

// console.log(txt);


const express = require('express')

const app = express()

app.listen(8080)