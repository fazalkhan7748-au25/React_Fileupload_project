  const asyncHandler=require('express-async-handler')
  const User=require('./../models/usersmodels')
  const jwt=require('jsonwebtoken')

const protect=asyncHandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization){
        try{
            token=req.headers.authorization.split(" ")[1]
            const decode=jwt.verify(token,process.env.JWT_SCERETE)
            req.user= await User.findById(decode.id)
            next();
        }
        catch(err){
            res.status(401)
            throw new Error("Not Authorized")
        }
    }
    else{
        res.status(401)
        throw new Error("not Authorized")
    }
})

module.exports={protect}