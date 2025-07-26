import React from "react";
import CoreValueCard from "../Card/CoreValueCard";
import WelcomeToLivia from "./WelcomeToLivia";
import Footer from "../component/Footer"

const OurCoreValue = () => {
  return (
    <div>
      <div className="w-full bg-gray-100 py-20 flex flex-col items-center gap-10 ">
        <div>
          <h1 className="font-semibold text-4xl">Our Core Values</h1>
        </div>

        <div>
          <CoreValueCard />
        </div>
      </div>

      <div>
        <WelcomeToLivia />
      </div>

      <div>
        <Footer/>
      </div>



    </div>
  );
};

export default OurCoreValue;
