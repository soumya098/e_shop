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
		clearFilters: (state) => {
			Object.assign(state, initialState);
		},
		setProductSearchedText: (state, action) => {
			state.productFilter.searchedText = action.payload;
		},
		setProductCategory: (state, { payload, type }) => {
			state.productFilter.category = payload;
		},
		setProductSortOrder: (state, { payload }) => {
			state.productFilter.sortOrder = payload;
		}
	}
});

export const { clearFilters, setProductCategory, setProductSearchedText } = filterSlice.actions;

export default filterSlice.reducer;
