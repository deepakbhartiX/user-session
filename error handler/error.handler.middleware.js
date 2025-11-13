const errorhandler = (err ,req,res ,next) =>{
    res.status(err.statusCode || 500).json({
        success:false,
        message:err.message || "Error from error handler middleware"
    })
}

module.exports = {errorhandler}