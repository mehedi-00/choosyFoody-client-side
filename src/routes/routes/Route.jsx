/* eslint-disable no-unused-vars */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import Home from '../../pages/Home';
import LoginLayout from '../../layout/LoginLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import VewRecipes from '../../component/VewRecipes';
import PrivetRoute from '../PrivetRoute';
import BlogLayout from '../../layout/BlogLayout';
import Blog from '../../pages/Blog';

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
                element:  <PrivetRoute><VewRecipes/></PrivetRoute>,
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
    },{
        path: '/blog',
        element: <BlogLayout/>,
        children: [
            {
                path: '/blog',
                element: <Blog/>,
                loader: ()=> fetch('http://localhost:5000/blogs')

            }
        ]
    }
]);
export default router

