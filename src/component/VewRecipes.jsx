/* eslint-disable no-unused-vars */
import { Card } from 'flowbite-react';
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Recepi from './Recepi';
import Loader from './shared/Loader';

const VewRecipes = () => {
    const chef = useLoaderData();

    const { id, name, image, experience, recipes, likes, description } = chef;

    return (
        <>

            <div className='py-28 bg-zinc-500 flex px-20 items-center'>
                <div className='w-2/4'>
                    <img src={image} className='h-[350px]' alt="" />
                </div>
                <div className='w-2/4'>
                    <h2 className='text-primary text-5xl font-bold font-vibes tracking-[0.4em]'>
                        {name}
                    </h2>
                    <p className='text-zinc-100 font-popins'> {experience} of experience </p>
                    <p className='mt-10  text-white'>{description}</p>
                </div>
            </div>
            <div className="mt-20 mb-10 px-20">
                <h2 className='text-3xl font-popins font-extrabold text-center'> Recipes</h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    {
                        recipes.map(recipe => <Recepi key={recipe.id} recipe={recipe} />)
                    }
                </div>
            </div>

        </>
    );
};

export default VewRecipes;