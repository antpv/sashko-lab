import apiService from './api_service';

function getWallets() {
  return apiService.get('/wallet');
}

function createWallet({ name }) {
  return apiService.post('/wallet', {
    name,
  });
}

function createDeposit({ walletUid, amount }) {
  return apiService.post(`/wallet/${walletUid}`, {
    to_wallet: Number(walletUid),
    amount: Number(amount),
  });
}

function sendFunds({ fromWalletUid, toWalletUid, amount }) {
  return apiService.post(`/wallet/${fromWalletUid}/withdraw`, {
    to_wallet: Number(toWalletUid),
    amount: Number(amount),
  });
}

function withdraw({ fromWalletUid, amount }) {
  return apiService.post('/wallet/withdraw', {
    from_wallet: Number(fromWalletUid),
    amount: Number(amount),
  });
}

export default {
  getWallets,
  createWallet,
  createDeposit,
  withdraw,
  sendFunds,
};
