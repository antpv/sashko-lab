import apiService from './api_service';

function authUser({ email, password }) {
  return apiService.post('/auth', { username: email, password });
}

function registerUser({
  email, password, firstName, lastName,
}) {
  return apiService.post('/user', {
    email,
    password,
    first_name: firstName,
    last_name: lastName,
  });
}

function getUserByUid() {
  return apiService.get('/user');
}

export default {
  authUser,
  registerUser,
  getUserByUid,
};
