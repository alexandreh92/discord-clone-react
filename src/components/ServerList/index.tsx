import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainRequest } from '~/@types';
import { ApplicationState } from '~/store/ducks/types';

import ServersActions from '~/store/ducks/servers';

import cable from '~/services/cable';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const { getServersRequest, addServer, setDefaultServer } = ServersActions;

const ServerList: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();
  const { servers } = useSelector((state: ApplicationState) => state.servers);

  useEffect(() => {
    const subscription = cable.subscriptions.create(
      { channel: 'MainChannel' },
      {
        received({ event, data }: MainRequest) {
          if (event === 'create') dispatch(addServer(data));
        },
      }
    );
    return () => {
      cable.subscriptions.remove(subscription);
    };
  }, [dispatch]);

  /* Callbacks */

  const handleSetServer = useCallback(
    (server) => {
      dispatch(setDefaultServer(server));
    },
    [dispatch]
  );

  /* Effects */

  useEffect(() => {
    dispatch(getServersRequest());
  }, [dispatch]);

  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      {servers.map((server) => (
        <ServerButton
          server={server}
          key={server.id}
          onClick={() => handleSetServer(server)}
        />
      ))}
      {/* <ServerButton mentions={3} />
      <ServerButton hasNotifications /> */}
    </Container>
  );
};

export default ServerList;
