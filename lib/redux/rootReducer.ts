import { cartSlice } from './slices/cartSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
	cart: cartSlice.reducer,
});
