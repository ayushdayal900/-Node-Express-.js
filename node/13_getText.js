// const {readFile} = require('fs')

// const getText = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 rej(err);
//             }else {
//                 res(data);
//             }
            
//         })
//     }) 
// }

// getText('./node/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//     .finally(() => console.log("Promise completed"));


// ---------------------------------------------------------------------------

// console.log("1")
// const start = async() => {
//     try{
//         const first = await getText('./node/first.txt');
//         const second = await getText('./node/second.txt');
//         console.log(first);
//         console.log(second);
//     }
//     catch(err) {
//         console.log(err);
//     }

// }

// start()
// console.log("2")


// ---------------------------------------------------------------------------

// const {readFile, writeFile} = require('fs')
// const util = require('util')

// const readFilePrimise = util.promisify(readFile)
// const writeFilePrimise = util.promisify(writeFile)

// const start = async() => {
//     try{
//         const first = await readFilePrimise('./node/txt/first.txt', 'utf8');
//         const second = await readFilePrimise('./node/txt/second.txt', 'utf8');
//         console.log(first);
//         console.log(second);

//         await writeFilePrimise('./node/txt/output.txt', `This is awesome : ${first}, ${second}`, {flag: 'a'});
//         console.log("Done with this task");
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// start()




// ---------------------------------------------------------------------------

const {readFile, writeFile} = require('fs').promises


const start = async() => {
    try{
        const first = await readFile('./node/txt/first.txt', 'utf8');
        const second = await readFile('./node/txt/second.txt', 'utf8');
        console.log(first);
        console.log(second);

        await writeFile('./node/txt/output.txt', `This is awesome : ${first}, ${second}`, {flag: 'a'});
        console.log("Done with this task");
    }
    catch(err) {
        console.log(err);
    }
}

start()