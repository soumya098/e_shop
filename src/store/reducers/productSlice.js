import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';
import { ALL } from '../../constants';

const initialState = {
	products: [],
	filteredProducts: [],
	selectedProduct: {},
	isLoading: false
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async (_, { rejectWithValue }) => {
	try {
		const { data: products } = await api.fetchAllProducts();

		return products;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id, { rejectWithValue, dispatch }) => {
	try {
		const { data } = await api.fetchProductById(id);
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id, { rejectWithValue }) => {
	try {
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
		},
		updateProductQuantity: (state, { payload }) => {
			state.selectedProduct = { ...state.selectedProduct, quantity: payload };
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

		builder
			.addCase(fetchProductById.pending, (state, { payload }) => {
				state.isLoading = true;
			})
			.addCase(fetchProductById.fulfilled, (state, { payload }) => {
				state.selectedProduct = { ...payload, quantity: 1 };
				state.isLoading = false;
			})
			.addCase(fetchProductById.rejected, (state, action) => {
				state.isLoading = false;
				console.log(action);
			});

		builder
			.addCase(deleteProduct.pending, (state, { payload }) => {})
			.addCase(deleteProduct.fulfilled, (state, { payload }) => {})
			.addCase(deleteProduct.rejected, (state, action) => {});
	}
});

export const { filterProducts, updateProductQuantity } = productSlice.actions;
export default productSlice.reducer;
