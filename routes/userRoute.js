const express=require("express");
const { loginController, registerController } = require("../controllers/userController");

const router=express.Router();

//Login || POST
router.post('/login',loginController)

//Register || POST
router.post('/register',registerController)

module.exports=router;

