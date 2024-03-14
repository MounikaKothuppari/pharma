<template>
  <div id="app" class="h-100">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(184, 235, 242);
  background: linear-gradient(180deg, rgba(184, 235, 242, 0.5579481792717087) 0%, rgba(216, 248, 254, 1) 51%, rgba(255, 255, 255, 1) 100%);
}
</style>
./components/login.vue
