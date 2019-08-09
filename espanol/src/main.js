import Vue from 'vue'
import App from './App.vue'
import VueDraggable from 'vue-draggable'
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter);
Vue.use(VueDraggable);

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')


