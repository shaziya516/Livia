import React from "react";
import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

const OurCollectionCard = () => {
  const data = [
    { id: 1, image: "/soap-avacoda-LMGO1G64.jpeg", rating: "4.6" },
    { id: 2, image: "soap2.jpeg", rating: "4.4" },
    { id: 3, image: "soap3.jpeg", rating: "4.5" },
    { id: 4, image: "soap4.jpeg", rating: "4.7" },
    { id: 5, image: "soap5.jpeg", rating: "4.3" },
    { id: 6, image: "soap6.jpeg", rating: "4.7" },
    { id: 7, image: "soap7.jpeg", rating: "4.5" },
    { id: 8, image: "soap8.jpeg", rating: "4.6" },
    { id: 9, image: "soap9.jpeg", rating: "4.8" },
    { id: 10, image: "soap10.jpeg", rating: "4.9" },
  ];

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {data.map((item, idx) => (
        <div
          key={idx}
          className="h-[350px] w-[350px] border-[1px] rounded-xl shadow-xl border-[0.2px] border-zinc-200 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg "
        >
          <div className="h-[60%]">
            <img
              src={item.image}
              alt={`soap-${idx}`}
              className="w-full h-full object-cover rounded-t-xl "
            />
          </div>

          <div className="flex flex-col px-5 py-3">
            <h1 className="font-semibold text-xl mb-1">Livia-Avocado Soap</h1>

            <span className="flex items-center gap-1 text-yellow-400 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-gray-600 ml-1">{item.rating}</p>
            </span>

            <div className="flex items-center gap-1 my-5 font-bold text-2xl text-green-600">
              <FaIndianRupeeSign />
              <p>69.00</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurCollectionCard;
