const multer = require("multer");
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);

    // creating folder if not exist
    if (!fs.existsSync("./uploads")) {
      fs.mkdirSync("./uploads");
    }
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
