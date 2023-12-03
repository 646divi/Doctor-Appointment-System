const userModel=require("../models/userModel");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
require('dotenv').config();

const registerController = async (req,res)=>{
    try {
        const exists=await userModel.findOne({email:req.body.email});
        if (exists){
            return res.status(200).send({message:"User already registered",success:false});

        }
        const password=req.body.password;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);
        req.body.password=hashedPassword;
        const newUser=new userModel(req.body);
        await newUser.save()
        res.status(200).send({message:"User registered successfully",success:true});
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`Some Error Occured ${error}`,success:false});
    }
}
const loginController= async (req,res)=>{
    try {
        const oldUser=await userModel.findOne({email:req.body.email});
        if(oldUser){
            const validUser=await bcrypt.compare(req.body.password,oldUser.password);
            if(!validUser){
                res.status(500).send({message:"Please enter the correct password!",success:false});
            }else{
                const token=jwt.sign({id:oldUser._id},process.env.ACCESS_TOKEN,{expiresIn:'1d',});
                res.status(200).send({message:`Welcome ${oldUser.name}`,success:true,token});
            }

        }else{
            res.status(404).send({message:"Email does not exists!!! Please Register",success:false});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:`Some Error Occured ${error}`,success:false});
    }
}

module.exports={loginController,registerController};