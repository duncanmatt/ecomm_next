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

import {
	FLUSH,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	PAUSE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import { reducer } from './rootReducer';
import { middleware } from './middleware';

const createNoopStorage = () => {
	return {
		getItem(_key: any) {
			return Promise.resolve(null);
		},
		setItem(_key: any, value: any) {
			return Promise.resolve(value);
		},
		removeItem(_key: any) {
			return Promise.resolve();
		},
	};
};

const storage =
	typeof window !== 'undefined'
		? createWebStorage('local')
		: createNoopStorage();

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configureStoreDefaultOptions: ConfigureStoreOptions = { reducer };

export const makeReduxStore = (
	options: ConfigureStoreOptions = configureStoreDefaultOptions,
) => {
	const store = configureStore(options);
	return store;
};

export const reduxStore = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(middleware);
	},
});

export const persistor = persistStore(reduxStore);

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxStore = typeof reduxStore;

export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
	ReturnType,
	ReduxState,
	unknown,
	Action
>;
