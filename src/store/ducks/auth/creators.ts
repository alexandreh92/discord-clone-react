import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    signInRequest: ['username', 'password'],
    signInSuccess: ['token', 'user'],
  },
  { prefix: '@auth/' }
);

export const AuthTypes = Types;
export default Creators;
