<template>
  <div class="modal">
    <h3>Log in</h3>
    <div class="field">
      Enter your email:
      <input v-model="email" type="text">
    </div>
    <div class="field">
      Enter your password:
      <input v-model="password" type="password">
    </div>
    <div class="field">
      <input @click="onSubmit" type="submit" value="Sign in">
      <input @click="onCancel" type="reset" value="Cancel">
    </div>
  </div>
</template>

<script>
import authService from '../services/auth_service';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      authService.authUser({
        login: this.login,
        email: this.email,
      });
    },
    onCancel() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
