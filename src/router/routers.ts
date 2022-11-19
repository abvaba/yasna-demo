import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from '@/views/LoginView.vue';
import authMixin from "@/mixins/authMixin";
function rmQ() {
  if(!localStorage.getItem('jwt')) {
    return {
      path: './login'
    }
  }
}
const routers = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      beforeEnter: [rmQ],
    }
  ],
});

export { routers };
