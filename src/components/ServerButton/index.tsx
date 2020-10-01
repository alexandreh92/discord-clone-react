import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ServerRequest, Server } from '~/@types';

import RoomsActions from '~/store/ducks/rooms';

import cable from '~/services/cable';

import { Button } from './styles';

import logo from '../../assets/images/logo-rocketseat.svg';

const { addRoom } = RoomsActions;

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  onClick?: () => void;
  server?: Server;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  server,
  onClick,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (server) {
      const subscription = cable.subscriptions.create(
        { channel: 'ServersChannel', server: server.id },
        {
          received({ event, data }: ServerRequest) {
            console.log(event, data);
            if (event === 'create') dispatch(addRoom(data));
          },
        }
      );
      return () => {
        cable.subscriptions.remove(subscription);
      };
    }
  }, [dispatch, server]);

  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      onClick={onClick}
    >
      {isHome && <img alt="server-button" src={logo} />}
    </Button>
  );
};

export default ServerButton;
