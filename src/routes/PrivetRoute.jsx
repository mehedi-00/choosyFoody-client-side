/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import loader from '/assets/loader-food.gif';
const PrivetRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <span className='w-screen bg-black flex justify-center '><img src={loader} alt="" /></span>;
   }
   if (user) {
      return children;
   }
   return <Navigate to='/login'></Navigate>;
};

export default PrivetRoute;