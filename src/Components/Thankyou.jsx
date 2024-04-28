import React from 'react'
import { NavLink } from "react-router-dom";


const Thankyou = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='bg-black text-white text-3xl font-bold p-3 rounded-md'>Thank You!</h1>
      <p className=' font-semibold mt-4'>Your submission has been received. We will be in touch soon.</p>
     <button className='bg-[#ff2d2d]  mt-4 p-2 rounded-full'>
     <NavLink className={(e)=>{return "text-white px-2"}} to="/"> Back Home</NavLink>

     </button>
    </div>
  )
}

export default Thankyou
