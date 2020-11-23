const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    // rendering add-product.ejs for incoming requests
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct = (req, res, next) =>{
    console.log(req.body)
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}
// passing adminData.products to shop.ejs
    // and rendering shop.ejs for incoming requests
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(products => {
        res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
     })
    })
    
}

