import {
  createRouter as createRouterInternal,
  createWebHistory,
  type Router,
} from "vue-router";
import "vue-router";
import { useUser } from "@blog/frontend/composables/store/user";
import { visitorRootRoute, visitorRoutes } from "./visitor";
import { authorRootRoute } from "./author";
import { adminRootRoute } from "./admin";

// Nested routes are used for the different user types
//
// The main routes define the metadata is used for the
// subroutes
export const createRouter = (): Router => {
  const routes = [authorRootRoute, visitorRootRoute, adminRootRoute];

  const router = createRouterInternal({
    history: createWebHistory(),
    routes,
  });

  setupPageBlocker(router, visitorRoutes.login.route);
  setupPageBlocker(router, visitorRoutes.register.route);
  setupNotAuthorizedGuard(router);

  return router;
};

// Don't allow logged in users to access a certain page
//
// If they navigate from another page to the page just don't allow it
// If the site is loaded from the page redirect to the home page
const setupPageBlocker = (router: Router, path: string) => {
  router.beforeEach((to, from) => {
    const user = useUser();

    if (user.value !== undefined) {
      // The previous path is also "/" when the user
      // loads the route directly
      // and this has to be handled separately
      if (from.path === visitorRoutes.home.route && to.path === path) {
        return {
          path: "/",
          replace: true,
        };
      } else {
        return to.path !== path;
      }
    }
  });
};

// Redirect on unauthorized access
// If the user is not logged in redirect to the login
// If the user is logged in but the wrong type redirect to the home page
const setupNotAuthorizedGuard = (router: Router) => {
  router.beforeEach((to) => {
    const user = useUser();
    const requiredUserType = to.meta.requiredUserRole;

    if (requiredUserType !== undefined) {
      if (user.value === undefined) {
        return {
          path: visitorRoutes.login.route,
          replace: true,
        };
      } else {
        if (user.value?.role !== requiredUserType) {
          return {
            path: visitorRoutes.home.route,
            replace: true,
          };
        }
      }
    }
  });
};
