import { takeLatest } from 'redux-saga/effects';

import { ServersTypes } from '~/store/ducks/servers/creators';
import { getServers } from '.';

const sagas = [takeLatest(ServersTypes.GET_SERVERS_REQUEST, getServers)];

export default sagas;
