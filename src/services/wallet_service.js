import apiService from './api_service';

function getWallets() {
  return apiService.get('/wallet');
}

function createWallet() {
  return apiService.post('/wallet', {
    name: 'test',
  });
}

export default {
  getWallets,
  createWallet,
};
