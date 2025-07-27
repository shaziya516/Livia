import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Navbar = ({cartItems}) => {
  return (
    <header className='w-full h-[80px] bg-black px-5 sticky top-0 z-50'>
      <div className='flex items-center justify-between h-full text-white'>

        {/* Logo */}
        <div>
          <img src="\logo-CjbUGg3i.jpg" alt="Logo" className='h-12 max-sm:h-8' />
        </div>

       

          {/* Nav Links */}
          <nav className='flex md:gap-8 max-md:gap-2 text-green-400 text-sm font-medium'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>Contact</Link>
          
          </nav>

          {/* Cart Icon */}
          <div className='text-white text-xl cursor-pointer relative p-3'>
           <Link to='/cart'> <FiShoppingCart />
          {cartItems.length>0 && <div className='w-5 h-5 bg-green-400 text-black font-bold absolute top-0 right-0 rounded-full text-sm flex justify-center items-center'>{cartItems.length}</div>}
           
           </Link>
          </div>

        </div>
        
   
    </header>
  )
}

export default Navbar
