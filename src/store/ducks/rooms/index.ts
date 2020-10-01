import { createReducer } from 'reduxsauce';

import Creators, { RoomsTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

import { Room } from '~/@types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  rooms: [],
  currentRoom: {} as Room,
};

/* Reducers */

export const handleGetRooms = (
  state: IState,
  { rooms }: ISetPropAction
): IState => ({ ...state, rooms, currentRoom: rooms[0] });

export const handleAddRoom = (
  state: IState,
  { room }: ISetPropAction
): IState => ({ ...state, rooms: [...state.rooms, room] });

export const handleSetDefaultRoom = (
  state: IState,
  { room }: ISetPropAction
): IState => ({ ...state, currentRoom: room });

export const handleAddMessage = (
  state: IState,
  { message }: ISetPropAction
): IState => ({
  ...state,
  rooms: [
    ...state.rooms.map((room) =>
      room.id === message.room_id
        ? { ...room, messages: [...room.messages, message] }
        : room
    ),
  ],
  currentRoom: {
    ...state.currentRoom,
    messages: [...state.currentRoom.messages, message],
  },
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_ROOMS_SUCCESS]: handleGetRooms,
  [Types.ADD_ROOM]: handleAddRoom,
  [Types.SET_DEFAULT_ROOM]: handleSetDefaultRoom,
  [Types.ADD_MESSAGE]: handleAddMessage,
});
