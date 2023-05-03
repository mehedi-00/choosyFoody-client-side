/* eslint-disable no-unused-vars */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import Home from '../../pages/Home';
import LoginLayout from '../../layout/LoginLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import VewRecipes from '../../component/VewRecipes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>,
                // loader: ()=> fetch('http://localhost:5000/chefs')
            },
            
            {
                path: '/chef/:id',
                element: <VewRecipes/>,
                loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout/>,
        children:[
            {
                path: '/login',
                element: <Login/>
            },
           
            {
                path: '/login/register',
                element: <Register/>
            }
        ]
    }
]);
export default router

