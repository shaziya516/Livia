import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full h-[80px] bg-black px-5 sticky top-0 z-50'>
      <div className='flex items-center justify-between h-full text-white'>

        {/* Logo */}
        <div>
          <img src="\logo-CjbUGg3i.jpg" alt="Logo" className='h-12 ' />
        </div>

        {/* Navigation + Cart */}
        <div className='flex items-center gap-80'>

          {/* Nav Links */}
          <nav className='flex gap-8 text-green-400 text-sm font-medium'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>Contact</Link>
          
          </nav>

          {/* Cart Icon */}
          <div className='text-white text-xl cursor-pointer'>
            <FiShoppingCart />
          </div>

        </div>
        
      </div>
    </header>
  )
}

export default Navbar
