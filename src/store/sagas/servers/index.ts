import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/servers/types';
import ServersActions from '~/store/ducks/servers';

import api from '~/services/api';

export function* getServers(): SagaIterator {
  const { getServersSuccess } = ServersActions;
  try {
    const res = yield call(api.get, '/servers');
    yield put(getServersSuccess(res.data));
  } catch (err) {
    console.log(err);
  }
}
