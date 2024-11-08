import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

const initialState = {
	categories: []
};

export const fetchCategories = createAsyncThunk('category/fetch', async (_, { rejectWithValue }) => {
	try {
		const { data } = await api.fetchAllCategories();

		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		clearCategories: (state) => {
			state.categories = [];
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.fulfilled, (state, { payload }) => {
				state.categories = payload;
			})
			.addCase(fetchCategories.rejected, (state, { payload }) => {
				console.log('Error: ', payload);
			});
	}
});

export const { clearCategories } = categorySlice.actions;

export default categorySlice.reducer;