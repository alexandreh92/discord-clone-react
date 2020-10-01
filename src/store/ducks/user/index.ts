import { createReducer } from 'reduxsauce';

import { AuthTypes } from '~/store/ducks/auth/creators';
import Creators, { UserTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  username: '',
  email: '',
};

/* Reducers */

export const handleSignInSuccess = (
  state: IState,
  { user }: ISetPropAction
): IState => ({ ...state, ...user });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [AuthTypes.SIGN_IN_SUCCESS]: handleSignInSuccess,
});
