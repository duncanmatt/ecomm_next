import type { ReduxState } from '../../store';
import { Profile } from '../../../../interfaces';

export const userProfile = (state: ReduxState): Profile => state.auth.profile;
