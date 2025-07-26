import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const SoapCard = () => {
  return (

    
    <div className='w-[55%]  flex justify-center items-center p-4 rounded-xl shadow-xl border-[0.2px] border-zinc-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg' >
        
        <div className='w-full flex flex-row gap-[10px] '>
            <img src="\soap-avacoda-LMGO1G64.jpeg" alt="" className='w-[45%]' />


            <span className='flex flex-col gap-6' >
                <h1>Livia Avacado Soap</h1>
                <p>Indulge Your skin with the creamy richness of ripe avocado.
                    This handmade soap is packed with nourishing vitamins and healthy fats to deply...
                </p>

                <div className='flex  items-center text-green-700 '>

                 <button className='flex flex-row items-center'> View More <span> <FaLongArrowAltRight className='font-thin pt-1'  /></span> </button>
                </div>

            </span>
           


        </div>


       
    </div>
  )
}

export default SoapCard