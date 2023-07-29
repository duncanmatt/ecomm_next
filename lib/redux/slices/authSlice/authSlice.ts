import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from '../../../../interfaces';

const initialState: AuthSliceState = {
	loading: false,
	success: false,
	error: null,
	profile: {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	},
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile.email = action.payload.email;
		},
	},
});

export const { setProfile } = authSlice.actions;

export default authSlice.reducer;
