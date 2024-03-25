const express = require("express");
const productController = require("../controller/product"); // controller which defines what to do on which route

const router = express.Router(); // router provided by express
router
  .post("/", productController.createProduct) // call createProduct function from productController (which is exported from controller folder for products)
  .get("/ssr", productController.getAllProductsSSR)
  .get("/add", productController.getAddForm)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.routes = router; // export routes variable which contains value of router.
