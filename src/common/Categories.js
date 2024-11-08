import { Grid2 as Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/reducers/categorySlice';
import { setProductCategory } from '../store/reducers/filterSlice';
import { ALL } from '../constants';

const Categories = () => {
	const { categories } = useSelector((state) => state.category);
	const { category: savedCategory } = useSelector((state) => state.filter.productFilter);

	const [category, setCategory] = useState(savedCategory || ALL);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const handleCategoryChange = (event, newCategory) => {
		setCategory(newCategory);
		dispatch(setProductCategory(newCategory));
		// Filter out Products
	};

	return (
		<Grid container justifyItems='center' justifyContent='center' paddingTop='24px' paddingBottom='24px'>
			<ToggleButtonGroup value={category} exclusive onChange={handleCategoryChange}>
				{['All', ...categories].map((cat) => (
					<ToggleButton value={cat} aria-label={cat} key={cat}>
						{cat}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</Grid>
	);
};

export default Categories;
