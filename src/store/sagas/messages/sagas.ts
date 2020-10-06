import { takeLatest } from 'redux-saga/effects';

import { ServersTypes } from '~/store/ducks/servers/creators';
import { getRoomMessages } from '.';

const sagas = [takeLatest(ServersTypes.GET_SERVERS_SUCCESS, getRoomMessages)];

export default sagas;
