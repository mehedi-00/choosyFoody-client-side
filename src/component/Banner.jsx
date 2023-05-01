/* eslint-disable no-unused-vars */
import React from 'react';
import banner from '/assets/home-banner.jpg'
const Banner = () => {
    return (
        <div className={`md:px-20  bg-[url('/assets/home-banner.jpg')] bg-center bg-no-repeat relative z-20 flex items-center`}>
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.7)] z-[1] ' ></div>
            
            <div className='w-2/4 text-white z-40 relative py-28'>
                <h2 className='font-vibes md:text-5xl text-primary '>Welcome to 
                <div className='md:w-48 h-[3px] bg-primary inline-flex ms-3 mb-2 font-bold'></div>
                 </h2>
                <h3 className='font-popins text-6xl my-8'>ChoosyFoody</h3>
                <p className='font-popins leading-8 font-normal'>
                    ChoosyFoody does the business where customers have the access as far-from-home everyday food needs
                    like on a one-stop-shop.
                   Our commitment is to collect fresh, locally produced, organic vegetables.
                  </p>
                  <button className='btn-primary text-2xl mt-8'>Subscribe</button>
            </div>
        </div>
    );
};

export default Banner;