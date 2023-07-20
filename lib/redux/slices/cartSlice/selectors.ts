import type { ReduxState } from '../../store';

export const cartCount = (state: ReduxState) => state.cart.items.length;
export const cartItems = (state: ReduxState) => state.cart.items;
export const cartTotal = (state: ReduxState) => state.cart.totalPrice;
