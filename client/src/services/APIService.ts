import axios from 'axios';
import store from 'ducks/store';

export const APIService = axios.create({
  baseURL: 'http://localhost:3000/'
});

APIService.interceptors.request.use(async function(config) {
  const { jwtToken } = store.getState().auth;
  const headers = {
    'content-type': 'application/json',
    accept: 'application/json',
    Authorization: `Bearer ${jwtToken}`,
  };
  
  config.headers = headers;
  config.baseURL = 'http://localhost:3000/';
  return config;
});
