<template>
    <div class="modal">
        <h3>Make transaction</h3>
        <div class="field">
            From wallet:
            <select name="roles" v-model="fromWalletUid">
                <option v-for="wallet in wallets" :key="wallet.uid" :value="wallet.uid">
                    {{ wallet.name }} (uid: {{ wallet.uid }} | funds: {{ wallet.funds}})
                </option>
            </select>
        </div>
        <div class="field">
            To wallet uid:
            <input type="text" v-model="toWalletUid">
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
            toWalletUid: '',
            fromWalletUid: '',
            amount: '',

            wallets: [],
        };
    },
    created() {
        walletService.getWallets().then((response) => {
            this.wallets = response.data;
        });
    },
    methods: {
        onSubmit() {
            this.beeingReplenished = true;

            walletService.sendFunds({
                toWalletUid: this.toWalletUid,
                fromWalletUid: this.fromWalletUid,
                amount: this.amount,
            }).then(() => {
                alert(`Wallet with uid ${this.toWalletUid} replenished`);

                this.toWalletUid = '';
                this.amount = '';
            }).finally(() => {
                this.beeingReplenished = false;
            });
        },
    },
};
</script>
