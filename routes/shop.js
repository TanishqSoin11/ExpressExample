// importing core modules
const path = require("path");

// importing express
const express = require("express");

const shopController = require("../controllers/shop");

// creating an express router object
const router = express.Router();

// / =>GET

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

// exports
module.exports = router;
