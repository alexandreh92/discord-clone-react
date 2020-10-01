import ActionCable from 'actioncable';

const cableURL = 'ws://localhost:3000/cable';

let persist;

const persistedStorage = localStorage.getItem('persist:discordClone');

if (persistedStorage) {
  persist = JSON.parse(persistedStorage);
}

const { token } = JSON.parse(persist.auth);

const cable = ActionCable.createConsumer(`${cableURL}?token=${token}`);

export default cable;
