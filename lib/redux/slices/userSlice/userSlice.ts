import { createSlice } from '@reduxjs/toolkit';
import { UserSliceState } from '../../../../interfaces';

const initialState: UserSliceState = {
	user: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});
