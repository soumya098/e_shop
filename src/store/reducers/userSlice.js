import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		roles: [],
		loading: false,
		error: null
	},
	reducers: {
		clearUser: (state) => {
			state.roles = [];
			state.loading = false;
			state.error = null;
		}
	},
	extraReducers: (builder) => {}
});

export const { clearUser } = userSlice.actions;

export default userSlice.reducer;
