/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../component/shared/Header';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
    return (
        <>
           <Header/>
           <Outlet/>
            
        </>
    );
};

export default BlogLayout;