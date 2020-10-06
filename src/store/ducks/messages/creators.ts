import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    addMessage: ['message', 'room_id'],
    getRoomMessages: ['rooms'],
  },
  { prefix: '@messages/' }
);

export const MessagesTypes = Types;
export default Creators;
