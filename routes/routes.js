const {Router} = require('express')

const route = Router()

route.get('/',(req,res)=>{
    res.send(`<h1>Home Page</h1>`)
})

route.get('/create-session',(req,res)=>{
    req.session.name = 'deepak'
    res.send(`<h1>Session has been created as ${req.session.name}`)
})

route.get('/get-session',(req,res)=>{
    res.send(`<h1>your sesion nammed as ${req.session.name}`)
})

route.get('/session-distroy',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send(`<h1>Faced error while distroying session `)
        }
        res.send(`<h1>session distoryed sucessfuly</h1>`)
    })
})
module.exports={
    route
}