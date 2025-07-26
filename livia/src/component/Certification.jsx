import React from 'react'

const Certification = () => {
  return (
    <div className='flex  flex-col w-full gap-15 text-center pb-10'>


        <div className='flex flex-col w-full items-center gap-20  '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-3xl'>Our Approvals & Certifications</h1>
                <p className='text-lg text-gray-600'>Recognized and certified by leading regulatory authorities.</p>
            </div>
            <div className='flex flex-row gap-70'>
                <img src="\ministry of ayush-269iIvEV.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\msme-Cw-KMlyY.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\fssai-CUFSZNmU.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\gst-Dj3oQZKw.jpg" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg'  />
            </div>
        </div>

          <div className='flex flex-col w-full items-center gap-20  '>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-3xl text-green-700'>Secure Payment Methods</h1>
                <p className='text-lg text-gray-600'>We support multiple secure payment options for your convenience.</p>
            </div>
            <div className='flex flex-row gap-70'>
                <img src="\mastercard.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\visa.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\paypal.png" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg' />
                <img src="\western union.jpg" alt="" className='h-[120px] w-[120px] border-[0.2px] border-zinc-200 rounded-lg shadow-lg'  />
            </div>
        </div>


        
    </div>
  )
}

export default Certification