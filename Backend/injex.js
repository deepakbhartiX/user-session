const session = require('express-session')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose')
const {postroute} = require('./routes/post.route')
const {errorhandler} = require('./error handler/error.handler.middleware')
const {asyncHandler} = require('./error handler/asyncHandler')
const MongoStore = require('connect-mongo')
const path = require('path')
const app = express()
const {route} = require('./routes/get.route')


app.set('view engine','ejs')
app.set('views',path.resolve('views'))

mongoose.connect(process.env.MONGOOSE_URL).then(
    console.log('Mongoose Connected')
).catch(error=>{
    console.log(error)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'checking sesstion',
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60,},
    store:MongoStore.create({
        mongoUrl:process.env.MONGOOSE_URL,
        collectionName:'session',
        dbName:'mysessions',
        autoRemove:'interval',
        autoRemoveInterval:1
    }),
  
}))


app.use(asyncHandler(postroute))

app.use(errorhandler)

app.use(route)


app.listen(process.env.PORT,()=>{
    console.log(`Runing on PORT ${process.env.PORT}`)
})  
 

