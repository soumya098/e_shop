import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import categoryReducer from './categorySlice';
import filterReducer from './filterSlice';
import productReducer from './productSlice';
import addressReducer from './addressSlice';

export default combineReducers({
	user: userReducer,
	category: categoryReducer,
	product: productReducer,
	filter: filterReducer,
	address: addressReducer
});
