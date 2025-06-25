const http = require('http')

const server = http.createServer((req, res) =>{

    server.on('request', (req, res) => {
        res.end('request event')
    })
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})



