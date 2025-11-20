const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true

    },
   
    mobile:{
        type:String
    },

    language:{
        type:String,
        require:true,
    },
    
    
},{ timestamps: true }
)

module.exports =  mongoose.model('profile',profileSchema)