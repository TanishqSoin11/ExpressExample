// importing core modules
const http = require('http');
const path = require('path')

//importing npm modules
const express = require('express');
const bodyParser = require('body-parser')

// importing path.js
const rootDir= require('./util/path')

// creating express() object
const app = express();

// Setting Templating engine => pug
app.set('view engine', 'pug')
app.set('views','views')

// importing routes
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop');

// body-parser
app.use(bodyParser.urlencoded({extended: false}))

// importing public folder
app.use(express.static(path.join(__dirname,'public')))

// routing
app.use('/admin',adminData.routes)
app.use(shopRoutes)

// setting a route to 404.pug
app.use('/',(req, res, next)=>{
    res.status(404).render('404')
})

// event listener
app.listen(3000)



