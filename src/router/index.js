import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Machakhela from "../views/Machakhela.vue";
import Wine from "../views/Wine.vue";
import Mtirala from "../views/Mtirala.vue";
import Chirukhi from "../views/Chirukhi.vue";
import Gobroneti from "../views/Gobroneti.vue";
import Merisi from "../views/Merisi.vue";
import Mirveti from "../views/Mirveti.vue";
import Tago from "../views/Tago.vue";

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
  {
    path: "/chirukhi",
    name: "Chirukhi",
    component: Chirukhi,
  },
  {
    path: "/gobroneti",
    name: "Gobroneti",
    component: Gobroneti,
  },
  {
    path: "/merisi",
    name: "Merisi",
    component: Merisi,
  },
  {
    path: "/mirveti",
    name: "Mirveti",
    component: Mirveti,
  },
  {
    path: "/tago",
    name: "Tago",
    component: Tago,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
