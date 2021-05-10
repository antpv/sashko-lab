import apiService from './api_service';

const PATH_AUTH = '/auth';
const PATH_REGISTER = '/user';

function authUser({ email, password }) {
  return apiService.post(PATH_AUTH, { email, password });
}

function registerUser({
  email, password, firstName, lastName,
}) {
  return apiService.post(PATH_REGISTER, {
    email,
    password,
    first_name: firstName,
    last_name: lastName,
  });
}

export default {
  authUser,
  registerUser,
};
