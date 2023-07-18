import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../../interfaces';

const initialState: CartSliceState = {
	items: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.items.find(
				(product: Product) => product.pk === action.payload.pk,
			);
			if (item) {
				item.qty++;
			} else {
				state.items.push({ ...action.payload, qty: 1 });
			}
		},
		incrementQty: (state, action) => {
			const product = state.items.find(
				(item: Product) => item.pk === action.payload,
			);

			if (product) {
				product.qty++;
			}
		},
		decrementQty: (state, action) => {
			const product = state.items.find(
				(item: Product) => item.pk === action.payload,
			);
			if (product) {
				product.qty === 1 ? (product.qty = 1) : product.qty--;
			}
		},
		removeItem: (state, action) => {
			const prodIdx = state.items.findIndex(
				(item: Product) => item.pk === action.payload,
			);

			if (prodIdx !== -1) {
				state.items.splice(prodIdx, 1);
			}
		},
		getTotal: state => {
			let { total } = state.items.reduce(
				(cartTotal: any, cartItems: any) => {
					const { price, qty } = cartItems;
					const prodTotal = price * qty;
					cartTotal.total += prodTotal;
					return cartTotal;
				},
				{ total: 0 },
			);
			state.totalPrice = total;
		},
	},
});

export const { addToCart, incrementQty, decrementQty, removeItem, getTotal } =
	cartSlice.actions;

export interface CartSliceState {
	items: Product[];
	totalPrice: number;
}

export default cartSlice.reducer;
