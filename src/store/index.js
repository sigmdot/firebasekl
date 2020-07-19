import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    rolas: null
  },
  mutations: {
    updateUser(state, {user}){
      Vue.set(state,"user",user);
    },
    updateRolitas(state,rolas){
      Vue.set(state,"rolas",rolas);
    }
  },
  actions: {
  },
  getters: {
    user:state => state.user,
    rolas:state => state.rolas
  }
})
