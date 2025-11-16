const {Router} = require('express')
const { asyncHandler } = require('../error handler/asyncHandler')
const {login,signup } = require('../controller/user.auth.controller')

const route = Router()

route.get('/',(req,res)=>{
    res.render('home',{
        name:'deepak'
    })   
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})
route.post('/signup',(req,res)=>{
    asyncHandler(signup)
})

route.get('/login',(req,res)=>{   
    res.render('login')
    
})
route.post('/login',(req,res)=>{   
    asyncHandler(login)
    
})


module.exports={
    route
}

