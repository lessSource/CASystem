import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../components/base/login/LoginController.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/login",
    //   name: "home",
    //   component: LoginView,
    // },
    {
      path: "/main",
      name: "main",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/base/main/MainController.vue"),
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/base/login/LoginController.vue"),
    },
  ],
});

export default router;
