const express = require('express');
const router = express.Router();
const User = require('../model/User')
const bcrypt = require('bcrypt')

//User Register

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.status(200).json({ user })

    } catch (error) {
        res.status(500).json({ error })
    }

})

//login
router.post('/login',  async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(user){     
               const validated = await bcrypt.compare(req.body.password, user.password)
               if(validated){
                const { password, ...others } = user._doc;
                res.status(200).json({ others })

               }else{
                res.status(400).json({ msg: "Wrong password" })
               }
        }else{
            res.status(400).json({ msg: "Username does not match" })

        }
       


      

    } catch (error) {
        res.status(500).json({ error })

    }

})


module.exports = router;