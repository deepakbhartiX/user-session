const profile = require('../models/user.profile')
const user = require('../models/user.auth')
const { AppError } = require('../error handler/AppError')

exports.signup = async (req) => {

    const { email, username, password } = req.body

    const find = await user.findOne({ email })

    if (find) {
        throw new AppError("email already exits", 401)
    }

    const result = await new user({
        email,
        username,
        password
    })

    result.save();

    const userprofile = await new profile({
        user: result,
        mobile: null,
        language: "eng",
    })

    userprofile.save()

    // console.log(result._id)
    return true

}


exports.login = async (req) => {
    console.log(req.body)
    const { email, password } = req.body
    if (!email || !password) {
        throw new AppError('enter email and password ', 401)
    }

    const finduser = await user.findOne({ email });

    if (!finduser) {
        throw new AppError("user not found signup first", 404)
    }
    const validate = await finduser.comparePassword(password)

    if (!validate) {
        throw new AppError("password has been incorrect", 401)
    }

    return {
        sucess: true,
        user: finduser
    }

}

