import { Server } from "@/server";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { createModules } from "./init";

const main = async () => {
  const prismaClient = new PrismaClient();
  try {
    const { environment, routers } = createModules(prismaClient);

    const server = new Server(environment.serverConfig, ...routers.routers);
    server.start();
  } finally {
    await prismaClient.$disconnect();
  }
};

main();
