const getsecureroute = async(req,res,next)=>{

    if(!req.headers.cookie){
       return res.render('login')
    }

    next()
    
}


module.exports = {getsecureroute}