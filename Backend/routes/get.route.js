const { Router, json } = require('express')
const route = Router()
const { getsecureroute } = require('../middleware/get.secure.route')

//get routes

route.get('/', getsecureroute, async (req, res) => {

    try {
        const response = await fetch('http://localhost:3000/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': req.headers.cookie   // forward user cookie
            },
            credentials: "include"

        })


        const apidata = await response.json()

        console.log(apidata.error)
        res.render('home', {
            apidata
        })

    } catch (error) {
        console.log(error)
    }

})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.get('/login', (req, res) => {
    res.render('login')

})

module.exports = {
    route
}
