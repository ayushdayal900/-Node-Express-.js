const authorize = (req, res, next) =>{

    const {user} = req.query;
    if(user == 'ayush'){
        console.log("authorize")
        req.user = {name:"aysuh", id:3}
        next()
        // console.log()
    }else{
        res.status(401).send('Unauthorize')
        // next()
    }
}

const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing')
    next()
}

module.exports = [logger, authorize]