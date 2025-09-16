const express = require("express");
const router = express.Router();
const {
  getAllStaticProducts,
  getAllProducts,
} = require("../controllers/products.js");
router.route("/").get(getAllProducts);
router.route("/static").get(getAllStaticProducts);

module.exports = router;
