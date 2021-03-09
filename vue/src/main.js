import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Admin from './components/Admin'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home},
    { path: '/admin', component: Admin}
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
