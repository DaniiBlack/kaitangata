<template>
  <div id="app">
    Woke Dumplings
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f6f8;
  margin-top: 60px;
}
body {
    background-color: black;
}
</style>
