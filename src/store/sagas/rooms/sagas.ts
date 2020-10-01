import { takeLatest } from 'redux-saga/effects';

import { RoomsTypes } from '~/store/ducks/rooms/creators';
import { createMessage, getRooms } from '.';

const sagas = [
  takeLatest(RoomsTypes.GET_ROOMS_REQUEST, getRooms),
  takeLatest(RoomsTypes.CREATE_MESSAGE, createMessage),
];

export default sagas;
