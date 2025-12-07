const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
const path = require('path')
const {route} = require('./routes/get.route')
app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))

app.use(route)

app.listen(process.env.PORT,()=>{
    console.log(`PORT Running on ${process.env.PORT}`)
})