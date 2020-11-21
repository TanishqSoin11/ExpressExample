const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

const products = []

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    // console.log('in another middleware')
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})

// /admin/add-product => POST
router.post('/product',(req, res, next) =>{
    console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router
exports.products = products