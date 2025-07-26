import React from 'react'
import { useState } from 'react'


import Banner from '../component/Banner'
import Soaps from '../component/Soaps'
import MainBody from '../component/MainBody'
import Testimonial from '../component/Testimonial'
import Certification from '../component/Certification'
import Footer from '../component/Footer'

const Home = () => {
  
  return (
   <div className='bg-[rgba(249 250 251,0.6)]'>
      
      <Banner />
      <Soaps/>
      <MainBody/>
      <Testimonial/>
      <Certification/>
      <Footer/>
    </div>
  )
}

export default Home