/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Chefs = () => {
    const chefs = useLoaderData();
    return (
        <div className='mt-28 px-20 mb-10'>
            <div className="section-title  grid grid-cols-1 justify-center items-center ">
                <div className='flex w-1/4 mx-auto space-x-3'>
                    <div className='w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                <h2 className='text-4xl font-vibes text-primary'>Our </h2>
                    <div className='w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                
                </div>
                <div className=''>
                    <h3 className='text-center font-popins font-medium text-6xl my-3'>Chef</h3>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-20">
                {
                    chefs.map(chef=> <Chef chef={chef} key={chef.id}/>)
                }
            </div>
        </div>
    );
};

export default Chefs;