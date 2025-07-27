import React, { useState } from "react";
import Cart from "../component/Cart";
import Footer from "../component/Footer";

const CartPage = ({cartItems,setCartItems}) => {

  return (
    <>

        <div className="min-h-screen bg-gray-100 p-6 w-full">
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
