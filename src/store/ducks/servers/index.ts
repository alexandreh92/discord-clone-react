import { createReducer } from 'reduxsauce';

import { Server } from '~/@types';

import Creators, { ServersTypes as Types } from './creators';
import { IState, IActions, ISetPropAction } from './types';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  servers: [],
  currentServer: {} as Server,
};

/* Reducers */

export const handleGetServers = (
  state: IState,
  { servers }: ISetPropAction
): IState => ({ ...state, servers, currentServer: servers[0] });

export const handleAddServer = (
  state: IState,
  { server }: ISetPropAction
): IState => ({ ...state, servers: [...state.servers, server] });

export const handleSetDefaultServer = (
  state: IState,
  { server }: ISetPropAction
): IState => ({ ...state, currentServer: server });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_SERVERS_SUCCESS]: handleGetServers,
  [Types.ADD_SERVER]: handleAddServer,
  [Types.SET_DEFAULT_SERVER]: handleSetDefaultServer,
});
