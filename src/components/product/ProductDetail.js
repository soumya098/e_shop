import { Container, Grid2 as Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../common/Categories';
import ProductInfo from './ProductInfo';

const ProductDetail = () => {
	const { id } = useParams();

	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2} direction='column' justifyContent='center'>
				<Categories />
				<ProductInfo id={id} />
			</Grid>
		</Container>
	);
};

export default ProductDetail;
