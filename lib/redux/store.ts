import {
	configureStore,
	type ConfigureStoreOptions,
	type ThunkAction,
	type Action,
} from '@reduxjs/toolkit';
import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
	type TypedUseSelectorHook,
} from 'react-redux';
