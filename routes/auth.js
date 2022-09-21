const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { response } = require("express");

router.get("/",(req,res)=>{
    res.send("This is login Page");
})

//REGISTER
router.post("/register", async(req, res) =>{
    try {
        ////genrate New Passweord
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create  new user
        const newUser =  new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword,
        });

        //save user and return response
        const  user= await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        console.log("errrrrrrrr", err);
        response.status(500).json(err)
    }
})

///LOGIN 
router.post("/login", async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("user not found")
        console.log("password", req.body.password);
        console.log("userpassword", user.password);
        const validPassword = await bcrypt.compareSync(req.body.password, user.password)
        console.log('bcrypt password',  bcrypt.compare(user.password, req.body.password));
        console.log("validpassword", validPassword);
        !validPassword && res.status(400).json("password mismatch")

        res.status(200).json(user)
    }catch(err) {
        console.log(err);
        response.status(500).json(err)
    }  
    
});

module.exports = router;