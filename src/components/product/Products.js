import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterProducts } from '../../store/reducers/productSlice';
import { Grid2 as Grid } from '@mui/material';
import Product from './Product';

const Products = () => {
	const { category, searchedText } = useSelector((state) => state.filter.productFilter);
	const dispatch = useDispatch();
	const { filteredProducts } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterProducts({ category, searchedText }));
	}, [dispatch, category, searchedText]);

	return (
		<Grid container spacing={4} rowSpacing={8} paddingBottom={10} justifyContent='center'>
			{filteredProducts.length > 0 ? (
				filteredProducts.map((product) => (
					<Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }} display='flex' justifyContent='center'>
						<Product {...product} />
					</Grid>
				))
			) : (
				<h3>No products have added.</h3>
			)}
		</Grid>
	);
};

export default Products;
