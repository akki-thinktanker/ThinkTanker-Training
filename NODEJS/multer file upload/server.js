const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  console.log(`Size: ${req.file.size / 1024000} MB`);
  res.send("Single file upload successful.");
});

app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Multiple files uploaded successful");
});

app.listen(5000);
