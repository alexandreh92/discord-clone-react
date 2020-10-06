import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

/* Sagas */

import AuthSagas from './auth/sagas';
import MessagesSagas from './messages/sagas';
import ServersSagas from './servers/sagas';
import RoomsSagas from './rooms/sagas';

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([
    ...AuthSagas,
    ...ServersSagas,
    ...RoomsSagas,
    ...MessagesSagas,
  ]);
}
