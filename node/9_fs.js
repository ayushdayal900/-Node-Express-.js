// const {readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./first.txt', 'utf8')
// const second = readFileSync('./second.txt', 'utf8')

// console.log(first,second)

// writeFileSync('./first.txt', `Here is the result: ${first}, ${second}\n`, {flag: 'a'})
// flag a is append



const {readFile, writeFile} = require('fs')
console.log('start')

readFile('./first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err); 
        return
    }
    const first = result;

    readFile('./second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log(err); 
            return
        }
        const second = result;

        writeFile('output.txt', `Here is the result: ${first}, ${second}\n`, (err, result) =>{
            if(err){
                console.log(err); 
                return
            }
            console.log(result);
        })
    })

    console.log('done with this task')
})

console.log('starting next task')