const {Router} = require('express')
const { asyncHandler } = require('../error handler/asyncHandler')
const {login,signup } = require('../controller/user.auth.controller')

const route = Router()

//get routes

route.get('/',(req,res)=>{
    res.render('home',{
        name:'deepak'
    })   
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.get('/login',(req,res)=>{   
    res.render('login')
    
})


//post routes

route.post('/signup',asyncHandler(signup))
route.post('/login',asyncHandler(login))


module.exports={
    route
}

