import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';
import { ALL } from '../../constants';

const initialState = {
	products: [],
	filteredProducts: []
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async (_, { rejectWithValue }) => {
	try {
		const { data: products } = await api.fetchAllProducts();

		return products;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		filterProducts: (state, { payload: { category, searchedText } }) => {
			const filteredProductsByCategory = category === ALL ? state.products : state.products.filter((product) => product.category === category);

			const result = searchedText ? filteredProductsByCategory.filter((product) => product.name.toLowerCase().includes(searchedText.toLowerCase())) : filteredProductsByCategory;

			state.filteredProducts = result;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, { payload }) => {
				state.products = payload;
				state.filteredProducts = payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				console.log(action);
			});
	}
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
