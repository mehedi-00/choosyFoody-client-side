/* eslint-disable no-unused-vars */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import Home from '../../pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('http://localhost:5000/chefs')
            }
        ]
    }
]);
export default router

