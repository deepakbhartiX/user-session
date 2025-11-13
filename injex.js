const session = require('express-session')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config();

const {route} = require('./routes/routes')
const {errorhandler} = require('./error handler/error.handler.middleware')
const {asyncHandler} = require('./error handler/asyncHandler')
const MongoStore = require('connect-mongo')

const app = express()

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

app.use(asyncHandler(route))


app.use(errorhandler)

app.listen(process.env.PORT,()=>{
    console.log(`Runing on PORT ${process.env.PORT}`)
})  


