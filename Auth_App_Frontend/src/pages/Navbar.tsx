import React from 'react'
import { Button } from '../components/ui/button'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="flex dark:border-b border-gray-600 md:flex-row flex-col gap-4 md:gap-0 md:h-14 items-center justify-around flex-wrap bg-gray-950 p-5 md:p-0">
        <div className="font-bold text-xl flex items-center  gap-2">
            <span className='inline-block x h-7 w-7 text-center text-white bg-blue-500 rounded-md bg-gradient-to-r from-blue-500 to-purple-500'>{"A"}</span>
            <NavLink to={"/"} className="text-white hover:text-gray-500">
                Auth App
            </NavLink>
        </div>
        <div className="flex items-center gap-4">
            <NavLink to={"/"}  className="text-white hover:text-gray-500">
            Home
            </NavLink>
            <NavLink to={"/login"} >
            <Button size={"sm"} variant={"outline"} className="bg-gray-700 cursor-pointer hover:text-white text-white hover:bg-gray-800 py-2 px-4 rounded">
                Login
            </Button>
            </NavLink>
            <NavLink to={"/signup"}>
            <Button size={"sm"} variant={"outline"} className="bg-gray-700 cursor-pointer text-white hover:bg-gray-800 hover:text-white py-2 px-4 rounded">
                Signup 
            </Button>
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
