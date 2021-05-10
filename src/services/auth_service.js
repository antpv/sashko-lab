import apiService from './api_service';

const AUTH_PATH = '/auth';

function authUser({ login, password }) {
  return apiService.post(AUTH_PATH, { login, password });
}

export default {
  authUser,
};
