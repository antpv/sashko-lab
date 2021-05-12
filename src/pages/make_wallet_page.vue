<template>
    <div class="modal">
        <h3>Make wallet</h3>
        <div class="field">
            Wallet name:
            <input type="text" v-model="walletName">
        </div>
        <div class="field">
            <input
              @click="onSubmit"
              type="submit"
              value="Make wallet"
              :disabled="beeingCreatedWallet"
            >
            <input type="reset" value="Cancel">
        </div>
    </div>
</template>

<script>
import walletService from '../services/wallet_service';

export default {
  name: 'MakeWalletPage',
  data() {
    return {
      walletName: '',
      beeingCreatedWallet: false,
    };
  },
  methods: {
    onSubmit() {
      this.beeingCreatedWallet = true;

      walletService.createWallet({ name: this.walletName }).then((response) => {
        alert(`Wallet ${this.walletName} with uid ${response.data.uid} created`);

        this.walletName = '';
      }).finally(() => {
        this.beeingCreatedWallet = false;
      });
    },
  },
};
</script>
