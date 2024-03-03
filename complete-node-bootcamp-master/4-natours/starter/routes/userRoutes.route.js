const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController.controller');
const {signup, login, forgotPassword, resetPassword} = require('../controllers/authController.controller')

const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)


router.post('/forgotPassword', forgotPassword)
router.post('/resetPassword', resetPassword)

// User routes
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
