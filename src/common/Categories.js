import { Grid2 as Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/reducers/categorySlice';
import { clearFilters, setProductCategory } from '../store/reducers/filterSlice';
import { ALL } from '../constants';
import useSyncStateWithBroadcastChannel from '../hooks/useSyncStateWithBroadcastChannel';

const Categories = () => {
	const { categories } = useSelector((state) => state.category);
	const { category: savedCategory } = useSelector((state) => state.filter.productFilter);
	const [category, setCategory] = useState(savedCategory || ALL);
	const dispatch = useDispatch();
	const syncCategoryAcrossTabs = useSyncStateWithBroadcastChannel('categorySyncChannel');

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(clearFilters());
	}, [dispatch]);

	useEffect(() => {
		setCategory(savedCategory || ALL);
	}, [savedCategory]);

	const handleCategoryChange = (event, newCategory) => {
		if (newCategory !== null) {
			setCategory(newCategory);
			dispatch(setProductCategory(newCategory));
			syncCategoryAcrossTabs(newCategory); // Send to other tabs
		}
	};

	return (
		<Grid container justifyItems='center' justifyContent='center' paddingTop='24px' paddingBottom='24px'>
			<ToggleButtonGroup value={category} exclusive onChange={handleCategoryChange}>
				{[ALL, ...categories].map((cat) => (
					<ToggleButton value={cat} aria-label={cat} key={cat}>
						{cat}
					</ToggleButton>
				))}
			</ToggleButtonGroup>
		</Grid>
	);
};

export default Categories;
