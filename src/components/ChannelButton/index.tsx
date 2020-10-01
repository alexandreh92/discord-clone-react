import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface Props {
  channelName: string;
  selected?: boolean;
  onClick?: () => void;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected, onClick }) => {
  return (
    <Container className={selected ? 'active' : ''} onClick={onClick}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
