const userdata = require('../models/user.auth')
const profildata = require('../models/user.auth')
const auth = require('../services/userauth')
const asyncHandler = require('../error handler/asyncHandler')
const AppError = require('../error handler/AppError')
const { ConnectionStates } = require('mongoose')


const login = async(req,res)=>{

   const loggged = await auth.login(req)
      console.log(loggged)
      
}

const signup = async(req,res)=>{
   const signed = await auth.signup(req)
  
   console.log(signed)

}


module.exports = {
    login,signup
}