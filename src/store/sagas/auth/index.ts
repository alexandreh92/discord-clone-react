import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/auth/types';

export function* signIn({ username, password }: ISetPropAction): SagaIterator {
  const teste = 'oi';
}
