const getsecureroute = async(req,res,next)=>{

    if(!req.headers.cookie){
       return res.render('login')
    }

//     const cookiename = req.headers.cookie
//    console.log()
    next()
    
}


module.exports = {getsecureroute}