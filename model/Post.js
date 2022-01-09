const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
        
    },
    username:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
         
    },
    catagories:{
        type:Array,
        required:false,

        },
},{Timestamp:true})

module.exports=mongoose.model("Post",PostSchema)