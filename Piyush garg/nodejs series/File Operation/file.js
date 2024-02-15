const fs = require("fs");

const os = require('os')
console.log(os.cpus().length)

// // synchronous call
// // fs.writeFileSync("./test.txt", "hey there"); // this will overwrite content

// // async
// fs.writeFile("./test.txt", "hey there async", (err) => console.log(err)); // this is asynchronous

// // readfile

console.log("1");
const res = fs.readFileSync("./contacts.txt", "utf-8"); // synchronous
// const resAsync = fs.readFile("./contacts.txt", "utf-8", (err, res) => {
//   // const resAsync = fs.readFile("./contactss.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(res);
//   }
// }); // asynchronous

console.log(res);
console.log("2");

// fs.appendFileSync("test.txt", `${Date.now()} Hey there \n`); // append data to file
// fs.cpSync("test.txt", "copy.txt"); // copy file

// fs.unlinkSync("copy.txt"); // delete file
// console.log(fs.statSync("./test.txt")); // stats about file

// fs.mkdirSync("myDocs/"); // will create a directory
// fs.mkdirSync("myDocs1/a/b/c/", { recursive: true }); // make directory recursively
