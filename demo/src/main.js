import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible/index";
import "@/assets/css/index.scss";
import "@/plugins/vant";
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");