import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/reducers/productSlice';
import { Grid2 as Grid } from '@mui/material';
import Product from './Product';

const Products = () => {
	const { products } = useSelector((state) => state.product);
	const dispatch = useDispatch();
	console.log(products.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Grid container spacing={8} rowSpacing={6} paddingBottom={10}>
			{products.map((product) => (
				<Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }} display='flex' justifyContent='center'>
					<Product {...product} />
				</Grid>
			))}
		</Grid>
	);
};

export default Products;
