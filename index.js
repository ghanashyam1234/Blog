const express=require('express')
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const port=process.env.PORT|| 3000;
const authRoute=require('./route/auth')
const userRoute=require('./route/user')
const postRoute=require('./route/post')
const catagoryRoute=require('./route/catagories')



app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)
app.use('/api/post',postRoute)
app.use('/api/catagories',catagoryRoute)




const start=async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port,()=>{
        console.log("server is listering in port",+port);
    })

}
start();