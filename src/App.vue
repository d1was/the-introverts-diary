<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Abel|Hind+Madurai&display=swap');
#app {
  font-family: 'Hind Madurai','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
