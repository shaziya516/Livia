import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="relative w-full h-[450px]">
      <div
        className="w-full h-full bg-cover bg-center absolute inset-0 flex items-center justify-center rounded-lg"
        style={{ backgroundImage: `url('/background-D6NpPWaS.jpg')` }}
      >
        <div className="max-w-[80%] relative z-10 text-center text-white bg-black/60 px-6 py-10 rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-green-400">Premium Beauty Collection</h1>
          <h3 className="text-lg mb-6 text-green-200">Enhance your glow with our best-selling skincare range.</h3>

           <Link to="/shop">
          <button
            
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-3xl transition duration-300"
          >
            Shop Now


          </button></Link> 
          



        </div>
      </div>
    </div>
  );
};
export default Banner