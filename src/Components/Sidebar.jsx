import React from 'react'
import { MdHome } from "react-icons/md";
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { FaUsersGear,FaBoxesStacked } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
          <h1 className='text-2xl font-bold hidden md:block mt-4 text-center'>Manoj Kumar</h1>
          <ul className='flex flex-col mt-5 text-xl space-y-2'>
               <Link to="/"><li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <MdHome className='text-2xl'/>
                        <h2 className='hidden md:inline'>Dashboard</h2>
               </li></Link>
               <Link to="/orders"><li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaShoppingCart className='text-2xl' />
                        <h2 className='hidden md:inline'>Orders</h2>
               </li></Link>
               <Link to="/customers"><li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaUsersGear className='text-2xl'/>
                        <h2 className='hidden md:inline'>Customers</h2>
               </li></Link>
               <Link to="/users"><li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaUser className='text-2xl'/>
                        <h2 className='hidden md:inline'>Users</h2>
               </li></Link>
               <Link to="/products"><li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaBoxesStacked className='text-2xl'/>
                        <h2 className='hidden md:inline'>Products</h2>
               </li></Link>
               <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <IoSettings  className='text-2xl'/>
                        <h2 className='hidden md:inline'>Settings</h2>
               </li>
          </ul>
      </div>
    </>
  )
}

export default Sidebar
