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
  article: "/articles/:id",
  category: "/categories/:id",
};

export const routes: RouteRecordRaw[] = [
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
  {
    path: routeDestinations.article,
    component: HomePage,
  },
  {
    path: routeDestinations.category,
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
