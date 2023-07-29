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
		verified: false,
	},
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.profile.email = action.payload.email;
			state.profile.verified = action.payload.verified;
			state.profile.id = action.payload.id;
		},
	},
});

export const { setProfile } = authSlice.actions;

export default authSlice.reducer;
