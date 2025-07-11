import React from 'react';
import "../app.css";

const Hero = () => {
  return (
    <div className='banner-img flex flex-col md:flex-row p-6 md:p-20 gap-10'>
      
      {/* Left Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center md:items-start items-center '>
        <h3 className='text-xl md:text-2xl font-semibold mb-2'>Sell on 1mdm.com</h3>

        <div className='flex flex-col gap-8 justify-between'>
          <h1 className='text-5xl font-semibold md:text-left text-center leading-tight'>
            Reach millions of B2B buyers globally
          </h1>

          <div className='flex gap-4  justify-center md:items-start '>
            <button className='cursor-pointer corner-popup-btn w-full sm:w-auto'>
              Start Selling
            </button>
            <button className='border border-red-600 bg-white  hero-popup-btn cursor-pointer w-full sm:w-auto'>
              Chat with Consultant
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-6'>
        <div className='w-full max-w-xs'>
          <h4 className='text-2xl md:text-3xl font-semibold md:text-left text-center'>26,000,000</h4>
          <p className='text-base md:text-lg md:text-left text-center'>active buyers globally</p>
        </div>

        <div className='w-full max-w-xs'>
          <h4 className='text-2xl md:text-3xl font-semibold md:text-left text-center'>400,000</h4>
          <p className='text-base md:text-lg md:text-left text-center'>product inquiries daily</p>
        </div>

        <div className='w-full max-w-xs'>
          <h4 className='text-2xl md:text-3xl font-semibold md:text-left text-center'>200</h4>
          <p className='text-base md:text-lg md:text-left text-center'>countries and regions represented</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
