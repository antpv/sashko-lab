import axios from 'axios';

const API_URL = 'http://1b7919419306.ngrok.io/api/v1';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
