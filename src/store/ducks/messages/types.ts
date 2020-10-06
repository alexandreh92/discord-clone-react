import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Message, RoomMessages } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  message: Message;
  room_id: number;
  rooms: RoomMessages[];
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  ADD_MESSAGE: 'addMessage';
  GET_ROOM_MESSAGES: 'getRoomMessages';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  addMessage: (message: Message, room_id: number) => ISetPropAction;
  getRoomMessages: (rooms: RoomMessages[]) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  rooms: RoomMessages[];
}
