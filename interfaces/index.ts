export interface Product {
	pk: string;
	sk: string;
	imgUrl: string;
	GSI1PK: string;
	GSI1SK: string;
	name: string;
	categoryId: number;
	productId: number;
	stock: number;
	type: string;
	price: string | number;
	desc: string;
}

export interface CartItem {
	pk: string;
	name: string;
	price: number;
	imgUrl: string;
	qty: number;
}

export interface SearchItem {
	pk: string;
	sk: string;
	imgUrl: string;
	productId: number;
	name: string;
	price: string | number;
}

export interface UserSliceState {
	user: null | object;
}
