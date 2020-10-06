import { createReducer } from 'reduxsauce';

import Creators, { MessagesTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  rooms: [],
};

/* Reducers */

export const handleGetRooms = (
  state: IState,
  { rooms }: ISetPropAction
): IState => ({
  ...state,
  rooms,
});

export const handleAddMessage = (
  state: IState,
  { message }: ISetPropAction
): IState => ({
  ...state,
  rooms: [
    ...state.rooms.map((room) =>
      room.room_id === message.room_id
        ? { ...room, messages: [...room.messages, message] }
        : room
    ),
  ],
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_ROOM_MESSAGES]: handleGetRooms,
  [Types.ADD_MESSAGE]: handleAddMessage,
});
