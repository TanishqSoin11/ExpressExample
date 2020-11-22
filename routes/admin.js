// importing core modules
const path = require('path')

// imorting express
const express = require('express')

// importing util
const rootDir = require('../util/path')

// creating an express router object
const router = express.Router()

// array object to store added products
const products = []

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // rendering add-product.pug for incoming requests
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

// /admin/add-product => POST
router.post('/product',(req, res, next) =>{
    console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/')
})

// exports
exports.routes = router
exports.products = products