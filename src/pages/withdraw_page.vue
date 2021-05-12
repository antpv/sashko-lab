<template>
  <div class="modal">
    <h3>Withdraw</h3>
    <div class="field">
      Enter amount
      <input type="number">
    </div>
    <div class="field">
      Enter card number:
      <input type="text">
    </div>
    <div class="field">
      <input type="submit" value="Withdraw">
      <input type="reset" value="Cancel">
    </div>
  </div>
</template>

<script>
// import userService from '../services/user_service';

export default {
  name: 'WithdrawPage',
  data() {
    return {};
  },
  methods: {},
};
</script>
