import HomePage from "@/pages/HomePage.vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

export const routeDestinations = {
  home: "/",
  archive: "/archive",
  categories: "/categories",
};

const routes: RouteRecordRaw[] = [
  {
    path: routeDestinations.home,
    component: HomePage,
  },
  {
    path: routeDestinations.categories,
    component: HomePage,
  },
  {
    path: routeDestinations.archive,
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
