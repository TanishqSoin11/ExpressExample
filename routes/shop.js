// importing core modules
const path = require('path')

// importing express
const express = require('express')

// importing util
const rootDir = require('../util/path')

// importing adminData from routes
const adminData = require('./admin')

// creating an express router object 
const router = express.Router()

// / =>GET
router.get('/',(req, res, next) => {
    // passing adminData.products to shop.pug 
    // and rendering shop.pug for incoming requests
    const products = adminData.products
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'})
})

// exports
module.exports = router
