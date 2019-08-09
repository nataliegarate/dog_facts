

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id='links'>
    <router-link to='/'>HelloWorld</router-link>
    <router-link to='/test'>Test</router-link>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Router from 'vue-router'
import Vue from 'vue'
import router from './router.js'

Vue.use(Router)



export default {
  name: 'app',
  components: {
    HelloWorld, Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
margin-left: 100px;
margin-right: 100px;
}
</style>
