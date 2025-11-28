const profile = require('../models/user.profile')
const { AppError } = require('../error handler/AppError')

exports.userprofile = async (req) => {

    const { language, mobile } = req.body

    const userprofile = await new profile({
        user: req.session.username,
        mobile: mobile,
        language: language
    })

    userprofile.save()

    if (userprofile) return true


}

exports.homeprofile = async(req)=>{

    return await profile.findOne({ user: req.session.username }).select('-_id -createdAt -updatedAt -__v ').populate('user','-password -createdAt -updatedAt -_id -__v')
    
   

    
}