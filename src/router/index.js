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
import Kapnistavi from "../views/Kapnistavi.vue";
import Ghorjomi from "../views/Ghorjomi.vue";

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
  {
    path: "/kapnistavi",
    name: "Kapnistavi",
    component: Kapnistavi,
  },
  {
    path: "/ghorjomi",
    name: "Ghorjomi",
    component: Ghorjomi,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
