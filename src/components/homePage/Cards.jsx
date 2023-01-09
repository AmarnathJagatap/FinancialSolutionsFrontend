import React from 'react';
import Single from '../../assets/images/single.png';
import Double from '../../assets/images/double.png';
import Triple from '../../assets/images/triple.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id="Services">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>HOME LOAN</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>LOW INTEREST</p>
                  <p className='py-2 border-b mx-8'>WITH SUBSIDY</p>
                  <p className='py-2 border-b mx-8'>PAY THROUGH EMI</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>BUSINESS LOAN</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>LOW INTEREST</p>
                  <p className='py-2 border-b mx-8'>WITH SUBSIDY</p>
                  <p className='py-2 border-b mx-8'>PAY THROUGH EMI</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>PROPERTY LOAN</h2>
              <p className='text-center text-4xl font-bold'>$</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>LOW INTEREST</p>
                  <p className='py-2 border-b mx-8'>WITH SUBSIDY</p>
                  <p className='py-2 border-b mx-8'>PAY THROUGH EMI</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
