import Vue from 'vue';
import Layout from './components/layout.vue';
import VueRouter from 'vue-router';
import IndexPage from  './pages/index.vue';
import mock from './mock/mock';


Vue.use(VueRouter);
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
});


new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})


