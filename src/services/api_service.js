import axios from 'axios';

const API_URL = 'http://f75228131440.ngrok.io/api/v1';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function setToken(token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export default instance;
