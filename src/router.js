import Vue from 'vue'
import Router from 'vue-router'
import Easy from './components/Easy'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/easy',
        component: Easy
      },
      {
        path: '/',
        component: Home,
      },
    ]
})
