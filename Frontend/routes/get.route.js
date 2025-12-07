const { Router } = require('express')
const route = Router()
const { getsecureroute } = require('../middleware/get.secure.route')

//get routes

route.get('/', getsecureroute, async (req, res) => {

      const cookieHeader = req.headers.cookie;
        // console.log(cookieHeader)
        const response = await fetch('http://localhost:3000/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 'Cookie': cookieHeader
            },
            
  
        })
 

        const apidata = await response.json()

        console.log(apidata)
        res.render('home', {
            apidata
        })

   

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
