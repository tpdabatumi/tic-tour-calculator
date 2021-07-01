import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Machakhela from "../views/Machakhela.vue";
import Wine from "../views/Wine.vue";
import Mtirala from "../views/Mtirala.vue";

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
  {
    path: "/wine",
    name: "Wine",
    component: Wine,
  },
  {
    path: "/mtirala",
    name: "Mtirala",
    component: Mtirala,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
