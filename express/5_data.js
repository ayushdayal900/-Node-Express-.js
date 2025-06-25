////////////////////////////////////////////////
//////////////////  BUGS IN THIS FILE  /////////
////////////////////////////////////////////////









const express = require('express')
const app = express()
const people = require('../routes/people')
const auth = require('../routes/auth')


// static assets
app.use(express.static('D:/Projects/node_express_fcc/methods-public'))

// parse from data
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)



app.listen(5000, ()=>{
    console.log('app is runnnig at the port 5000...')
})