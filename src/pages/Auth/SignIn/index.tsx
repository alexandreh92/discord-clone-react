import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthActions from '~/store/ducks/auth';

// import { Container } from './styles';

const SignIn: React.FC = () => {
  /* Hooks */
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  /* Callbacks */
  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleOnClick = useCallback(async () => {
    dispatch(AuthActions.signInRequest(username, password));
  }, [dispatch, password, username]);

  /* Component */
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handlePasswordChange}
        />

        <button type="button" onClick={handleOnClick}>
          login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
