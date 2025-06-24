const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to pur home page')
        return
    }
    if(req.url === '/about'){
        res.end('This is an About page.');
        return
    }
    
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for.</p>
        <a href="/">Back to Home</a>
        `
    );
})

server.listen(5000)