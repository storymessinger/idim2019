import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import 'core-js/stable'; 
// import VueMasonry from 'vue-masonry-css';
// Vue.use(VueMasonry);
import {VueMasonryPlugin} from 'vue-masonry';
Vue.use(VueMasonryPlugin);


import colorSwatch from './colorSwatch.js';
window.colorSwatch = colorSwatch;
// console.log(colorSwatch);




Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store();

Vue.config.productionTip = false;




const routes = [
  {
    path: '/',
  },
  {
    path: '/:dir1',
  },
  {
    path: '/:dir1/:dir2',
  },
  {
    path: '/:dir1/:dir2/:dir3',
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

sync(store, router);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');