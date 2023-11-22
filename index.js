// const express=require('express')
import express from "express"
// const dotenv=require("dotenv")
import dotenv from "dotenv"



//dotenv config
dotenv.config()
//rest objects
const app=express();
//middlewared
app.use(express.json())

//routes
app.get("/",(req,res)=>{
    res.status(200).send({
        message:"server running ~ Devesh dada",
    });
});

//port 
const port=process.env.PORT 
app.listen(port,()=>{
    console.log(`server is running successfully at port : ${port}`)
});