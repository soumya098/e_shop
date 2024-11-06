import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useGlobalNavigate = () => {
	const navigate = useNavigate();
	const navigateTo = useCallback((path) => navigate(path), [navigate]);

	return navigateTo;
};

export default useGlobalNavigate;
