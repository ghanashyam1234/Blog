const express = require('express');
const router = express.Router();
const Catagory=require('../model/Catagory')


router.post('/',async(req,res)=>{

    const catagory=await Catagory.create(req.body);
    res.status(200).json({catagory})


})

router.get('/',async(req,res)=>{

    const catagory=await Catagory.find();
    res.status(200).json({catagory})


})


module.exports=router;