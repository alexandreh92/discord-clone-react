import { createActions } from 'reduxsauce';

import { ITypes, ICreators } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<ITypes, ICreators>(
  {
    getServersRequest: null,
    getServersSuccess: ['servers'],
    addServer: ['server'],
    setDefaultServer: ['server'],
  },
  { prefix: '@servers/' }
);

export const ServersTypes = Types;
export default Creators;
