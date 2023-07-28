import { cartSlice } from './slices/cartSlice';
import { userSlice } from './slices/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
	cart: cartSlice.reducer,
	user: userSlice.reducer,
});
