import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/styles/index.css';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: '258209575'
})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
