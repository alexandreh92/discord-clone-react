import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { ApplicationState } from '~/store/ducks/types';

interface Props extends RouteProps {
  component: React.ComponentType<any>;
  isPrivate?: boolean;
  isGuest?: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  children,
  ...rest
}) => {
  const { signedIn } = useSelector((state: ApplicationState) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !signedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default RouteWrapper;
