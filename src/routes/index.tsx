import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';

import Default from '~/layouts/Default';
import AuthRoutes from './Auth';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Default} />
      <AuthRoutes />
    </Switch>
  );
};

export default Routes;
