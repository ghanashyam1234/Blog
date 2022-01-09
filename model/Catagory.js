const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')

const CatagorySchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    
},{Timestamp:true})

module.exports=mongoose.model("Catagory",CatagorySchema)