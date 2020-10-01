import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  // prop: type;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  // ACTION_NAME: 'actionName';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  // actionName: (prop: type) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  username: string;
  email: string;
}
