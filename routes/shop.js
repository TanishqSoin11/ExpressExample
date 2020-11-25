// importing core modules
const path = require('path')

// importing express
const express = require('express')

const shopController = require('../controllers/shop')

// creating an express router object 
const router = express.Router()

// / =>GET


router.get('/product-list', shopController.getProducts)

router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)

router.get('/', shopController.getIndex)

// exports
module.exports = router
