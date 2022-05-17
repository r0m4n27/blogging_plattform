import {
  createRouter as createRouterInternal,
  createWebHistory,
  type Router,
} from "vue-router";
import "vue-router";
import { useUser } from "@/composables/store/user";
import { visitorRootRoute, visitorRoutes } from "./visitor";
import { authorRootRoute } from "./author";
import { adminRootRoute } from "./admin";

export const createRouter = (): Router => {
  const routes = [authorRootRoute, visitorRootRoute, adminRootRoute];

  const router = createRouterInternal({
    history: createWebHistory(),
    routes,
  });

  setupLoginPageGuard(router);
  setupNotAuthorizedGuard(router);

  return router;
};

// Don't allow logged in user to access LoginPage
//
// If they navigate from another page to the login just don't allow it
// If the site is loaded from the login page redirect to the home page
const setupLoginPageGuard = (router: Router) => {
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
};

// Redirect on unauthorized access
// If the user is not logged in redirect to the login
// If the user is logged in but the wrong type redirect to the home page
const setupNotAuthorizedGuard = (router: Router) => {
  router.beforeEach((to) => {
    const user = useUser();
    const requiredUserType = to.meta.requiredUserType;

    if (requiredUserType !== undefined) {
      if (user.value === undefined) {
        return {
          path: visitorRoutes.login.route,
          replace: true,
        };
      } else {
        if (user.value?.type !== requiredUserType) {
          return {
            path: visitorRoutes.home.route,
            replace: true,
          };
        }
      }
    }
  });
};
