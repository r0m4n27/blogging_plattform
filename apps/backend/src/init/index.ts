import type { PrismaClient } from "@prisma/client";
import { ControllerModule } from "./ControllerModule";
import { EnvironmentModule } from "./EnvironmentModule";
import { MiddlewareModule } from "./MiddlewareModule";
import { RouterModule } from "./RouterModule";
import { ServiceModule } from "./ServiceModule";

// Modules are used as a cheap way of doing dependency injection
// All required classes are initialized here
//
// Following modules are available:
//
// Environment: Values from environment variables (e.g. the JWT_SECRET)
// Services: Contain the application logic
//   No everything it in the services, this can be if the logic
//   is so simple that it can be done in the controller
// Middleware: Steps that can be used as a validation pipeline
// Controllers: Contain all route handlers. Either call the services
//   or contain simple logic
// Routers: Connect the middleware and controllers and bind them to routes
export interface Modules {
  readonly environment: EnvironmentModule;
  readonly services: ServiceModule;
  readonly middleware: MiddlewareModule;
  readonly controllers: ControllerModule;
  readonly routers: RouterModule;
}

export const createModules = (prismaClient: PrismaClient): Modules => {
  const environment = new EnvironmentModule();
  const services = new ServiceModule(prismaClient, environment);
  const controllers = new ControllerModule(services);
  const middleware = new MiddlewareModule(services);
  const routers = new RouterModule(controllers, middleware);

  return {
    environment,
    services,
    controllers,
    middleware,
    routers,
  };
};
