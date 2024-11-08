import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import categoryReducer from './categorySlice';

export default combineReducers({
	user: userReducer,
	category: categoryReducer
});
