import React from 'react'
import Footer from '../component/Footer'


import OurCollectionCard from '../Card/OurCollectionCard'

const Shop = () => {
  return (
    <div className='flex flex-col items-center gap-20 mt-20'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-5xl'>Explore Our Collection</h1>
        <p className='font-normal text-lg text-gray-500'>Handcrafted with nature's finest ingredients for your well-being.</p>
      </div>

      <div>
        <OurCollectionCard/>
        
      </div>


      <div className='w-full'>
        <Footer/>

      </div>
    </div>
  )
}

export default Shop