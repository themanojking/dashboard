import React from 'react'
import { FaShoppingCart,FaUser } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";

function Dashboard() {
  return (
    <div>
         <div className='flex flex-wrap justify-center gap-10 mt-12 '>
             <div className='border-2 p-4 rounded shadow-xl w-72  lg:w-96'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-md font-bold'>Total Orders</h1>
                    <FaShoppingCart className=''/>
                </div>
                <h1 className='text-3xl font-bold'>1,000+</h1> 
               <h4 className='md:text-lg font-semibold'>30+ orders increases in month</h4>
             </div>

              <div className='border-2 p-4 rounded shadow-xl w-72 lg:w-96'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-md font-bold'>Total Products</h1>
                    <FaBoxesStacked />
                </div>
                <h1 className='text-3xl font-bold'>1,200+</h1> 
               <h4 className='md:text-lg font-semibold'>30+ products added in the month</h4>
             </div>
              <div className='border-2 p-4 rounded shadow-xl w-72 lg:w-96'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-md font-bold'>Total Users</h1>
                    <FaUser />
                </div>
                <h1 className='text-3xl font-bold'>50+</h1> 
               <h4 className='md:text-lg font-semibold'>30+ users come to website</h4>
             </div>
         </div>
    </div>
  )
}

export default Dashboard
