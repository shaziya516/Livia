import React from 'react';
import StoriesAndMission from '../component/StoriesAndMission';
import OurCoreValue from '../component/OurCoreValue';

const About = () => {
  return (
    <div>
      <div
        className="w-full h-[450px] bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url('/about-bg_files/logo.jpg')`,
          backgroundSize: '100%',
        }}>
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-t from-green-50 via-emerald-100/80 to-teal-100/70 flex flex-col items-center justify-center gap-5">

        <h1 className='font-bold text-6xl text-gray-800'>About Livia</h1>
        <p className='font-normal text-lg text-gray-800 text-center'>Nourishing skin, uplifting souls since 2012. Discover our journey of pure, handmade <br /> beauty.</p>
        
        
        
        </div>
      </div>

      <div>
        <StoriesAndMission/>
      </div>

      <div>
        <OurCoreValue/>
      </div>


     

    </div>
  );
};

export default About;
