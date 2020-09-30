import React from 'react';

import ChannelButton from '~/components/ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="escritório" />
      <ChannelButton channelName="cs-go" />
    </Container>
  );
};

export default ChannelList;
