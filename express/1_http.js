const http = require('http')
const {readFileSync} = require("fs")

// get all files
const aboutPage = readFileSync('./html/about.html')

const homePage = readFileSync('./nav_bar/index.html')
const homeStyle = readFileSync('./nav_bar/style.css')
const browser_app = readFileSync('./nav_bar/browser-app.js')



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

    else if(req.url === '/style.css'){
        res.writeHead(200, {'content-type':'text/css'})
        res.write(homeStyle)
        console.log(req.url)
    }

    else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(browser_app)
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