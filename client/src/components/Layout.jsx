import React from 'react'
import {menuItems} from "../Data/menudata";
import { Link } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <div className="w-screen  h-screen ">
        <div className="p-4 flex h-full w-full">
            <div className="h-[100%] w-[20%] bg-black flex-col rounded-lg relative">
                <h1 className='font-mono font-bold text-white  p-4 text-3xl absolute left-[2rem]'>APPOINTRISE</h1>
                <div className="mt-[7rem]">
                {menuItems.map(menu=>(
                    <div className='font-mono font-extrabold mt-[3rem] ml-4 text-3xl flex gap-2 bg-pink-500 hover:bg-black hover:text-pink-500'>
                        <i className={menu.logo}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                    </div>
                ))}
                </div>

            </div>
            <div className=" ml-3 h-[100%] w-[80%] border-[1px] border-gray-500">
                mainbar
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout