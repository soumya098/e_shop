import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

const initialState = {
	allAddresses: [],
	selectedAddress: {},
	isLoading: false,
	error: ''
};

export const fetchAllAddress = createAsyncThunk('address/fetch', async (_, { rejectWithValue }) => {
	try {
		const { data } = await api.fetchAllAddress();
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

const addressSlice = createSlice({
	name: 'address',
	initialState,
	reducers: {
		setSelectedAddress: (state, { payload }) => {
			state.selectedAddress = state.allAddresses.find((address) => address.id === payload?.value);
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllAddress.pending, (state) => ({
				...state,
				isLoading: true
			}))
			.addCase(fetchAllAddress.fulfilled, (state, { payload }) => ({
				...state,
				allAddresses: payload,
				isLoading: false
			}))
			.addCase(fetchAllAddress.rejected, (state, { payload }) => ({
				...state,
				isLoading: false,
				error: payload
			}));
	}
});

export const { setSelectedAddress } = addressSlice.actions;
export default addressSlice.reducer;
