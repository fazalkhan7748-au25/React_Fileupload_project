
const Employee=require('./../models/employeeSchema')
exports.Employeedata=(async(req,res)=>{
    const employee= await Employee.find();
    res.status(200).json({
        employee
    })
})