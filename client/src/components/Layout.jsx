import React from 'react'
import { menuItems } from "../Data/menudata";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg"


const Layout = () => {
    return (
        <>
            <div className="w-screen  h-screen ">
                <div className="p-4 flex h-full w-full">
                    <div className="h-[100%] w-[20%] bg-black flex-col rounded-xl relative overflow-hidden">
                        <h1 className='font-mono font-bold text-white  p-4 text-3xl absolute left-[2rem]'>APPOINTRISE</h1>
                        <div className="mt-[7rem]">
                            {menuItems.map(menu => (
                                <div className='font-mono font-extrabold mt-[3rem] ml-4 text-3xl  gap-2 bg-pink-500 hover:bg-black hover:text-pink-500'>
                                    <i className={menu.logo}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>
                            ))}
                        </div>
                        
                        <img src={logo} alt="" className='h-[20%] w-[50%] mt-4 ml-[22%] mix-blend-hard-light opacity-50 rounded-lg hover:opacity-100'  />
                        <div className="text-white text-sm font-mono absolute bottom-[2rem] left-[2rem]">Made with love by ~ Devesh</div>

                    </div>

                    <div className='flex-col w-[80%] h-[100%]'>
                        <div className='ml-3 h-[7%] w-full border-[1px] border-gray-500 rounded-xl'>Header</div>
                        <div className="ml-3 mt-[2%] h-[90%] w-full border-[1px] border-gray-500 rounded-xl">
                            mainbar
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout