const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({

    username: {
        type: String,
        require: true,

    },

    email: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },


}, { timestamps: true }
)

//logic for hashing passwrod before store in db 

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next();

});

// function to compare plain pass to hashed pass in db

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password)
}


module.exports = mongoose.model('user', userSchema) 