import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useAdmin from './Hooks/useAdmin';


function RequierAdmin({ children }) {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    let location = useLocation();


    if (!admin) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }


    return children;
}

export default RequierAdmin;