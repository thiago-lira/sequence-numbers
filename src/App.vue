<template>
  <MainContent />
</template>

<script>
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    MainContent
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #333;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
