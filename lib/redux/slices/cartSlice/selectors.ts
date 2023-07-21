import type { ReduxState } from '../../store';

export const cartCount = (state: ReduxState) =>
	state.cart.items.reduce((acc, item) => acc + item.qty, 0);
export const cartItems = (state: ReduxState) => state.cart.items;
export const cartTotal = (state: ReduxState) =>
	state.cart.items.reduce((acc, item) => acc + item.qty * item.price, 0);
