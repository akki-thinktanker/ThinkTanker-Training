const express = require("express");
const authController = require("../controllers/authController");
const validationMiddleware = require('../middlewares/validationMiddleware')
const upload = require("../utils/multer");

const authRouter = express.Router();

authRouter.post(
    "/register",
    upload.single('avatar'),
    validationMiddleware("registerUser"),
    authController.registerUser
  );
  
  authRouter.post(
    "/login",
    validationMiddleware("loginUser"),
    authController.loginUser
  );
  authRouter.get("/logout", authController.logoutUser);
  authRouter.post("/forgotpassword", authController.forgotPassword);
  authRouter.post("/resetpassword/:token", authController.resetPassword);
  

module.exports = authRouter;
