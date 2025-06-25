// writable
// readable
// duplex
// transform


// creating a big file using writeFileSync
// const {writeFileSync} = require('fs');
// for(let i=0; i<100000; i++){
//     writeFileSync('./txt/big_file.txt', `This is a big file. line no ${i}\n`,  {flag: 'a'})
// }



// creating a readable stream to read the big file
// const {createReadStream} = require('fs');
// const stream = createReadStream('../txt/big_file.txt', {
//     highWaterMark:90000
//     // encoding: 'utf8'

// })

// i=0
// stream.on('data', (chunk) => {
//     console.log(`------------------NEW CHUNK ${i++}------------------`)
//     // console.log(chunk.toString())
//     console.log(chunk)
// })


// stream.on('error', (err) => {
//     console.log('Error occurred while reading the file:', err)
// })


var http = require('http');
var fs = require('fs');

http
.createServer(function (req, res) {
    // const text = fs.readFileSync('./txt/big_file.txt', 'utf8');
    // res.end(text);

    const stream = fs.createReadStream('./txt/big_file.txt')
    stream
    .on('open', () => {
        // pipe is a method that allows you to read data from a readable stream and write it to a writable stream
        // it is a way to connect the readable stream to the writable stream
        stream.pipe(res);

    })
    .on('error', (err) => {
        res.end(err);
    });
})
.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});