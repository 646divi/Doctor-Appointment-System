const mongoose=require("mongoose")

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB database connected successfully ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`MongoDB server error ${error}`)
    }
}
// connectDB();
module.exports=connectDB;