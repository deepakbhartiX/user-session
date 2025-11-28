const secureroute = (req,res,next)=>{

    if(!req.session.username){

    //    return res.redirect('/login')
        return res.status(401).json({
            sucess:false,
            message:"login first"
        })
    }
    next()
}
 
module.exports = {secureroute} 