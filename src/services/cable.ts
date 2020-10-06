import ActionCable from 'actioncable';

const cableURL = 'ws://localhost:3000/cable';

let persist;
let token;

const persistedStorage = localStorage.getItem('persist:discordClone');

if (persistedStorage) {
  persist = JSON.parse(persistedStorage);
  const auth = JSON.parse(persist.auth);
  token = auth.token;
}

const cable = ActionCable.createConsumer(`${cableURL}?token=${token}`);

export default cable;
