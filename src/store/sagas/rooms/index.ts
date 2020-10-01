import { SagaIterator } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { ISetPropAction } from '~/store/ducks/rooms/types';
import RoomsActions from '~/store/ducks/rooms';

import api from '~/services/api';

const { getRoomsSuccess } = RoomsActions;

export function* getRooms(): SagaIterator {
  try {
    const res = yield call(api.get, '/rooms');
    yield put(getRoomsSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}

export function* createMessage({
  room_id,
  content,
}: ISetPropAction): SagaIterator {
  try {
    yield call(api.post, '/messages', { room_id, content });
  } catch (err) {
    console.log(err);
  }
}
