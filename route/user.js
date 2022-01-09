const express = require('express');
const router = express.Router();
const User = require('../model/User')
const bcrypt = require('bcrypt')

//update

router.put('/:id', async (req, res) => {


    if (req.body.userID === req.body.params) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updateUser = await User.findOneAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({ updateUser })

        } catch (error) {
            res.status(500).json({ error })
        }

    }
    else{
        res.status(400).json({msg:"you can update only your account"})
    }
})


//Delete user

router.delete('/:id',async(req,res)=>{
    try {
        const {id}=req.params.id;
        await User.findOneAndDelete({_id:id})
        res.status(200).json({msg:"User is deleted"})
    } catch (error) {
        
    }
})


//Get user
router.get("/:id",async(req,res)=>{
    try {
       
        const user=await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({msg:"User not found",error})
    }
    
})


module.exports = router;