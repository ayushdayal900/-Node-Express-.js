const login = (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }else{
        return res.send("Please provide credentials")
    }
}