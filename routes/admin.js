// importing core modules
const path = require("path");

// imorting express
const express = require("express");

const adminController = require("../controllers/admin");

// creating an express router object
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/product", adminController.postAddProduct);

// exports
module.exports = router;
