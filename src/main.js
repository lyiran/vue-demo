import getData from './util';
import Vue from 'vue';
import App from './App.vue';

import './style/common.scss'


// Vue.component('my-component', {
//   template: '<img :src="url" />',
//   data() {
//     return {
//       url: require('./img/icon.png')
//     }
//   }
// })
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   },
//   methods: {
//     async fetchData() {
//       const data = await getData();
//       this.message = data;
//     }
//   },
//   created() {
//     this.fetchData();
//   }
// });

