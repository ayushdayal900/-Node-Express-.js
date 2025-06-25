// console.log("first")

// setTimeout(() => {
//     console.log("second")
// },0)

// console.log("third")

// ------------------------------------------------------------


// i = 0
// setInterval(()=>{
    //     console.log("seconds till now : ", i++)
    // }, 1000)
    // console.log("I will run first");
    
    
// ------------------------------------------------------------

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request received");

    if(req.url === '/'){
        res.end('Welcome to the Home Page\n');
    }else if(req.url === '/about'){
        res.end('Welcome to the About Page\n');
    }else{
        res.end('Page Not Found\n');
    }

});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});