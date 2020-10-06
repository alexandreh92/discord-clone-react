import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/auth/types';
import MessagesActions from '~/store/ducks/messages';

import api from '~/services/api';

export function* getRoomMessages(): SagaIterator {
  const { getRoomMessages } = MessagesActions;

  try {
    const res = yield call(api.get, '/messages');

    yield put(getRoomMessages(res.data));
  } catch (err) {
    console.log(err);
  }
}
