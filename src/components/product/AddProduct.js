import React from 'react';
import { useSelector } from 'react-redux';

const AddProduct = () => {
	const { isLoggedIn } = useSelector((state) => state.user);
	console.log('hey:', isLoggedIn);

	return <div>AddProduct</div>;
};

export default AddProduct;
