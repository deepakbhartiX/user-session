const userdata = require('../models/user.auth')
const profildata = require('../models/user.auth')
const auth = require('../services/userauth')
const asyncHandler = require('../error handler/asyncHandler')
const AppError = require('../error handler/AppError')


const login = async(req,res)=>{

   const result = await auth.login(req)
   
}

const signup = async(req,res)=>{
   const result = await auth.signup(req)


}


module.exports = {
    login,signup
}