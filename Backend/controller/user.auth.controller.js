const auth = require('../services/userauth')
const asyncHandler = require('../error handler/asyncHandler')
const profiles = require('../services/profile')
const { ConnectionStates } = require('mongoose')
const session = require('express-session')
const { AppError } = require('../error handler/AppError')

const login = async (req, res) => {

   const loggged = await auth.login(req)

   if (loggged) {

      req.session.regenerate(err => {
         if (err) {
            throw new AppError(err, 500)
         }

         req.session.username = loggged.user._id
         // console.log(req.session.username)
         req.session.save(() => {

            
            res.status(201).json({
               sucess: true,
               message: "sucessfuly logined in",
               redirect: '/'
            })
         })  

      })
 
   }


}

const signup = async (req, res) => {
   const signed = await auth.signup(req)

   if (signed) {
      res.status(201).json({
         sucess: true,
         message: "user created sucessfuly",
         redirect: '/login'
      })
   }



}

const home = async (req, res) => {
   const userdata = await profiles.homeprofile(req)
   console.log(userdata)
   if (userdata) {
      // res.render('home')
   res.status(201).json({
      sucess:true,
      data:userdata
   })
   }


}

const profile = async (req, res) => {

   const result = await profiles.userprofile(req)

   if (result) {
      res.status(201).json({
         sucess: true,
         message: "user profile has been updated",
         redirect: '/'
      })
   }
}

module.exports = {
   login, signup, profile, home
}