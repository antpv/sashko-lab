<template>
  <div id="header">
    <router-link to="/register"><span class="button">Sign in</span></router-link>
    <router-link to="/login"><span class="button">Log in</span></router-link>
    <router-link to="/user_info"><span class="button">User info</span></router-link>
    <router-link to="/edit"><span class="button">Edit user</span></router-link>
    <router-link to="/delete_user"><span class="button">Delete user</span></router-link>
    <router-link to="/deposit"><span class="button">Deposit</span></router-link>
    <router-link to="/make_transaction">
      <span class="button">Make transaction</span>
    </router-link>
    <router-link to="/withdraw"><span class="button">Withdraw</span></router-link>
    <router-link to="/"><span class="button">Log out</span></router-link>
    <span class="mobile">
      <span><h1>≡ PayPayPay</h1></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String,
  },
};
</script>
