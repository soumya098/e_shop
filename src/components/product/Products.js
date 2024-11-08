import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productSlice';

const Products = () => {
	const { products } = useSelector((state) => state.product);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return <div>Products</div>;
};

export default Products;
