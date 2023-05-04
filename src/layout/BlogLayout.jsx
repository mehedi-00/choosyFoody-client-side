/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../component/shared/Header';
import { Outlet } from 'react-router-dom';
import Footers from '../component/shared/Footers';
const BlogLayout = () => {
    return (
        <>
           <Header/>
           <Outlet/>
            <Footers/>
        </>
    );
};

export default BlogLayout;