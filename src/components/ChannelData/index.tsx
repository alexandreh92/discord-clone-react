import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChannelMessage, { Mention } from '~/components/ChannelMessage';
import { ApplicationState } from '~/store/ducks/types';

import RoomActions from '~/store/ducks/rooms';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const { createMessage } = RoomActions;

const ChannelData: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);
  const { currentRoom } = useSelector((state: ApplicationState) => state.rooms);
  const { messages } = currentRoom;

  /* Effects */

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messages]);

  /* Callbacks */

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(createMessage(currentRoom.id, content));
      setContent('');
    },
    [dispatch, content, currentRoom]
  );

  const handleInputChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {messages?.map((message) => (
          <ChannelMessage
            key={message.id}
            author={message.user.username}
            date="01/10/2020"
            content={message.content}
          />
        ))}
      </Messages>

      <InputWrapper onSubmit={handleSubmit}>
        <Input
          value={content}
          placeholder="Conversar em #chat-livre"
          onChange={handleInputChange}
        />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
