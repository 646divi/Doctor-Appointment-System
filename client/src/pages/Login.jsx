import React ,{useState}from 'react';
import logo from "../assets/logo.jpg"
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { message } from 'antd';

const Login = () => {
    const navigate=useNavigate();
    const handleResponse= async (e)=>{
        e.preventDefault();
        console.log("yes");
        const values={email:email,password:password};
        axios.post("http://localhost:8080/api/v1/user/login",values).then((res)=>{
            console.log(res);
            const flg=res.data.success;
            if(flg){
                localStorage.setItem("token",res.data.token);
                navigate("/");
                message.success(res.data.message)
            }else{
                message.error(res.data.message);
            }
            // flg?message.success(res.data.message):message.error(res.data.message);
          
        }).catch((err)=>{
            console.log(err);
            message.error(err.response.data.message);
        });
        // try {
        //     const res=await axios.post("http://localhost:8080/api/v1/user/login",{email:email,password:password}); 
        //     console.log(res)
        //     const flg=res.data.success;
        //     flg?message.success(res.data.message):message.error(res.data.message);
        // } catch (error) {
        //     message.error(res.data.message);
        // }
        setEmail("");
        setPassword("");  
    }
    const handleChange=(e)=>{
        const temp=e.target.name;
        temp=="email"?setEmail(e.target.value):setPassword(e.target.value);
        
    }
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <>
    {/* <form action=""> */}
    <div className="w-screen h-screen bg-black relative flex justify-center items-center">
        <div className="h-2/4 w-2/4 bg-white text-black relative">
            <form onSubmit={handleResponse}>
                <span className='absolute left-[29rem] top-[4rem] font-mono text-pink-500 font-bold'>Email</span>
                <input type="email" 
                name="email" id="" 
                placeholder='abc@email.com' 
                className='absolute left-[29rem] top-[6rem] border-[1px] border-gray-500 focus:outline-none p-1 focus:ring ring-pink-500 '
                value={email} onChange={handleChange}/>
                <span className='absolute left-[29rem] top-[9rem] font-mono text-pink-500 font-bold'>Password</span>
                <input type="Password" 
                name="" id="" 
                placeholder='Password' 
                className='absolute left-[29rem] top-[11rem] border-[1px] border-gray-500 focus:outline-none p-1 focus:ring ring-pink-500 '
                value={password} onChange={handleChange}/>
                <button className='absolute top-[15rem] left-[29rem] bg-pink-500 font-mono text-lg font-bold w-[7rem] border-[2px] border-black hover:bg-black hover:text-pink-500 hover:border-pink-500'>Submit</button>
            </form>
            <span className='absolute left-[29rem] top-[18rem] font-mono '>New here?</span>
            <button className='absolute left-[34rem] top-[18rem] font-mono underline hover:text-pink-500'><Link to="/register">Register</Link></button>
        </div>
        <div className=" bg-white h-3/5 w-96 absolute left-[26rem]">
            <img src={logo} alt="Logo" className='w-full h-auto bg-center bg-cover'/>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-pink-500'>
                <p className='absolute top-[18rem] left-[3rem] font-sans text-lg font-bold p-2 text-blue-900'>"Booking Brilliance: Your Health, Your Appointments, Your Way."</p>
                {/* <button className='absolute top-[22rem] left-[8rem] border-2 border-none bg-black font-mono text-xl font-bold text-white p-2 w-[7rem] hover:bg-blue-900 '>Register</button> */}
            </div>
        </div>
        {/* <div className="bg-logo bg-center bg-cover hue-rotate-90 h-3/4 w-96 absolute left-[28rem]">
            
        </div> */}
    </div>
    {/* </form> */}
    </>
  )
}

export default Login