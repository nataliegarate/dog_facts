<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <router-link to='/' id='heading'> <h1>
      <img height = '20' src = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg'> Name that Dog! <img height = '20' src = 'https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg'>

      </h1></router-link>

    <div id='links'>


    </div>
  <router-view></router-view>
  </div>
</template>

<script>
import Easy from './components/Easy.vue'
import Router from 'vue-router'
import Vue from 'vue'
import router from './router.js'
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
