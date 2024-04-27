const express=require("express");
const User = require("../models/User");
const { validationResult,body } = require("express-validator");
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const FetchUser = require("../middleware/FetchUser");
const JSON_SEC="nithya@123";


router.post('/createUser',[
    body('name',"Name must have atleast 4 characters").isLength({min:4}),
    body('email',"please enter correct email").isEmail(),
    body('password',"password should have atleast 4 characters").isLength({min:4})
], async(req,res)=>{
    let success=false;
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({success:success,error:error.array()})
    }
    try{
        let user= await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success:success,error:"sorry User with with this email already exists"});
    }

    const salt=await bcrypt.genSalt(10);
    let secpass=await bcrypt.hash(req.body.password,salt);
    user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secpass
    })
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JSON_SEC);
    success=true;
    res.json({success,authtoken})
    }
    catch(error){
        console.error(error);
        res.status(500).json({success:success,error:"internal server error"})
    }
})
router.post('/login',[
    body('email',"Please enter correct Email").isEmail(),
    body('password',"paaword should not be blank").exists()
],async (req,res)=>{
    let success=false;
    const error=validationResult(req);
    if(!error.isEmpty()) return res.status(400).json({error:"please enter correct data"});
    try {
        const {email,password}=req.body;
        let user=await User.findOne({email});
        if(!user) return res.status(400).json({success:success,error:"sorry! User with this email doesn't exists"});
        const pass=await bcrypt.compare(password,user.password);
        if(!pass) return res.status(400).json({success:success,error:"Please try to login with correct credentials"});
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JSON_SEC);
        success=true;
        res.json({success,authtoken});
    } catch (error) {
        console.error(error);
        res.status(500).json({success:success,error:"internal server error"});
    }
})

router.post('/fetchUser',FetchUser, async(req,res)=>{
    try {
        const user= await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})


module.exports=router;