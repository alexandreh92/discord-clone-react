import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/auth/types';
import AuthActions from '~/store/ducks/auth';

import api from '~/services/api';

export function* signIn({ username, password }: ISetPropAction): SagaIterator {
  const { signInSuccess } = AuthActions;

  try {
    const res = yield call(api.post, '/sessions', { username, password });

    console.log(res);

    const token = res.headers.authorization.replace('Bearer ', '');

    const { user } = res.data;

    yield put(signInSuccess(token, user));
  } catch (err) {
    console.log(err);
  }
}
