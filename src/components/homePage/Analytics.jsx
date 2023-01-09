import React from 'react';
import Laptop from '../../assets/images/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="Analytics">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>SOLVE YOUR FINANCE PROBLEM WITH US</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage your Finance from here.</h1>
          <p>
            Your anytime money, your easy to access, meets your specific needs and enhances your life experiences. Meet now!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
