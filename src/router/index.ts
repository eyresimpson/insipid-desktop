import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ManageView from "../views/ManageView.vue";
import StoreView from "../views/StoreView.vue";
import systemConfigComponent from "../components/configure/systemConfigComponent.vue";
import networkConfigComponent from "../components/configure/networkConfigComponent.vue";
import securityConfigComponent from "../components/configure/securityConfigComponent.vue";
import otherConfigComponent from "../components/configure/otherConfigComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/store",
    name: "store",
    component: StoreView,
  },
  {
    path: "/manage",
    name: "manage",
    component: ManageView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/config/sys",
    name: "system",
    component: systemConfigComponent,
  },
  {
    path: "/config/net",
    name: "network",
    component: networkConfigComponent,
  },
  {
    path: "/config/sec",
    name: "security",
    component: securityConfigComponent,
  },
  {
    path: "/config/oth",
    name: "other",
    component: otherConfigComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
