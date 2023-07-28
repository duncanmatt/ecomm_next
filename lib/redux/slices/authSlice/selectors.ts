import type { ReduxState } from '../../store';

export const user = (state: ReduxState) => state.auth.user;
