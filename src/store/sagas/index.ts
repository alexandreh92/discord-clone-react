import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

/* Types */

/* Sagas */

import AuthSagas from './auth/sagas';
import ServersSagas from './servers/sagas';
import RoomsSagas from './rooms/sagas';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([...AuthSagas, ...ServersSagas, ...RoomsSagas]);
}
