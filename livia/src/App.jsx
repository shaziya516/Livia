import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home' 
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'


const App = () => {

  
  return (
    <div>
      


      <Navbar/>
      <Routes>

        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/shop' element={<Shop/>}/>
        <Route  path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
    
  )
}

export default App