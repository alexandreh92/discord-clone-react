import React, { Fragment } from 'react';

import GuestRoute from '~/components/GuestRoute';

import SignIn from '~/pages/Auth/SignIn';

const Auth: React.FC = () => {
  return (
    <Fragment>
      <GuestRoute exact path="/sign_in" component={SignIn} />
    </Fragment>
  );
};

export default Auth;
