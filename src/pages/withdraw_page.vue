<template>
    <div>
        <div class="modal">
            <h3>Withdraw</h3>
            <div class="field">
                Enter amount
                <input type="number" v-model="amount">
            </div>
            <div class="field">
                Enter wallet uid:
                <input type="text" v-model="walletUid">
            </div>
            <div class="field">
                <input @click="onSubmit" type="submit" value="Withdraw" :disabled="beeingWithdrawn">
                <input type="reset" value="Cancel">
            </div>
        </div>
        <base-notification
            v-show="isShowNotification"
            type="info"
        >
            {{ notification }}
        </base-notification>
    </div>
</template>

<script>
import BaseNotification from '../components/base_notification.vue';
import walletService from '../services/wallet_service';

export default {
    name: 'WithdrawPage',
    components: {
        BaseNotification,
    },
    data() {
        return {
            beeingWithdrawn: false,
            walletUid: '',
            amount: '',

            notification: '',
            isShowNotification: false,
        };
    },
    methods: {
        onSubmit() {
            this.beeingWithdrawn = true;

            walletService.withdraw({
                fromWalletUid: this.walletUid,
                amount: this.amount,
            }).then(() => {
                this.notification = `Wallet with uid ${this.walletUid} withdrawn`;
                this.isShowNotification = true;

                this.lastNotificationTimerId = setTimeout(() => {
                    clearTimeout(this.lastNotificationTimerId);

                    this.notification = '';
                    this.isShowNotification = false;
                }, 1000);

                this.walletUid = '';
                this.amount = '';
            }).finally(() => {
                this.beeingWithdrawn = false;
            });
        },
    },
};
</script>
