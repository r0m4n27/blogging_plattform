import { Server } from "@/server";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { ControllerModule } from "./init/ControllerModule";
import { EnvironmentModule } from "./init/EnvironmentModule";
import { MiddlewareModule } from "./init/MiddlewareModule";
import { RouterModule } from "./init/RouterModule";
import { ServiceModule } from "./init/ServiceModule";

const main = async () => {
  const prismaClient = new PrismaClient();
  try {
    const environment = new EnvironmentModule();
    const services = new ServiceModule(prismaClient, environment);
    const controllers = new ControllerModule(services);
    const middleware = new MiddlewareModule(services);
    const routers = new RouterModule(controllers, middleware);

    const server = new Server(environment.serverConfig, ...routers.routers);
    server.start();
  } finally {
    await prismaClient.$disconnect();
  }
};

main();
