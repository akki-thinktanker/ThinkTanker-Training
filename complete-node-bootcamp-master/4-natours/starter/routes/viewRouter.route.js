const express = require('express')
const viewsController = require('../controllers/viewsController.controller')
const authController = require('../controllers/authController.controller')

const router = express.Router()

  router.use(authController.isLoggedIn)


  router.get('/', viewsController.getOverview)
  router.get('/tour/:slug',viewsController.getTour)
  router.get('/login', viewsController.getLoginForm)

module.exports = router;