import { IState as AuthState } from './auth/types';
import { IState as MessagesState } from './messages/types';
import { IState as UserState } from './user/types';
import { IState as RoomsState } from './rooms/types';
import { IState as ServersState } from './servers/types';

export interface ApplicationState {
  auth: AuthState;
  messages: MessagesState;
  user: UserState;
  rooms: RoomsState;
  servers: ServersState;
}
