const http = require('http')
const {readFileSync} = require("fs")

// get all files
const homePage = readFileSync('./html/home.html')
const aboutPage = readFileSync('./html/about.html')

const server = http.createServer((req, res) => {

    console.log("user hit the server")
    

    if(req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        console.log(req.url)
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(aboutPage)
        console.log(req.url)
    }
    else{
        res.writeHead(405, {'content-type':'text/html'})
        res.write('<h1>Content not found</h1>')
        console.log(req.url)
    }




    res.end()

})

server.listen(5000)