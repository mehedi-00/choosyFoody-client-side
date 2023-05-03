import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (

        <div className=" bg-slate-800 pt-28 px-20">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} title='Download pdf'className=' btn-primary'> 
                Download To Pdf
                 </button>}
            </Pdf>
            <div ref={ref}>
                
            </div>
        </div>
    );
};

export default Blog;