import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Message, Room } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  rooms: Room[];
  room: Room;
  message: Message;
  messages: Message[];
  room_id: number;
  content: string;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_ROOMS_REQUEST: 'getRoomsRequest';
  GET_ROOMS_SUCCESS: 'getRoomsSuccess';
  ADD_ROOM: 'addRoom';
  SET_DEFAULT_ROOM: 'setDefaultRoom';
  ADD_MESSAGE: 'addMessage';
  CREATE_MESSAGE: 'createMessage';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getRoomsRequest: () => ISetPropAction;
  getRoomsSuccess: (rooms: Room[]) => ISetPropAction;
  addRoom: (room: Room) => ISetPropAction;
  setDefaultRoom: (room: Room) => ISetPropAction;
  addMessage: (message: Message) => ISetPropAction;
  createMessage: (room_id: number, content: string) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  rooms: Room[];
  currentRoom: Room;
}
