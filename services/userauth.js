
const userdata = require('../models/user.auth')
const profiledata = require('../models/user.profile')
const {AppError} = require('../error handler/AppError')

exports.signup = async (req) => {
    const { email, username, password } = req.body

    const find = await userdata.findOne({ email })

    if (find) {
        throw new AppError("email already exits",401)
    }

    const result = await new userdata({
        email,
        username,
        password
    })


    result.save();

    return true
   
}


exports.login = async (req) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new AppError('enter email and password ', 401)
    }

    const finduser = await userdata.findOne({ email });

    if (!finduser) {
        throw new AppError("user not found signup first", 404)
    }
    const validate = await finduser.comparePassword(password)

    if (!validate) {
        throw new AppError("password has been incorrect",401)
    }

    return true

}

