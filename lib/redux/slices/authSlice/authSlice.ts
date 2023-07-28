import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from '../../../../interfaces';

const initialState: AuthSliceState = {
	user: null,
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});
