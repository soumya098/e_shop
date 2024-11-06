import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { navigateTo } from '../../common/Navigation';

const initialState = {
	roles: [],
	isAdmin: false,
	isLoggedIn: false,
	loading: false,
	error: null
};

export const loginUser = createAsyncThunk('user/login', async ({ email, password }, { rejectWithValue }) => {
	try {
		const {
			data: { token, userId }
		} = await api.login({ username: email, password: password });

		const userDetails = await api.fetchUserDetails(userId);
		console.log(userDetails.data);

		return { token, userId, roles: userDetails.data.roles };
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
				roles: []
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
			.addCase(loginUser.fulfilled, (state, { payload }) => {
				const roles = payload.roles.map((role) => role.name);
				Object.assign(state, {
					loading: false,
					isLoggedIn: true,
					roles: roles,
					isAdmin: roles.includes('ADMIN')
				});
				console.log(state);
				localStorage.setItem('token', payload.token);
				navigateTo('/');
			})
			.addCase(loginUser.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	}
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
