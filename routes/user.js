const router = require("express").Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { response } = require("express");

router.get("/",(req,res) =>{
    res.send("This is way to able the USer API")
})

//Update user

router.put("/:id",async (req,res) =>{
    if(req.body.userId === req.params.id ||req.body.isAdmin ){
        if (req.body.password) {
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account updated successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only Our Account");
    }
});
// delete User
router.delete("/:id",async (req,res) =>{
    if(req.body.userId === req.params.id ||req.body.isAdmin ){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account has been delete successfully");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can update only Our Account");
    }
});
// get a user

router.get('/:id', async (req, res) =>{
    try{
        const user = await User.findById(req.params.id);
        const { password,updateAt,  ...other } = user._doc;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// follow a user

router.put("/:id/follow", async (req, res) =>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne( { $push : { followers: req.body.userId}});
                await currentUser.updateOne({ $push : { followings: req.params.id}});
                res.status(200).json("user has been followed successfully")
            } else {
                res.status(403).json("you allready follow the user");
            }
        } catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you cant afollow yourself")
    }
})

// unfollow a user
router.put("/:id/unfollow", async (req, res) =>{
    if (req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            console.log("user, currentUser", user, currentUser);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne( { $pull : { followers: req.body.userId}});
                await currentUser.updateOne({ $pull : { followings: req.params.id}});
                res.status(200).json("user has been unfollow")
            } else {
                res.status(403).json("you dont  folloethe user");
            }
        } catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("you cant unfollow yourself")
    }
})


module.exports = router;