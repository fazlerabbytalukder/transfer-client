import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';



const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading, isAdminLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <CircularProgress />
    }
    if (isAdminLoading) {
        return <CircularProgress />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}}/>
};

export default AdminRoute;