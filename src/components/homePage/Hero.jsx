import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='bg-black text-white' id="Hero">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          @POWERED BY
        </p>
        <h1 className='md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>
          A K ASSOCIATES
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            GET INSTANT 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['HOME LOAN', 'PROPERTY LOAN', 'BUSINESS LOAN']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>No need to worry about your Finance. Financial Solutions is for you..</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
