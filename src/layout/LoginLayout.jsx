/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../component/shared/Header';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <>
            <Header login={true}/>
            <Outlet/>
        </>
    );
};

export default LoginLayout;