import type { Article } from "@/api/article";
import type { Category } from "@/api/category";
import ArticlePage from "@/components/pages/ArticlePage.vue";
import CategoriesPage from "@/components/pages/CategoriesPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import CategoryPage from "@/components/pages/CategoryPage.vue";
import {
  createRouter as createRouterInternal,
  createWebHistory,
  type RouteRecordRaw,
  type Router,
} from "vue-router";
import type { Year } from "@/api/year";
import ArchivePage from "@/components/pages/ArchivePage.vue";
import YearPage from "@/components/pages/YearPage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";
import DashboardPage from "@/components/pages/DashboardPage.vue";
import "vue-router";
import { useUser } from "@/composables/useUser";

declare module "vue-router" {
  interface RouteMeta {
    // If the value is not set it is interpreted as false
    requiredAuth?: boolean;
  }
}

export const routeDestinations = {
  home: "/",
  archive: "/archive",
  categories: "/categories",
  article: "/articles/:id",
  category: "/categories/:id",
  year: "/years/:id",
  login: "/login",
  dashboard: "/dashboard",
};

export const createCategoryDestination = (category: Category): string =>
  `/categories/${category.id}`;

export const createArticleDestination = (article: Article): string =>
  `/articles/${article.id}`;

export const createYearDestination = (year: Year): string =>
  `/years/${year.value}`;

export const routes: RouteRecordRaw[] = [
  {
    path: routeDestinations.home,
    component: HomePage,
  },
  {
    path: routeDestinations.categories,
    component: CategoriesPage,
  },
  {
    path: routeDestinations.archive,
    component: ArchivePage,
  },
  {
    path: routeDestinations.article,
    component: ArticlePage,
  },
  {
    path: routeDestinations.category,
    component: CategoryPage,
  },
  {
    path: routeDestinations.year,
    component: YearPage,
  },
  {
    path: routeDestinations.login,
    component: LoginPage,
  },
  {
    path: routeDestinations.dashboard,
    component: DashboardPage,
  },
];

const createRouter = (): Router => {
  const router = createRouterInternal({
    history: createWebHistory(),
    routes,
  });

  // Don't allow logged in user to access LoginPage
  router.beforeEach((to, from) => {
    const user = useUser();

    if (user.value !== undefined) {
      // The previous path is also "/" when the user
      // loads the route directly
      // and this has to be handled separately
      if (
        from.path == routeDestinations.home &&
        to.path !== routeDestinations.home
      ) {
        return {
          path: "/",
          replace: true,
        };
      } else {
        return to.path !== routeDestinations.login;
      }
    }
  });

  // Redirect to login on unauthorized access
  router.beforeEach((to) => {
    const user = useUser();

    if ((to.meta.requiredAuth ?? false) && user.value === undefined) {
      return {
        path: routeDestinations.login,
        replace: true,
      };
    }
  });

  return router;
};

export const router = createRouter();
