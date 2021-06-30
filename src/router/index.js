import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Machakhela from "../views/Machakhela.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/machakhela",
    name: "Machakhela",
    component: Machakhela,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
