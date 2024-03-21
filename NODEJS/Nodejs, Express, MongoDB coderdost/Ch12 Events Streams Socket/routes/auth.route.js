const authController = require('../controller/auth.controller')
const express = require('express');
const router = express.Router();

router.post('/signUp', authController.signUp)
router.post('/login', authController.login)

exports.router = router;  