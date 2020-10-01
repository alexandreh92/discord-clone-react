import { IState as AuthState } from './auth/types';
import { IState as UserState } from './user/types';
import { IState as RoomsState } from './rooms/types';
import { IState as ServersState } from './servers/types';

export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  rooms: RoomsState;
  servers: ServersState;
}
