const express = require("express");
const multer = require("multer");
const fs = require('fs')

const UserController = require("../controller/user.controller");

const userRouter = express.Router();

// creating storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
  
      // creating folder if not exist
      if (!fs.existsSync("./uploads")) {
        fs.mkdirSync("./uploads");
      }
    },
  });
  
  //   multer upload object
  const upload = multer({ storage });
  

// creating routes
userRouter
  .route("/users")
  .get(UserController.getUsers)
  .post(upload.single("avatar"), UserController.createUser)
  .delete(UserController.deleteAllUsers);

userRouter
  .route("/users/:id")
  .get(UserController.getUser)
  .patch(upload.single("avatar"), UserController.updateUser)
  .delete(UserController.deleteUser);


module.exports = userRouter;

// // creating routes
// app.get("/users", UserController.getUsers);
// app.get("/users/:id", UserController.getUser);
// // app.post("/users", createUser, upload.single("avatar"))
// app.post("/users", upload.single("avatar"), UserController.createUser);
// // app.post("/users", createUser,() => upload.single('avatar')() )
// // app.route('/users').post(createUser).post(() => upload.single('avatar')())
// app.patch("/users/:id", upload.single('avatar'), UserController.updateUser);
// app.delete("/users/:id", UserController.deleteUser);
// app.delete("/users", UserController.deleteAllUsers);
