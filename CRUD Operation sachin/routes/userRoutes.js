const express = require("express");
const authMiddlware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const userController = require("../controllers/userController");


const userRouter = express.Router();

// admin routes
userRouter
  .route("/")
  .get(
    authMiddlware.protect,
    roleMiddleware.restrictTo("admin"),
    userController.getUsers
  );

userRouter
  .route("/:id")
  .get(
    authMiddlware.protect,
    roleMiddleware.restrictTo("admin"),
    userController.getUser
  )
  .patch(
    authMiddlware.protect,
    userController.updateUser
  )
  .delete(
    authMiddlware.protect,
    roleMiddleware.restrictTo("admin"),
    userController.deleteUser
  );

module.exports = userRouter;
