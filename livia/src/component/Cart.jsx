import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.price);
      return acc + price * item.quantity;
    }, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decrementQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updated);
  };

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="flex flex-col lg:flex-row gap-8 p-6 min-h-screen ">
          {/* Left Section - Items */}
          <div className="flex-1 ">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Shopping Cart
            </h2>

            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-700">
                        {item.name}
                      </h3>
                      <p className="text-green-600 font-bold">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2 justify-center">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <button
                          onClick={() => decrementQty(item.id)}
                          className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300"

                        >
                          –
                        </button>
                        <span className="px-2 text-md">{item.quantity}</span>
                        <button
                          onClick={() => incrementQty(item.id)}
                          className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <FaTrash /> <p className="max-md:hidden">Remove</p>
                  </button>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="text-red-500 mt-4 hover:underline"
              >
                Clear Entire Cart
              </button>
            </>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow h-fit sticky top-20">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h3>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Total Items:</span>
              <span className="font-semibold text-gray-800">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between py-2 mb-4">
              <span className="text-gray-600">Total Price:</span>
              <span className="font-bold text-green-600 text-lg">
                ₹{total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex min-h-screen justify-center items-center flex-col gap-4 text-center">
          <h1 className="text-[40px] max-md:text-[26px] font-bold text-gray-500">
            Your Shopping Cart
          </h1>
          <PiShoppingCartThin className="w-30 h-30 text-zinc-400 " />
          <p className="text-xl text-gray-700">Your Cart is Empty.</p>
          <p className="text-sm text-zinc-500">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/shop">
            <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
