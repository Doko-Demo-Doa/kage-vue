<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="stylus">
html
  width: 100%
  min-width: 800px
  min-height: 600px
  height: 100%

body
  margin: 0
  padding: 0
  display: flex
  height: 100%

hr
  opacity 0.25

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100%
  overflow: hidden

  .main-layout
    flex-grow: 2
</style>
