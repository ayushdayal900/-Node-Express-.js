const express = require('express')
const path = require('path')
const app = express()

// app.get
// app.put
// app.post
// app.delete
// app.all
// app.use
// app.listen


// no need to setup path for every file like we did in 1_http (/style.css)
// we just need to use that folder by app.use(express.static(path)) method
// all the static resources assigned quickly
app.use(express.static('D:/Projects/node_express_fcc/nav_bar/public'))

// app.get('/', (req,res)=>{
    // res.status(200).send("<h1>Home Page</h1>")
    // res.sendFile(path.resolve('D:/Projects/node_express_fcc/nav_bar/index.html'))
    // adding index.html to static assests (SSR)
// })

app.get('/about', (req,res)=>{
    res.status(200).send("<h1>About Page</h1>")
})


app.use((req, res) => {
    res.status(404).send('<h1>404 - Not Found</h1>');
});



app.listen(5000, () =>{
    console.log('server is listning on port 5000...')
})