<template>
  <nav>
    <router-link to="/">
      Jogo
    </router-link>

    <router-link to="/stats">
      Estatísticas
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #000;
  padding: 15px;

  a {
    color: #ccc;
    margin: 0 10px;

    &.router-link-active {
      color: #c60;
    }
  }
}
</style>
