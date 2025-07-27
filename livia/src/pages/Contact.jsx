import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";

import Footer from "../component/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  return (
    <div>
      <div className="w-full bg-gradient-to-br from-teal-100 to-cyan-200 p-8 flex flex-col items-center">
        <div className="lg:w-[50%] max-lg:w-[80%] max-sm:w-[95%] bg-white flex flex-col items-center pt-10 gap-4 rounded-lg shadow-lg px-6">
          <h1 className="font-bold text-4xl text-gray-800 text-center">Let's Connect</h1>
          <p className="text-gray-600 font-medium text-center">
            We're here to help and answer any question you might have.
          </p>
          <div className="w-[100px] border-b-[5px] border-green-600 rounded"></div>

          <form className="flex flex-col w-full gap-10 py-5 px-4 w-full">
            <div className="flex flex-col w-full">
              <label>
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="  e.g.,Jabe Doe"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                className="h-[45px] border-b-[1px] border-gray-200 p-5 rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                placeholder="Yoy@example.com"
                 value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="h-[45px] border-b-[1px] border-gray-200 p-5 rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>
                phone Number<span>(optional)</span>
              </label>

              <input
                type="phone"
                placeholder="(123) 456-7891"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} 
                className="h-[45px] border-b-[1px] border-gray-200 p-5 rounded-xl"
              />
            </div>

            <div className="flex flex-col">
              <label>
                Your Message <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="How can we help you today"
                 value={text}
                onChange={(e) => setText(e.target.value)} 
                className="h-[100px] border-b-[1px] border-gray-200 p-5 rounded-xl"
              />
            </div>
          </form>

          <button className="flex flex-row h-[50px] bg-green-700 w-[90%] rounded-xl items-center justify-center text-white  gap-3">
            <span>
              <FaWhatsapp className="text-2xl" />
            </span>
            <span>Send Via Whataap</span>
          </button>

          <div>
            <p className="text-gray-300 font-sm pb-10 text-center">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
