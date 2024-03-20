const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
} = require("../controllers/userController.controller");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
  restrictTo,
} = require("../controllers/authController.controller");
const reviewController = require('../controllers/reviewController.controller')

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

router.patch("/updateMyPassword", protect, updatePassword);

router.patch('/updateMe', protect, updateMe)
router.delete('/deleteMe', protect, deleteMe)

// User routes
router.route("/").get(getAllUsers)
// .post(createUser); // commented create user in userController
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);



module.exports = router;
