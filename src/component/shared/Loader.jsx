/* eslint-disable no-unused-vars */
import React from 'react';
import loader from '/assets/loader-food.gif';

const Loader = () => {
    return (
        <div>
            <span className='w-screen h-screen bg-black flex justify-center '>
            <img src={loader} alt="" />
        </span>I
        </div>
    );
};

export default Loader;