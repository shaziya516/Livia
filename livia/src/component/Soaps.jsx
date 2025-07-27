import React from 'react'
import SoapCard from '../Card/SoapCard'
import Soapcard2 from '../Card/Soapcard2'

const Soaps = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mb-4 bg-gray-50 '>

        <div className=' flex justify-center  w-[95%]'>
            <h1 className='font-bold text-2xl  pt-10 mb-6 pb-2 text-green-700 border-b border-green-200 w-full'>Soaps</h1>
        </div>

        <div className='w-[95%] flex justify-center gap-[15px] max-md:flex-col max-md:items-center '>
            <SoapCard />
            <Soapcard2/>
            <Soapcard2/>
         
        </div>
        

    </div>
  )
}

export default Soaps