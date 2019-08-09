import Vue from 'vue'
import Router from 'vue-router'
import Test from './components/Test'
import HelloWorld from './components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      component: Test
    },
      {
        path: '/',
        component: HelloWorld
      }
    ]
})
