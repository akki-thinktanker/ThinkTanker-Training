const express = require("express");
const reviewController = require("./../controllers/reviewController.controller");
const authController = require("./../controllers/authController.controller");

const router = express.Router({ mergeParams: true });

// POST /tour/234fdsa4/reviews
// GET /tour/23432343/reviews
// POST /reviews

router
  .route("/")
  .get(authController.protect, reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo("user"),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route("/:id")
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
