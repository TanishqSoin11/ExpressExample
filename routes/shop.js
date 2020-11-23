// importing core modules
const path = require('path')

// importing express
const express = require('express')

const productsController = require('../controllers/products')

// creating an express router object 
const router = express.Router()

// / =>GET
router.get('/', productsController.getProducts)

// exports
module.exports = router
