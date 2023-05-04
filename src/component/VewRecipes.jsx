/* eslint-disable no-unused-vars */
import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Recepi from './Recepi';
import Loader from './shared/Loader';
import { FaThumbsUp } from 'react-icons/fa';

const VewRecipes = () => {
    const chefid = useParams().id;
    const [chef, setChef] = useState(null);
    useEffect(() => {
        fetch(`https://choosyfoody-server-mehedi-00.vercel.app/chef/${chefid}`)
            .then(res => res.json())
            .then(data => setChef(data));
    }, []);
    if (!chef) {
        return <Loader />;
    }
    // const chef = useLoaderData();

    const { id, name, image, experience, recipes, likes, description, recepies_number } = chef;

    return (
        <>

            <div className='py-8 md:py-28 bg-zinc-500 flex md:px-20  space-x-5 items-center'>
                <div className='w-2/4'>
                    <img src={image} className='h-[350px]' alt="" />
                </div>
                <div className='w-2/4'>
                    <h2 className='text-primary text-3xl md:text-5xl font-bold font-vibes leading-5 md:leading-10 tracking-[0.1em]'>
                        {name}
                    </h2>
                    <div className="flex justify-between mt-5 text-lime-100">
                        <p className='text-zinc-100 font-popins'> {experience} of experience </p>
                        <p>{recepies_number} Recipes</p>
                        <span className='flex '> <FaThumbsUp className='w-5 h-5 text-primary me-2' /> {likes} </span>
                    </div>
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