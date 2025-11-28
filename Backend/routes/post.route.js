const { Router, json } = require('express')
const { asyncHandler } = require('../error handler/asyncHandler')
const { login, signup, profile, home } = require('../controller/user.auth.controller')
const { secureroute } = require('../middleware/post.secure.route')
const postroute = Router()

//post routes
// route.post('/',secureroute,asyncHandler(home))
postroute.post('/signup', asyncHandler(signup))
postroute.post('/login', asyncHandler(login))
postroute.post('/profile', secureroute, asyncHandler(profile))
postroute.post('/home', secureroute, asyncHandler(home))

module.exports = {
    postroute
}

