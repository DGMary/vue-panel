import Vuex from 'vuex'
import Vue from 'vue'
import orders from './modules/orders';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    orders,
  },
});
