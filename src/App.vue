<template>
  <div id="app">
    <HelloWorld msg="哈哈哈" />
    <hr>
    <TextShow message="嘿嘿嘿" />
  </div>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import TextShow from './components/TextShow.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TextShow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
