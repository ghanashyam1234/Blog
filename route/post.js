const express = require('express');
const router = express.Router();
const Post = require('../model/Post')
const bcrypt = require('bcrypt')

//create post
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }

})

//Update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedpost = await Post.findOneAndUpdate(req.params.id, req.body, { new: true })
                res.status(200).json(updatedpost)
            } catch (error) {
                res.status(400).json(error)
            }

        }
        else {
            res.status(401).json("you can not update others post")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json({msg:'Post is deleted'})
            } catch (error) {
                res.status(400).json(error)
            }

        }
        else {
            res.status(401).json("you can not delete others post")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

//get post
router.get("/:id",async(req,res)=>{
    try {
       
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({msg:"User not found",error})
    }
    
})

//get all post
router.get("/",async(req,res)=>{
    try {
        let post;
        const username=req.query.username;
        const catname=req.query.cat
        if(username){
            post=await Post.find({username});
        }
        else if(catname){
            post=await Post.find({catagories:{
                $in:[catname]
            }});

        }
        else{
             post=await Post.find()

        }
       
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({msg:"User not found",error})
    }
    
})





module.exports = router;