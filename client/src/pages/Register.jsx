import React, { useState } from 'react'
import logo from "../assets/logo.jpg"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import {message} from "antd";


// import phtoo from "../logo"

const Register = () => {
    // const notify=()=>toast("Hello guys");
    // const NotificationSender=()=>{
        //     hogya?setNotimsg("Registered Successfully!"):setNotimsg("Some error occurred please try again!");
        //     toast.success(notimsg,{
            //         position:toast.POSITION.TOP_RIGHT,
            //         autoClose:3000,
            //     });
            // }
    const navigate=useNavigate();
    const handleResponse= async (e)=>{
        e.preventDefault();
        const values={name:name,email:email,password:password};
        console.log(values);
        console.log("yes");
        try {
            const res=await axios.post("http://localhost:8080/api/v1/user/register",values);
            if(res.data.success){
                console.log("Registered Successfully");
                message.success(res.data.message)
                navigate('/login')
                
            }else{
                console.log(res.data.message);
                message.error(res.data.message);
            }
        } catch (error) {
            console.log("error aagya dost")
            console.log(error.request)
        }
        setName("");
        setEmail("");
        setPassword("");
    }
    const handleChange=(e)=>{
        const temp=e.target.name;
        temp=="username"?setName(e.target.value):(temp=="email")?setEmail(e.target.value):setPassword(e.target.value);
        
    }
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <>
    {/* <form action=""> */}
    <div className="w-screen h-screen bg-black relative flex justify-center items-center">
        <div className="h-2/4 w-2/4 bg-white text-black relative">
            <form onSubmit={handleResponse}>
                <span className='absolute left-[29rem] top-[4rem] font-mono text-pink-500 font-bold'>Username</span>
                <input type="text" 
                name="username" id="" 
                placeholder='Enter Your Name...' 
                className='absolute left-[29rem] top-[6rem] border-[1px] border-gray-500 focus:outline-none p-1 focus:ring ring-pink-500 '
                value={name} onChange={handleChange}/>
                <span className='absolute left-[29rem] top-[9rem] font-mono text-pink-500 font-bold'>Email</span>
                <input type="email" 
                name="email" id=""
                placeholder='yourmail@gmail.com'
                className='absolute left-[29rem] top-[11rem] border-[1px] border-gray-500 focus:outline-none p-1 focus:ring ring-pink-500 '
                value={email} onChange={handleChange}/>
                <span className='absolute left-[29rem] top-[14rem] font-mono text-pink-500 font-bold'>Password</span>
                <input type="Password" 
                name="password" id="" 
                placeholder='Password' 
                className='absolute left-[29rem] top-[16rem] border-[1px] border-gray-500 focus:outline-none p-1 focus:ring ring-pink-500 '
                value={password} onChange={handleChange}/>
                
                <button className='absolute top-[20rem] left-[29rem] bg-pink-500 font-mono text-lg font-bold w-[7rem] border-[2px] border-black hover:bg-black hover:text-pink-500 hover:border-pink-500' type='submit'>Submit</button>
            </form>
        </div>
        <div className=" bg-white h-3/5 w-96 absolute left-[26rem]">
            <img src={logo} alt="Logo" className='w-full h-auto bg-center bg-cover'/>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-pink-500'>
                <h1 className='absolute top-[18rem] left-[6rem] font-mono text-xl font-bold text-white border-2 border-white p-2'>Already a User?</h1>
                <button className='absolute top-[22rem] left-[6rem] border-2 border-none bg-black font-mono text-xl font-bold text-white p-2 w-[7rem] hover:bg-blue-900'><Link to="/login">Login</Link></button>
                
            </div>
        </div>
        {/* <div className="bg-logo bg-center bg-cover hue-rotate-90 h-3/4 w-96 absolute left-[28rem]">
            
        </div> */}
    </div>
    {/* </form> */}
    </>
  )
}

export default Register