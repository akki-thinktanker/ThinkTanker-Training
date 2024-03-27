const express = require("express");
const multer = require('multer')
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = require("../controllers/userController.controller");
const {
  signup,
  login,
  logout,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
  restrictTo,
} = require("../controllers/authController.controller");
const reviewController = require("../controllers/reviewController.controller");

const upload = multer()

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get('/logout', logout)
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);

router.get("/me", getMe, getUser);
router.patch("/updateMe", upload.single('photo'), updateMe);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin"));

// User routes
router.route("/").get(getAllUsers).post(createUser);
// .post(createUser); // commented create user in userController
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
