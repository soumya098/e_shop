import { Grid2 as Grid } from '@mui/material';
import React from 'react';
import Categories from '../../common/Categories';

const Home = () => {
	return (
		<Grid container flexDirection='column' margin='0 auto' spacing={2}>
			<Categories />
		</Grid>
	);
};

export default Home;
