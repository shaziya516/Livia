import React from 'react'

const Certification = () => {
  return (
    <div className='flex  flex-col w-full gap-15 text-center pb-10'>


        <div className='flex flex-col w-full items-center gap-20  '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-3xl'>Our Approvals & Certifications</h1>
                <p className='text-lg text-gray-600'>Recognized and certified by leading regulatory authorities.</p>
            </div>
            <div className='flex flex justify-around w-[100%] max-md:flex-col items-center max-md:gap-10'>
                <img src="\ministry of ayush-269iIvEV.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4' />
                <img src="\msme-Cw-KMlyY.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 ' />
                <img src="\fssai-CUFSZNmU.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 ' />
                <img src="\gst-Dj3oQZKw.jpg" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 '  />
            </div>
        </div>

          <div className='flex flex-col w-full items-center gap-20  '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-3xl text-green-700'>Secure Payment Methods</h1>
                <p className='text-lg text-gray-600'>We support multiple secure payment options for your convenience.</p>
            </div>
            <div className='flex flex-row justify-around w-[100%] max-md:flex-col items-center max-md:gap-10'>
                <img src="\mastercard.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 ' />
                <img src="\visa.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 ' />
                <img src="\paypal.png" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 ' />
                <img src="\western union.jpg" alt="" className='h-[100px] w-[100px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg p-4 '  />
            </div>
        </div>


        
    </div>
  )
}

export default Certification