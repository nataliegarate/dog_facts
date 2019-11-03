import Vue from 'vue'
import Router from 'vue-router'
import Play from './components/Play'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/play',
        component: Play,
      },
      {
        path: '/',
        component: Home,
      },
    ]
})
