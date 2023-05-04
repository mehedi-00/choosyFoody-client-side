/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { Button, Spinner } from 'flowbite-react';

const Chefs = () => {
   
    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false);
            });
    }, []);

    // if (isLoading) {

    //     return <div className='absolute inset-0 bg-black z-50'>
    //         <Button color="gray" className='mx-auto'>
    //             <Spinner aria-label="Alternate spinner button example" />
    //             <span className="pl-3">
    //                 Loading...
    //             </span>
    //         </Button>
    //     </div>;
    // }


    return (
        <div className=' mt-14 md:mt-28 md:px-20 mb-10'>

            <div className="section-title  grid grid-cols-1 justify-center items-center ">
                <div className='flex md:w-1/4 mx-auto space-x-3'>
                    <div className='w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>
                    <h2 className='text-4xl font-vibes text-primary'>Our </h2>
                    <div className='w-24 h-1 bg-primary inline-flex mt-auto mb-5 rounded-e-md rounded-s-md'></div>

                </div>
                <div className=''>
                    <h3 className='text-center font-popins font-medium text-6xl my-3'>Chef</h3>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">
                {
                    chefs.map(chef => <Chef chef={chef} key={chef.id} />)
                }
            </div>
        </div>
    );
};

export default Chefs;