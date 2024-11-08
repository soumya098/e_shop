import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productFilter: {
		category: 'All',
		sortOrder: 'Default',
		searchedText: ''
	}
	// Add other filters as needed (e.g., color, size, etc.)
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setProductPriceRange: (state, action) => {
			state.productFilter.priceRange = {
				min: action.payload.min,
				max: action.payload.max
			};
		},
		setProductCategory: (state, { payload, type }) => {
			console.log(type); // Returns 'filter/setProductCategory' which is the action type
			state.productFilter.category = payload;
		},
		setProductSortOrder: (state, { payload }) => {
			state.productFilter.sortOrder = payload;
		}
	}
});

export const { setProductCategory, setProductFilter, setProduct } = filterSlice.actions;

export default filterSlice.reducer;
