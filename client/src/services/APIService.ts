import axios from 'axios';

export const APIService = axios.create({
  baseURL: 'http://localhost:3000/'
});

APIService.interceptors.request.use(async function(config) {
  config.baseURL = 'http://localhost:3000/';
  return config;
});
