require("dotenv").config();
const express = require("express");
var nodemailer = require("nodemailer");

const app = express();

app.get("/", (req, res) => {
  res.end("hello world");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

var mailOptions = {
  from: process.env.GOOGLE_EMAIL,
  to: "akashnai658@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

app.get("/mail", (req, res) => {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(8080, () => {
  console.log("server listening onn 8080");
});
