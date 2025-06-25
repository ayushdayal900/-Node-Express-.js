const express = require('express')
const app = express()
const {people} = require('../data')


// static assets
app.use(express.static('D:/Projects/node_express_fcc/methods-public'))

// parse from data
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({success:true, people})
})



app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"please provide name"})
    }
    res.status(200).json({success:true, msg:`Hello ${name}`})
})



app.put('/api/postman/people/:id', (req,res)=>{ 
    const {id} = req.params
    const {name} = req.body
    if(!name || !id){
        return res.status(400).json({success:false, msg:"please provide name/id"})
    }
    const person = people.find((person) => person.id==Number(id))
    if(!person){
        return res.status(404).json({success:true, msg:'No person with given id: '+id})
    }
    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople}) 
})



app.delete('/api/postman/people/:id', (req,res)=>{

    const person = people.find((person)=>person.id = Number(req.params.id))
    console.log(person)
    if(!person){
        return res.status(404).json({success:false, msg:'No person with given id: '+req.params.id})
    }

    const newPeople = people.filter((person)=>{person.id !== Number(req.params.id)})
    res.status(200).json({success:true, newPeople})


})






app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }else{
        return res.send("Please provide credentials")
    }
})

app.listen(5000, ()=>{
    console.log('app is runnnig at the port 5000...')
})