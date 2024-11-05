import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

// Configure persist settings
const persistConfig = {
	key: 'e_shop_root',
	storage
};

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with persisted reducer and middleware
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
export default store;
