<template>
  <div id="app">
    <img src="./assets/resist.jpg" class="resist"> 
    <img src="./assets/forDaniLoveDan.png" class="lgbtqi">
    <nav>
      <ul class="nav">
        <li class="navItem"><router-link to="/">Home</router-link></li>
        <li class="navItem"><router-link to="gallery">Gallery</router-link></li>
      </ul>
    </nav>
    <h1 class="wd">Woke Dumplings</h1>
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
  margin-top: 15px;
}
body {
    background-color: black;
}
.nav {
  list-style-type: none;
  margin-left: 60px;
  position: relative;
  z-index: 3;
}
.navItem {
  display: inline;
  padding: 5px;
  float: left;
  color: white; 
}
a {
  color: inherit;
}
.wd {
  clear: both;
}
.resist {
  width: 95px;
  height: 170px;
  position: absolute;
  left: 0px;
  top: -20px;
  z-index: 2;
}
.lgbtqi {
  width: 100%;
  height: 30px;
  position: absolute;
  left: 0px;
  z-index: 1;
  opacity: 0.5;
}
</style>