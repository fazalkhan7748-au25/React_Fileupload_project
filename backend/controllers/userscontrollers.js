const asyncHandler=require('express-async-handler');
const User= require('./../models/usersmodels')
const bcrypt=require('bcryptjs')
const {upload,impoData}=require('../config/imageconfig')
const jwt=require('jsonwebtoken')

const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SCERETE,{
        expiresIn:"30d"
    })
}

const registerusers=asyncHandler(async(req,res)=>{

    const {name,email,password}=req.body
    if(!name||!email||!password){
        res.status(400)
        throw new Error("Enter the details please")
    }
    const user=await User.findOne({email})
    if(user){
        res.status(400)
        throw new Error("user already exist")
    }
     
    const salt=await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(password,salt)

    const newUser= await User.create({
        name:name,
        email:email,
        password:hashedpassword
    })
    if(newUser){
        res.status(201).json({
            _id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            password:newUser.password,
            token:gentoken(newUser.id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid Error")
    }
})


const loginusers=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        throw new Error("please enter login details")
    }
    const user=await User.findOne({email})
    const pass= await bcrypt.compare(password,user.password)
    if(user&&pass){
        res.status(200).json({
            userid:user.id,
            name:user.name,
            message:"loggedin sucessfully",
            token:gentoken(user.id)
        })
    }
    else{
        res.status(200)
        throw new Error("invalid credetials");
    }
})

const getFeatures=asyncHandler(async(req,res)=>{
    console.log("hi from get features")
    
})
const fileController= async(req,res)=>{
    console.log("hi from file controoler")
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
            
        }
        impoData();
        return res.status(200).send(req.file)
    })
}

module.exports={registerusers,loginusers,getFeatures,fileController}