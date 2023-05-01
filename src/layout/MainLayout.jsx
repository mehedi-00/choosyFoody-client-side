/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../component/shared/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
         <Header/>   
         <Outlet/>
        </>
    );
};

export default MainLayout;