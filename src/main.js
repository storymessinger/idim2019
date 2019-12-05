import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import 'core-js/stable'; 


Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store();

Vue.config.productionTip = false;




const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

sync(store, router);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');