import React from 'react'
import { FaLeaf } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const CoreValueCard = () => {
  return (
    <div className='flex flex-row gap-10'>

        <div className='h-[250px] w-[450px] border-[1px] border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl flex  flex-col items-center justify-center gap-5'>
            <div className='h-[80px] w-[80px] rounded-full bg-green-100 flex items-center justify-center'>

                <FaLeaf className='text-4xl text-green-600' />
            </div>
            <div className='flex flex-col gap-3 px-5'>
                <h1 className='font-semibold text-xl text-gray-800'>Purity & Natural Ingredients</h1>
                <p className='font-normal text-gray-600 '>We carefully select natural ingredients, free from harmful chemicals, synthetic fragrances, and unnecessary additives.</p>
            </div>

        </div>



         <div className='h-[250px] w-[450px] border-[1px] border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl flex  flex-col items-center justify-center gap-5'>
            <div className='h-[80px] w-[80px] rounded-full bg-green-100 flex items-center justify-center'>

                <FaHandHoldingHeart  className='text-4xl text-green-600' />
            </div>
            <div className='flex flex-col gap-3 px-5'>
                <h1 className='font-semibold text-xl text-gray-800'>Handmade & Heart-Led</h1>
                <p className='font-normal text-gray-600 '>Every product is crafted by hand with intention, reflecting our commitment to clean beauty and honest craftsmanship..</p>
            </div>

        </div>



         <div className='h-[250px] w-[450px] border-[1px] border-[0.2px] border-zinc-200 rounded-lg bg-white text-center shadow-xl flex  flex-col items-center justify-center gap-5'>
            <div className='h-[80px] w-[80px] rounded-full bg-green-100 flex items-center justify-center'>

                <FaRecycle  className='text-4xl text-green-600' />
            </div>
            <div className='flex flex-col gap-3  px-5'>
                <h1 className='font-semibold text-xl text-gray-800'>Sustainability & Ethics</h1>
                <p className='font-normal text-gray-600 '>Sustainability, transparency, and quality are at the heart of everything we do, ensuring beauty is both effective and ethical.</p>
            </div>

        </div>



         
    </div>
  )
}

export default CoreValueCard