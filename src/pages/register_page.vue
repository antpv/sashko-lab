<template>
  <div class="modal">
    <h3>Sign in</h3>
    <div class="field">
      Enter your email:
      <input v-model="email" type="text">
    </div>
    <div class="field">
      Enter your username:
      <input type="text">
    </div>
    <div class="field">
      Enter your password:
      <input v-model="password" type="password">
    </div>
    <div class="field">
      Submit your password:
      <input type="password">
    </div>
    <div class="field">
      Select role:
      <select name="roles">
        <option value="Admin">Admin</option>
        <option value="Regular">Regular</option>
      </select>
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
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: '',
      username: '',
      role: '',
    };
  },
  methods: {
    onSubmit() {
      authService.registerUser({
        email: this.email,
        password: this.password,
        firstName: 'first_name',
        lastName: 'last_name',
      });
    },
    onCancel() {
      this.email = '';
      this.password = '';
    },
  },
};
</script>
