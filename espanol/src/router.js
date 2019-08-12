import Vue from 'vue'
import Router from 'vue-router'
import Medium from './components/Medium'
import Easy from './components/Easy'
import Hard from './components/Hard'
import Login from './components/Login'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/medium',
      component: Medium
    },
      {
        path: '/easy',
        component: Easy
      },
      {
        path: '/hard',
        component: Hard
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/',
        component: Home,
      },
    ]
})
