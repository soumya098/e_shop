import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

let navigateTo; // make navigateTo work outside of the react components

const NavigationProvider = ({ children }) => {
	const navigate = useNavigate();
	const memoizedNavigate = useCallback((path) => navigate(path), [navigate]);

	useEffect(() => (navigateTo = memoizedNavigate), [memoizedNavigate]);

	return <>{children}</>;
};

export { NavigationProvider, navigateTo };
