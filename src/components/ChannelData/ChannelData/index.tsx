import React, { useEffect, useRef } from 'react';

import ChannelMessage, { Mention } from '~/components/ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, []);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage author="Alexandre H" date="01/10/2020" content="Olá!" />
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Alexandre H"
            date="01/10/2020"
            content="Tudo Bem?"
          />
        ))}
        <ChannelMessage
          author="Denys S."
          date="01/10/2020"
          content={
            <>
              <Mention>@Alexandre H.</Mention>, eu sou um bot
            </>
          }
          isBot
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
