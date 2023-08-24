import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../../../../interfaces';

const initialState: CartSliceState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.items.find(
				(product: CartItem) => product.name === action.payload?.name,
			);
			if (item) {
				item.qty++;
			} else {
				state.items.push({
					name: action.payload?.name,
					qty: 1,
					price: action.payload?.price,
					pk: action.payload?.pk,
					imgUrl: action.payload?.imgUrl,
					size: action.payload?.size,
				});
			}
		},
		incrementQty: (state, action) => {
			const product = state.items.find(
				(item: CartItem) => item.pk === action.payload,
			);

			if (product) {
				product.qty++;
			}
		},
		decrementQty: (state, action) => {
			const product = state.items.find(
				(item: CartItem) => item.pk === action.payload,
			);
			if (product) {
				product.qty === 1 ? (product.qty = 1) : product.qty--;
			}
		},
		removeItem: (state, action) => {
			const prodIdx = state.items.findIndex(
				(item: CartItem) => item.pk === action.payload,
			);

			if (prodIdx !== -1) {
				state.items.splice(prodIdx, 1);
			}
		},
	},
});

export const { addToCart, incrementQty, decrementQty, removeItem } =
	cartSlice.actions;

export interface CartSliceState {
	items: CartItem[];
}

export default cartSlice.reducer;
