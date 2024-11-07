import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { navigateTo } from '../../common/Navigation';
import { showToast } from '../../common/Toast';

const initialState = {
	userDetails: {},
	roles: [],
	isAdmin: false,
	isLoggedIn: false,
	loading: false,
	error: null
};

export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
	try {
		const {
			data: { id, roles }
		} = await api.login({ username: email, password });

		const { data } = await api.fetchUserDetails(id);

		return { data, roles };
	} catch (error) {
		return rejectWithValue(error.response?.data || 'An error occurred!');
	}
});

export const createUser = createAsyncThunk('user/signup', async (data, { rejectWithValue }) => {
	try {
		await api.signUp(data);
		return 'User created successfully!';
	} catch (error) {
		return rejectWithValue(error.response?.data || 'An error occurred!');
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUser: (state) => {
			Object.assign(state, {
				loading: false,
				isAdmin: false,
				isLoggedIn: false,
				error: null,
				roles: [],
				userDetails: {}
			});

			navigateTo('/');
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, { payload: { data, roles } }) => {
				Object.assign(state, {
					loading: false,
					isLoggedIn: true,
					roles: roles,
					isAdmin: roles.includes('ADMIN'),
					userDetails: data
				});
				console.log(state);
				navigateTo('/');
				showToast({
					type: 'success',
					message: 'login successful'
				});
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	}
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
