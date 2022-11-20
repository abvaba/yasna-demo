import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SettingsView from "@/views/SettingsView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import UserView from '@/views/UserView.vue';
import EditorView from '@/views/EditorView.vue';

function confirmUser() {
  if(!localStorage.getItem('jwt')) {
    return {
      path: './sign-in'
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
      path: "/sign-in",
      name: "signIn",
      component: SignInView,
    },
    {
      path: "/sign-up",
      name: "signUp",
      component: SignUpView,
    },
    {
      path: "/user/:username",
      name: "user",
      component: UserView,
      beforeEnter: [confirmUser],
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      beforeEnter: [confirmUser],
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
      beforeEnter: [confirmUser],
    }
  ],
});

export { routers };
