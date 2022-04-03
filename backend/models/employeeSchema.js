const mongoose=require('mongoose')

const employeeSchema=mongoose.Schema({
    userId:{
        type:Number
    },
    id:{
        type:Number
    },
    title:{
        type:String
    },
    body:{
        type:String
    }
})

module.exports=mongoose.model('employees',employeeSchema);