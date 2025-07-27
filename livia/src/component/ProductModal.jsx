import { useState } from 'react';
import { FaStar, FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';

const ProductModal = ({setShowModal,currentItem,setCartItems}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={()=>setShowModal(false)}>
      <div className="bg-white rounded-xl shadow-lg w-full flex flex-col md:flex-row transition-all duration-300 " onClick={(e)=>e.stopPropagation()}>
        

        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <img
            src={currentItem.image} 
            alt="Livia Charcoal Soap"
            className="w-full max-w-sm rounded-md object-cover"
          />
        </div>


        <div className="md:w-1/2 p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-semibold">Livia-Charcoal Soap</h2>
            <button className="text-gray-500 hover:text-black text-xl" onClick={()=>setShowModal(false)}>&times;</button>
          </div>

          <div className="flex items-center mt-1 text-sm text-gray-600">
            <div className="text-yellow-400 flex mr-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-gray-300" />
            </div>
            <span>({currentItem.rating})</span>
          </div>

          <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-md:h-[100px] max-md:overflow-scroll">
            {currentItem.desc}
          </p>

          <hr className="my-4" />

          {/* Price */}
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-gray-600">PRICE:</span>
            <span className="text-green-600 text-xl">{currentItem.price}</span>
            <span className="line-through text-gray-400 text-sm">₹99.00</span>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <span className="text-sm font-medium text-gray-600">QUANTITY:</span>
            <div className="flex items-center mt-2 w-max border rounded-md overflow-hidden">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="bg-gray-100 px-3 py-1 text-lg"
              >
                <FaMinus />
              </button>
              <span className="px-4 text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="bg-gray-100 px-3 py-1 text-lg"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-6 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-md transition duration-300"
          onClick={()=>{
            const cartvalue={
                id:currentItem.id,
                name:currentItem.title,
                quantity:quantity,
                price:currentItem.price,
                image:currentItem.image
            }
            setCartItems((prev)=>{
                let flag=0;
                prev.map((item)=>{
                    if(item.id===cartvalue.id){
                        flag=1;
                        item.quantity=item.quantity+cartvalue.quantity
                    }
                    return item
                })
                if(flag===0){
                    return [...prev,cartvalue]
                }
                else{
                    return [...prev];
                }
            })
            setShowModal(false)
          }}
          >
            <FaShoppingCart /> Add to Cart — ₹{(69 * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
