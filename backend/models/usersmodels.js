const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter this field"]
    },
    email:{
        type:String,
        required:[true,"please enter this field"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter this field"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('User',userSchema);