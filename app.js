// importing core modules
const http = require('http');
const path = require('path')

//importing npm modules
const express = require('express');
const bodyParser = require('body-parser')


// creating express() object
const app = express();

// Setting Templating engine => ejs
app.set('view engine', 'ejs')
app.set('views','views')

// importing routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const productsController = require('./controllers/error')

// body-parser
app.use(bodyParser.urlencoded({extended: false}))

// importing public folder
app.use(express.static(path.join(__dirname,'public')))

// routing
app.use('/admin',adminRoutes)
app.use(shopRoutes)

// setting a route to 404.ejs
app.use('/', productsController.get404)

// event listener
app.listen(3000)



