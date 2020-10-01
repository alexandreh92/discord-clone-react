import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    getRoomsRequest: null,
    getRoomsSuccess: ['rooms'],
    addRoom: ['room'],
    setDefaultRoom: ['room'],
    addMessage: ['message'],
    createMessage: ['room_id', 'content'],
  },
  { prefix: '@rooms/' }
);

export const RoomsTypes = Types;
export default Creators;
