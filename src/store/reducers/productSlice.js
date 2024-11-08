import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';

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
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
		filterProducts: (state, action) => {
			state.filteredProducts = state.products.filter((product) => product.category === action.payload);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.fulfilled, (state, { payload }) => {
				state.products = payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				console.log(action);
			});
	}
});

export const { addProduct, filterProducts } = productSlice.actions;
export default productSlice.reducer;
