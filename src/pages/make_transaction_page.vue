<template>
    <div class="modal">
        <h3>Make transaction</h3>
        <div class="field">
            Enter receiver username:
            <input type="text">
        </div>
        <div class="field">
            Enter amount
            <input type="number">
        </div>
        <div class="field">
            <input @click="onSubmit" type="submit" value="Send" :disabled="beeingCreatedWallet">
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
      beeingCreatedWallet: false,
    };
  },
  methods: {
    onSubmit() {
      this.beeingCreatedWallet = true;

      walletService.createWallet({}).then((response) => {
        console.log(response);
      }).finally(() => {
        this.beeingCreatedWallet = false;
      });
    },
  },
};
</script>
