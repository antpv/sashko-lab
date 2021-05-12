<template>
  <div class="modal">
    <h3>Withdraw</h3>
    <div class="field">
      Enter amount
      <input type="number" v-model="amount">
    </div>
    <div class="field">
      Enter wallet uid:
      <input type="text" v-model="fromWallet">
    </div>
    <div class="field">
      <input @click="onSubmit" type="submit" value="Withdraw" :disabled="beeingWithdrawn">
      <input type="reset" value="Cancel">
    </div>
  </div>
</template>

<script>
import walletService from '../services/wallet_service';

export default {
  name: 'WithdrawPage',
  data() {
    return {
      beeingWithdrawn: false,
      fromWallet: '',
      amount: '',
    };
  },
  methods: {
    onSubmit() {
      this.beeingWithdrawn = true;

      walletService.withdraw({
        fromWallet: this.fromWallet,
        amount: this.amount,
      }).then(() => {
        alert(`Wallet with uid ${this.walletUid} replenished`);

        this.walletUid = '';
        this.amount = '';
      }).finally(() => {
        this.beeingWithdrawn = false;
      });
    },
  },
};
</script>
