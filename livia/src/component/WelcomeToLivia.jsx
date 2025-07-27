import React from 'react'
import { GiWhaleTail } from "react-icons/gi";

const WelcomeToLivia = () => {
  return (
    <div className='w-full  py-8 px-6 bg-green-700 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center text-center md:w-[600px] gap-10'>

            <div className='text-5xl text-green-200'><GiWhaleTail /></div>
            <h1 className='font-bold text-4xl text-white'>Welcome to Livia</h1>
            <p className='text-white font-normal text-lg'>Where beauty begins naturally. We invite you to explore our range of handmade products and experience the Livia difference.</p>
            <button className='h-[55px] w-[250px] text-green-700 bg-white text-xl font-semibold rounded-xl'>Explore Our Products</button>


        </div>
    </div>
  )
}

export default WelcomeToLivia