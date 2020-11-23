// importing core modules
const path = require('path')

// imorting express
const express = require('express')

const productsController = require('../controllers/products')

// creating an express router object
const router = express.Router()



// /admin/add-product => GET
router.get('/add-product',productsController.getAddProduct)

// /admin/add-product => POST
router.post('/product', productsController.postAddProduct)

// exports
module.exports = router