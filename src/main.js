import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';

export const eventBus = new Vue();
Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
