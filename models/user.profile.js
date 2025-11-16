const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userdata',
        required:true

    },
    profile:{
        type:String,

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

module.exports =  mongoose.model('profiledata',profileSchema)