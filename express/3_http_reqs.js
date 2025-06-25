const express = require('express')
const app = express()
const {products} = require('../data')
app.get('/', (req, res)=>{
    // res.json(products)
    res.send('<h1>Home Page</h1> <a href="/api/products"> Products </a>')
})


app.get('/api/products', (req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})


app.get('/api/products/:productId', (req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productId} = req.params
    const singleProduct = products.find((product)=>product.id==Number(productId))
    if(!singleProduct){
        return res.status(404).send("Product not exists.")
    }
    return res.json(singleProduct)
})


app.get('/api/products/:productId/reviews/:reviewsId', (req,res)=>{
    console.log(req.params)
    res.send("Hello world")
})


app.get('/api/v1/query', (req,res)=>{
    console.log(req.query)

    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }

    if(sortedProducts.length<1){
        // res.status(200).send("No products match your search")
        return res.status(200).json({success:true, data:[]})
    }
    return res.status(200).json(sortedProducts)
    // res.send('hello world')
})





app.listen(5000, ()=>{
    console.log('app is listning at port 5000')
})