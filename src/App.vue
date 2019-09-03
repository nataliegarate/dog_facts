

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <router-link to='/' id='heading'> <h1>
      <img height = '20' src = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg'> Name that Dog! <img height = '20' src = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg'>

      </h1></router-link>

    <div id='links'>
    <!-- <router-link to='/'>Home</router-link> -->
    <!-- <router-link to='/easy'>Easy</router-link>
    <router-link to='/medium'>Medium</router-link>
    <router-link to='/hard'>Hard</router-link> -->
    <!-- <router-link to='/login'>Login</router-link> -->



    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Easy from './components/Easy.vue'
import Medium from './components/Medium.vue'
import Hard from './components/Hard.vue'
import Router from 'vue-router'
import Vue from 'vue'
import router from './router.js'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)



export default {
  name: 'app',
  components: {
    Easy, Medium, Hard, Login, Home
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

#heading {
  text-decoration: none;
  color: black;

}
</style>
