import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RoomRequest } from '~/@types';
import RoomsActions from '~/store/ducks/rooms';
import MessagesActions from '~/store/ducks/messages';

import cable from '~/services/cable';

import ChannelButton from '~/components/ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';
import { ApplicationState } from '~/store/ducks/types';

const { getRoomsRequest, setDefaultRoom } = RoomsActions;
const { addMessage } = MessagesActions;

const ChannelList: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();

  const { currentServer } = useSelector(
    (state: ApplicationState) => state.servers
  );
  const { rooms } = useSelector((state: ApplicationState) => state.rooms);

  const serverRooms = rooms.filter((i) => i.server_id === currentServer.id);

  /* Effects */
  useEffect(() => {
    const subscriptions = rooms.map((r) => {
      return cable.subscriptions.create(
        { channel: 'RoomsChannel', room: r.id },
        {
          received({ event, data }: RoomRequest) {
            if (event === 'create') dispatch(addMessage(data, r.id));
          },
        }
      );
    });
    return () => {
      subscriptions.map((subscription) => {
        return cable.subscriptions.remove(subscription);
      });
    };
  }, [rooms, dispatch]);

  useEffect(() => {
    dispatch(getRoomsRequest());
  }, [dispatch]);

  /* Callbacks */
  const handleSetDefaultRoom = useCallback(
    (room) => {
      dispatch(setDefaultRoom(room));
    },
    [dispatch]
  );

  /* Component */

  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      {serverRooms.map((room) => (
        <ChannelButton
          key={room.id}
          channelName={room.name}
          onClick={() => handleSetDefaultRoom(room)}
        />
      ))}
    </Container>
  );
};

export default ChannelList;
