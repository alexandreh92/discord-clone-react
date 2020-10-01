import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Server } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  servers: Server[];
  server: Server;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_SERVERS_REQUEST: 'getServersRequest';
  GET_SERVERS_SUCCESS: 'getServersSuccess';
  ADD_SERVER: 'addServer';
  SET_DEFAULT_SERVER: 'setDefaultServer';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getServersRequest: () => ISetPropAction;
  getServersSuccess: (servers: Server[]) => ISetPropAction;
  addServer: (server: Server) => ISetPropAction;
  setDefaultServer: (server: Server) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  servers: Server[];
  currentServer: Server;
}
