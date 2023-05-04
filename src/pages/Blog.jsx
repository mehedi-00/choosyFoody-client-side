import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import SingleBlog from '../component/SingleBlog';
const ref = React.createRef();

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <>
            <div className="blog-banner pt-28 px-20 bg-[url('https://cdn.pixabay.com/photo/2017/09/16/16/09/sea-2755908_960_720.jpg')] h-[60vh] relative z-80 flex justify-center items-center" >
                <div className='z-50'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} title='Download pdf' className=' btn-primary '>
                            Download To Pdf
                        </button>}
                    </Pdf>
                </div>


            </div>
            <div className='md:px-20 my-28'>
                <div ref={ref}>
                <h2 className='text-center font-popins text-2xl font-extrabold'> Some Quetsion and Answer</h2>
                        <div className='grid md:grid-cols-2 gap-8 mt-20'>
                                {
                                    blogs.map(blog=> <SingleBlog key={blog.id} blog={blog}/>)
                                }
                        </div>
                </div>
            </div>
        </>
    );
};

export default Blog;