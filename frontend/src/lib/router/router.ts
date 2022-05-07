import {
  createRouter as createRouterInternal,
  createWebHistory,
  type Router,
} from "vue-router";
import "vue-router";
import { useUser } from "@/composables/useUser";
import { visitorRootRoute, visitorRoutes } from "./visitor";
import { authorRootRoute } from "./author";

export const createRouter = (): Router => {
  const routes = [authorRootRoute, visitorRootRoute];

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
        from.path === visitorRoutes.home.route &&
        to.path === visitorRoutes.login.route
      ) {
        return {
          path: "/",
          replace: true,
        };
      } else {
        return to.path !== visitorRoutes.login.route;
      }
    }
  });

  // Redirect to login on unauthorized access
  router.beforeEach((to) => {
    const user = useUser();

    if ((to.meta.requiredAuth ?? false) && user.value === undefined) {
      return {
        path: visitorRoutes.login.route,
        replace: true,
      };
    }
  });

  return router;
};
