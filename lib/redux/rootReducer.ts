import { cartSlice } from './slices/cartSlice';
import { authSlice } from './slices/authSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
	cart: cartSlice.reducer,
	auth: authSlice.reducer,
});
