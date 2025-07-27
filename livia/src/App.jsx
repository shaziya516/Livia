import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home' 
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

import CartPage from './pages/CartPage'


const App = () => {
const [cartItems, setCartItems] = useState([]);
  //       const [cartItems, setCartItems] = useState([
  //   { id: 1, name: 'Soap A', price: 69, quantity: 2 },
  //   { id: 2, name: 'Shampoo B', price: 89, quantity: 1 },
  // ]);
  return (
    <div>
      


      <Navbar cartItems={cartItems}/>
      <Routes>

        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/shop' element={<Shop setCartItems={setCartItems}/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/cart' element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/>

      </Routes>
    </div>
    
  )
}

export default App