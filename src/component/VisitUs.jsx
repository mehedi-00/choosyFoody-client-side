/* eslint-disable no-unused-vars */
import React from 'react';

const VisitUs = () => {
    return (
        <div className=' mx-5 md:mx-20 my-28 grid md:grid-cols-2 '>
            <div className='mb-10 md:mb-0 flex flex-col items-center justify-center'>
                <div >
                <h2 className='text-primary font-popins text-5xl font-extrabold'>Visit Us</h2>
                <p className='my-5 text-slate-600'>121 Rock Sreet, 21 Avenue, Pakistan, NY 92103-9000</p>
                <h4 className='mt-12 text-2xl font-popins text-primary'>HOURS</h4>
                <p>Monday – Saturday <br />
                    9am – 7pm</p>
                <h4 className='mt-12 text-2xl font-popins text-primary'>PHONE</h4>
                <p>1 (234) 567-891</p>
                </div>
            </div>
            <div>
                <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1f253e1c8d55655a84ff9f2/s-min.jpg" alt="" />
            </div>
        </div>
    );
};

export default VisitUs;