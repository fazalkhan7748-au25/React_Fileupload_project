const mongoose=require('mongoose');

const connectdb=async()=>{
    try{
        const conn= await mongoose.connect(process.env.DATABASE)
        console.log(`Mongo db is connect${conn.connection.host}`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports={connectdb}