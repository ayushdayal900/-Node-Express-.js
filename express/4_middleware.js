const express = require('express')
const app = express()
const [authorize,logger] = require('../middleware_functions')
const morgan = require('morgan')

// middleware
// req => middleware => res


// send middleware in app.use() method........sequence matters
// for all routes : app.use(logger)

// for selective routes
app.use([authorize,logger])

// provide time in ms
// app.use(morgan('tiny'))


app.get('/',(req, res)=>{
    res.send('Home')
})

app.get('/about',(req, res)=>{
    res.send('About')
})

app.get('/api/products',(req, res)=>{
    res.send('Products')
})

app.get('/api/items',(req, res)=>{
    console.log(req.user)
    res.send('Items')
})



app.listen(5000, ()=>{
    console.log("app is running at port 5000")
})

