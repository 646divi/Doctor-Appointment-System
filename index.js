const connectDB =require("./config/db")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const cors=require("cors");



//dotenv config
dotenv.config()

//MongoDB connection
connectDB();
//rest objects
const app=express();
//middlewares
app.use(cors());
app.use(express.json())

//routes
//register
app.use("/api/v1/user",require("./routes/userRoute"))

//port 
const port=process.env.PORT || 5173
app.listen(port,()=>{
    console.log(`server is running successfully at port : ${port}`)
});