import { Container, Grid2 as Grid } from '@mui/material';
import React from 'react';
import Categories from '../../common/Categories';
import Products from '../product/Products';

const Home = () => {
	return (
		<Container maxWidth='xl'>
			<Grid container spacing={2} justifyContent='center'>
				<Categories />
				<Products />
			</Grid>
		</Container>
	);
};

export default Home;
