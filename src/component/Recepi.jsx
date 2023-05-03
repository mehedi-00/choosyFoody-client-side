/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaHeart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Recepi = ({recipe}) => {
    const [favaroite, setFavaroite] = useState(true);

    const handleFavaroute = () => {
        toast('SuccessFully Added Favourite',{
            style: {color: 'red'}
        });
        setFavaroite(false);
    };
    return (
        <Card className='shadow-2xl'>
            <Toaster />
        <img className='h-[250px]' src={recipe.img} alt="" />
        <div className='flex justify-between'>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {
                    recipe?.name
                }
            </h5>
            <button disabled={!favaroite} onClick={handleFavaroute}> <FaHeart className={  favaroite? 'w-5 h-5 text-zinc-300 shadow-xl': 'w-5 h-5 text-red-800 shadow-xl' } /></button>
        </div>
        <p>{recipe?.cookingMethod.slice(0, 120)}</p>
        <h4 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
            Ingredients:
        </h4>
        <div className='mb-10'>
            {
                recipe?.ingredients.map((data, index) =>
                    <p className='text-slate-500 my-0' key={index}> {index + 1} . {data}</p>
                )
            }
        </div>
        <div className='flex space-x-2 items-center'>
            <Rating style={{ maxWidth: 150 }} value={recipe.ratting} readOnly />
            <span>
                {recipe.ratting}
            </span>
        </div>
    </Card>
    );
};

export default Recepi;