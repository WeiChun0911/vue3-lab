import { createRouter, createWebHistory } from "vue-router";
import case1 from "./components/case1/case1.vue";
import case2 from "./components/case2/parent.vue";
import case3 from "./components/case3/case3.vue";
import homePage from "./components/homePage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: homePage },
    { path: "/case1", component: case1 },
    { path: "/case2", component: case2 },
    { path: "/case3", component: case3 },
  ],
});
