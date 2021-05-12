<template>
    <div class="modal">
        <h3>Deposit</h3>
        <div class="field">
            Select wallet:
            <select v-model="walletUid">
                <option v-for="wallet in wallets" :key="wallet.uid" :value="wallet.uid">
                    {{ wallet.name }} (uid: {{ wallet.uid }} | funds: {{ wallet.funds}})
                </option>
            </select>
        </div>
        <div class="field">
            Enter amount
            <input type="number" v-model="amount">
        </div>
        <div class="field">
            <input
                @click="onSubmit"
                type="submit"
                value="Send"
                :disabled="beeingReplenished || fetchingDeposits"
            >
            <input type="reset" value="Cancel">
        </div>
    </div>
</template>

<script>
import walletService from '../services/wallet_service';

export default {
    name: 'DepositPage',
    data() {
        return {
            beeingReplenished: false,
            walletUid: '',
            amount: '',

            wallets: [],
            fetchingDeposits: false,
        };
    },
    created() {
        this.fetchingDeposits = true;

        walletService.getWallets().then((response) => {
            this.wallets = response.data;

            this.fetchingDeposits = false;
        });
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
