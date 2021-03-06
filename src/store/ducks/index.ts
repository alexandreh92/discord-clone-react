import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as messages } from './messages';
import { reducer as user } from './user';
import { reducer as rooms } from './rooms';
import { reducer as servers } from './servers';

export default combineReducers({
  auth,
  messages,
  user,
  rooms,
  servers,
});
