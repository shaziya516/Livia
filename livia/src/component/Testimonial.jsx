import React from 'react'
import { GiWhaleTail } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className='w-full p-4 bg-gray-100 mb-15 flex flex-row items-center justify-evenly flex-wrap gap-10'>


        <div className='w-[350px] h-[200px] flex flex-col justify-center items-center px-5 border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl'>
            <div><GiWhaleTail className='text-green-500 text-4xl' /></div>
            <h1 className='font-bold text-lg'>Curated Products</h1>
            <p className='text-gray-600'>Growing herbs on our farm enables us to process them freshly without losing their efficacy.</p>
        </div>



         <div className='w-[350px] h-[200px] flex flex-col justify-center items-center px-5 border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl'>
            <div><FaHandHoldingHeart  className='text-green-500 text-4xl' /></div>
            <h1 className='font-bold text-lg'>Handmade</h1>
            <p className='text-gray-600'>Made with passion by a 12-member homemakers team.</p>
        </div>



        <div className='w-[350px] h-[200px] flex flex-col justify-center items-center px-5 border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl'>
            <div><FaLeaf className='text-green-500 text-4xl' /></div>
            <h1 className='font-bold text-lg'>100% Natura</h1>
            <p className='text-gray-600'>Zero synthetic chemicals, Zero preservatives, Only THE RAW HERBS</p>
        </div>




       <div className='w-[350px] h-[200px] flex flex-col justify-center items-center px-5 border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl'>
            <div><FaTruckFast  className='text-green-500 text-4xl' /></div>
            <h1 className='font-bold text-lg'>Free Shipping</h1>
            <p className='text-gray-600'>Free shipping is valid on orders above ₹499.</p>
        </div>



       
    </div>
  )
}

export default Testimonial