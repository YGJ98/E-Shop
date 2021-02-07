import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from './router'
import store from "@/store"
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const whiteList = ['/forget/phone', '/forget/code', '/forget/rest', '/profile', '/car', '/catory', '/home']
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + "--小E商城";

  const token = localStorage.getItem("token");
  if (token) {
    store.dispatch("user/tokenSign").then(res => {
      to.name == "login" ? next({ name: "home" }) : next();
    }).catch(() => {
      localStorage.setItem("token", "")
    })
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      to.name == "login" ? next() : next({ name: "login" });
    }

  }

});
export default router;
