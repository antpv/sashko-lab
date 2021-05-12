<template>
  <div id="app">
    <the-header :isAuthenticated="isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/the_header.vue';
import { setToken } from './services/api_service';

const bearerToken = localStorage.getItem('auth_bearer');
const hasBearerToken = bearerToken !== null;

if (hasBearerToken) {
  setToken(bearerToken);
}

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isAuthenticated: hasBearerToken,
    };
  },
  mounted() {
    this.$root.$on('authenticated', this.onAuthenticated);
  },
  beforeDestroy() {
    this.$root.$off('authenticated', this.onAuthenticated);
  },
  methods: {
    onAuthenticated() {
      this.isAuthenticated = true;
    },
  },
};
</script>

<style lang="scss" src="./assets/styles.scss" />
