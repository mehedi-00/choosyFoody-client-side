/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from 'flowbite-react';
import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Chef = ({ chef }) => {
    const { id, name, image, experience, recipes, likes } = chef;
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <div className='flex justify-between'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <span className='flex '> <FaThumbsUp className='w-5 h-5 text-indigo-500 me-2' /> {likes} </span>
                </div>
                <div className='flex justify-between'>
                    <p>{experience}</p>
                    <p>{recipes.length} Recipes</p>
                </div>

                <Link to={`/chef/${id}`} className='btn-primary py-5'>View Recipes </Link>
            </Card>
        </div>
    );
};

export default Chef;