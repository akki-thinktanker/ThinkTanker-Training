const express = require("express");
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/tourController.controller");
const authController = require("./../controllers/authController.controller");
const reviewRouter = require('../routes/reviewRoutes.route')
const router = express.Router();



// POST /tour/234fdsa4/reviews
// GET /tour/234fdsa4/reviews

router.use('/:tourId/reviews', reviewRouter)



router.route("/top-5-cheap").get(aliasTopTour, getAllTours);

router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/")
  .get(authController.protect, getAllTours)
  .post(createTour);
  
router
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    deleteTour
  );

module.exports = router;
  