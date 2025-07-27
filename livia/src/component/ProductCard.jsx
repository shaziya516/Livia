import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
const ProductCard = ({item,idx,setShowModal,setCurrentItem}) => {
    const[current,setCurrent]=useState(0)
  return (
        <div
        onMouseEnter={()=>setCurrent(1)}
        onMouseLeave={()=>setCurrent(0)}
        onClick={()=>{
            setCurrentItem(item)
            setShowModal(true)}}
          key={idx}
          className=" cursor-pointer max-sm:w-[80%] sm:h-[400px] w-[350px] border-[1px] rounded-xl shadow-xl border-[0.2px] border-zinc-100 flex flex-col justify-around relative  "
        >
          <div className="sm:h-[60%] ">
            <img
              src={item.image}
              alt={`soap-${idx}`}
              className="w-full h-full object-cover rounded-t-xl "
            />
          </div>

          <div className="absolute max-md:hidden h-[60%] w-[350px] top-0 bg-gradient-to-t from-black/80 to-transparent
 rounded-t-xl transition-opacity ease flex justify-center items-center" style={{opacity:current}}>

          <button className="bg-black/50 text-white flex gap-4 py-3 px-4 rounded-xl items-center cursor-pointer"><FaEye/>View Details</button>

          </div>

          <div className="flex flex-col px-5 py-3">
            <h1 className="font-semibold text-xl mb-1">{item.title}</h1>

            <span className="flex items-center gap-1 text-yellow-400 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-gray-600 ml-1">{item.rating}</p>
            </span>

            <div className="flex items-center gap-1 my-5 font-bold text-2xl text-green-600">
              <FaIndianRupeeSign />
              <p>{item.price}</p>
            </div>
          </div>
        </div>
  )
}

export default ProductCard