import apiService from './api_service';

function makeTransaction({ receiverEmail, amount }) {
  return apiService.get('/wallet');
}

export default {
  makeTransaction,
};
