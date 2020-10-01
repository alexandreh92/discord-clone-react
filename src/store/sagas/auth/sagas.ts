import { takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth/creators';
import { signIn } from '.';

const sagas = [takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)];

export default sagas;
