<template>
    <div class="modal">
        <h3>Make transaction</h3>
        <div class="field">
            Enter wallet uid:
            <input type="text" v-model="walletUid">
        </div>
        <div class="field">
            Enter amount
            <input type="number" v-model="amount">
        </div>
        <div class="field">
            <input @click="onSubmit" type="submit" value="Send" :disabled="beeingReplenished">
            <input type="reset" value="Cancel">
        </div>
    </div>
</template>

<script>
import walletService from '../services/wallet_service';

export default {
  name: 'MakeTransactionPage',
  data() {
    return {
      beeingReplenished: false,
      walletUid: '',
      amount: '',
    };
  },
  methods: {
    onSubmit() {
      this.beeingReplenished = true;

      walletService.createDeposit({
        walletUid: this.walletUid,
        amount: this.amount,
      }).then(() => {
        alert(`Wallet with uid ${this.walletUid} replenished`);

        this.walletUid = '';
        this.amount = '';
      }).finally(() => {
        this.beeingReplenished = false;
      });
    },
  },
};
</script>
