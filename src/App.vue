<template>
  <div id="app">
    <the-header />
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/the_header.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss" src="./assets/styles.scss" />
