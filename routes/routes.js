const {Router} = require('express')
const { asyncHandler } = require('../error handler/asyncHandler')
const {login,signup,profile,home } = require('../controller/user.auth.controller')
const {secureroute} = require('../middleware/secure.route')
const route = Router()

//get routes

route.get('/',secureroute,(req,res)=>{

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
route.post('/',secureroute,asyncHandler(home))
route.post('/signup',asyncHandler(signup))
route.post('/login',asyncHandler(login))
route.post('/profile',secureroute,asyncHandler(profile))

module.exports={
    route
}

