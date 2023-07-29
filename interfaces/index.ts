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

export interface Profile {
	id: string;
	firstName: string | undefined;
	lastName: string | undefined;
	email: string;
	password: string;
	verified: boolean;
}

export interface AuthSliceState {
	loading: boolean;
	success: boolean;
	error: string | null;
	profile: Profile;
}
