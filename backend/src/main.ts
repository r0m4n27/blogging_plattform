import { Server } from "@/server";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { ControllerModule } from "./init/ControllerModule";
import { EnvironmentModule } from "./init/EnvironmentModule";
import { RouterModule } from "./init/RouterModule";
import { ServiceModule } from "./init/ServiceModule";

const main = async () => {
  const prismaClient = new PrismaClient();
  try {
    const environment = new EnvironmentModule();
    const services = new ServiceModule(prismaClient);
    const controllers = new ControllerModule(services, environment);
    const routers = new RouterModule(controllers);

    const server = new Server(environment.serverConfig, ...routers.routers);
    server.start();
  } finally {
    prismaClient.$disconnect();
  }
};

main();
