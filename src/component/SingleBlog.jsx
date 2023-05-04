import React from 'react';

const SingleBlog = ({blog}) => {
    return (
        <div className=' bg-red-200 p-5'>
             <h2 className='font-popins text-2xl font-bold mb-8'> {blog.question} </h2>
             <p className='font-popins  font-medium text-slate-600 '> {blog.answer} </p>
        </div>
    );
};

export default SingleBlog;