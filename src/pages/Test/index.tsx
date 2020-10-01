import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
// import { Container } from './styles';

const Test: React.FC = () => {
  return (
    <div>
      eitaaaa
      <div>
        {/* <ActionCableConsumer
          channel={{
            channel: 'ServersChannel',
          }}
          onReceived={(res) => console.log(res)}
          onConnected={() => console.log('connected')}
        /> */}
      </div>
    </div>
  );
};

export default Test;
