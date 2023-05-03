/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../component/shared/Loader';
const PrivetRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return <Loader/>
   }
   if (user) {
      return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;