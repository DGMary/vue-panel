import axios from 'axios';
import Vuex from 'vuex';
import Vue from 'vue';

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  orders: [],
  florists: [
    {id:"2999300073761", name: "Helen"},
    {id:"4820215050708", name: "Olha"},
    {id:"1", name: "Anna"},
  ],
  florist: "",
}

//to handle state
const getters = {
  allOrders: (state) => state.orders,
  allFlorists: (state) => state.florists,
  getOrderById: (state) => (id) => {
    return state.orders.find(order => order.id === id);
  },
  getFloristById: (state) => (id) => {
    return state.florists.find(florist => florist.id === id);
  },
}

//to handle actions
const actions = {
  async getOrders({ commit }) {
    try {
      // await axios.get('../orders.json')
      await axios.get('http://localhost:8010/proxy/rest/dashboard/orders/')
        .then(response => {
          commit('SET_ORDERS', response.data.results);
          console.log(response.data.results);
      });
    } catch (e) {
      console.log('Caught Error');
    }
  }  
}

//to handle mutations
const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  setData (state, payload) {
    let orderItem =  state.orders.find(order => order.id === payload.orderId);
    orderItem.florist = payload.floristName;
    orderItem.status = 5;
    state.orders = [ ...state.orders];
    console.log(orderItem);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}