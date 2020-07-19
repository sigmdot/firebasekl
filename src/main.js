import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import axios from 'axios';
import {fire } from './firebase.js'

Vue.prototype.$axios = axios;
Vue.use(firestorePlugin);
Vue.config.productionTip = false;


let app = null;

fire.onAuthStateChanged(user =>{
  store.commit('updateUser',{user});

  if(!app){
    app =new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});





