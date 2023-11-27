import { createRouter, createWebHistory } from "vue-router";

import homeView from "./views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
  ],
});

export { router };
