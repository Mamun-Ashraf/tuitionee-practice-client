import React from 'react';
import { useAuth } from '../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading){
        return <h2>Loading...</h2>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to ='/login' state={{from:location}} replace />
    }
};

export default PrivateRoute;