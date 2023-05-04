/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => {
    return (
        <div className='md:mx-20 my-28 grid md:grid-cols-2 bg-orange-200'>
            <div>
                <img src="https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006644.jpg?w=740&t=st=1683135117~exp=1683135717~hmac=47143aa388afdbd0cdc5058631b3ed5d8b87bd401349b06c383f80677ecd607f" alt="" />
            </div>
            <div className="section-title flex flex-col justify-center">
                <div className=' px-8 py-12'>
                    <div className='flex  mx-auto space-x-3'>
                        <div className=' w-20 md:w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                        <h2 className='text-4xl font-vibes text-primary'>About Us </h2>
                        <div className='w-20 md:w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                    </div>
                    <p className='my-5 font-popins text-slate-800'>We are a family-owned and operated restaurant that has been serving delicious food to our community for over 20 years. Our passion for food and dedication to quality is reflected in every dish we serve</p>
                </div>
            </div>
        </div>
    );
};

export default About;