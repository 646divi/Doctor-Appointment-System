const JWT=require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req,res,next)=>{
    try {
        const token=req.headers["authorization"].split(" ")[1];
        JWT.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                return res.status(200).send({
                    message:"Authorization Failed! Try Again Later",
                    success:false,
                })
            }
            else{
                req.body.userId=decoded.id;
                next();
            }
        })
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message:"Something went wrong",
            success:false,
        })
    }

}