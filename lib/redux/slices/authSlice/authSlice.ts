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
		emailVerified: '',
		password: '',
	},
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile.id = action.payload.id;
			state.profile.firstName = action.payload.firstName;
			state.profile.lastName = action.payload.lastName;
			state.profile.email = action.payload.email;
			state.profile.emailVerified = action.payload.emailVerified;
		},
	},
});

export const { setProfile } = authSlice.actions;

export default authSlice.reducer;
