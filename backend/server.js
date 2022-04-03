const express= require('express');
const dotenv=require('dotenv').config();
const app=express();
const users=require('./routes/userroutes')
const {connectdb}=require('./config/db')
const upload=require('./config/imageconfig')
const {errorHandler}=require('./middleware/errormiddleware')
const cors=require('cors')

const Port=5000||process.env.PORT;
connectdb();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({origin:"http://localhost:3000"}))


app.use('/api/users',users)

app.use(errorHandler)
app.listen(Port,()=>{
    console.log("server is active")
})