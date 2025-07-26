import React from 'react'

const StoriesAndMission = () => {
  return (
    <div className='flex flex-row m-20 gap-10'>

      <div>

        <img src="\logo-CjbUGg3i.jpg" alt="" className='h-[500px] w-[600px] rounded-xl' />

      </div>


      <div className='w-[70%]  flex flex-col gap-10'>

        <h1 className='font-semibold text-4xl text-gray-800'>Our Story & Mission</h1>

        <p className='font-normal text-lg text-gray-700'>Founded in 2012, Livia began with a simple yet powerful mission: to create pure, handmade beauty products that nourish the skin and uplift the soul. What started as a small batch production in a humble workspace has blossomed into a trusted name in natural skincare and beauty. </p> 


        <p className='font-normal text-lg text-gray-700'>
        At Livia, we believe that beauty should be both effective and ethical. That’s why every product we craft is made by hand, using carefully selected natural ingredients—free from harmful chemicals, synthetic fragrances, and unnecessary additives. From luxurious body butters to gentle cleansers and soothing oils, our formulas are designed to treat your skin with the love and care it deserves.
        </p>
        <div>
          <p className='w-full h-[100px] bg-green-100 rounded-lg flex items-center justify-center px-5 border-l-[5px] border-green-700 text-green-700 font-semibold text-lg'>"Over a decade later, Livia continues to grow while staying true to our roots: small-batch, handmade, and heart-led."</p>
        </div>

      </div>
    </div>
  )
}

export default StoriesAndMission