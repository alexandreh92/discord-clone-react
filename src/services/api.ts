import axios from 'axios';

import { store } from '~/store';

export const baseURL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL,
});

// INTERCEPTOR FOR AUTH
api.interceptors.request.use(
  async (config) => {
    const { token } = store.getState().auth;

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default api;
