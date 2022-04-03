const multer=require("multer")
const fs = require('fs')
// const test=require('./../../public/tempJsonfile.json')
const devData=require('./../models/employeeSchema')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'backend/config')
    },
    filename:(req,file,cb)=>{
        cb(null,"temp.json")
    }
})

const impoData=async()=>{
    try{
        const readData=JSON.parse(fs.readFileSync(`${__dirname}/temp.json`,'utf-8'))
        await devData.create(readData)
        console.log("sucessfully uploaded")
        fs.unlinkSync(`${__dirname}/temp.json`)

    }
    catch(err){
        console.log(err)
    }
}

const upload=multer({storage}).single('file')

module.exports={upload,impoData}