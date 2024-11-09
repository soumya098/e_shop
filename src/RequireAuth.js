import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
	const { isLoggedIn } = useSelector((state) => state.user);

	return isLoggedIn ? <Outlet /> : <Navigate to='/login' replace />;
};

export default RequireAuth;
