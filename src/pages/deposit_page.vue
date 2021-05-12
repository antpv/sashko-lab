<template>
    <div class="modal">
        <h3>Deposit</h3>
        <div class="field">
            Enter amount
            <input type="number">
        </div>
        <div class="field">
            Enter card number:
            <input type="text">
        </div>
        <div class="field">
            Enter date from card:
            <input type="text">
        </div>
        <div class="field">
            Enter cvv code:
            <input type="text">
        </div>
        <div class="field">
            <input type="submit" value="Deposit">
            <input type="reset" value="Cancel">
        </div>
    </div>
</template>

<script>
// import userService from '../services/user_service';

export default {
  name: 'DepositPage',
  data() {
    return {};
  },
  methods: {},
};
</script>
