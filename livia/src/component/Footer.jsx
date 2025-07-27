import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (

  <div>
    <div className='w-full h-[350px] flex flex-col  pt-20   bg-gray-900 items-center '>
        <div className='md:w-[500px] h-[150px] bg-gray-900 flex flex-col items-center text-center text-white border-b border-gray-600 '>
            <div>
                <h1 className='font-bold text-3xl'>Livia</h1>
                <p>Premium natural skincare products for your daily beauty routine.</p>
            </div>
            <div className='flex flex-row mt-5 gap-5'>
                <span><FaFacebook className='text-3xl text-gray-600' /></span>
                <span><FaInstagram className='text-3xl text-gray-600' /></span>
            </div>
        </div>
    </div>


    <div className='w-full bg-gray-900 px-5 pb-10  ' ><p className='text-gray-500 text-sm' >© 2025 Livia. All Rights Reserved.</p></div>



  </div>
  )
}

export default Footer