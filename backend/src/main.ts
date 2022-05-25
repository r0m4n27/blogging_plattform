import { createPrismaClient } from "@/database";
import { Server } from "@/server";
import "dotenv/config";
import { SiteConfigController } from "./siteConfig/siteConfig.controller";
import { SiteConfigRouter } from "./siteConfig/siteConfig.router";

const main = async () => {
  const client = createPrismaClient();
  const controller = new SiteConfigController(client);
  const router = new SiteConfigRouter(controller);

  try {
    const server = new Server(
      {
        port: parseInt(process.env.SERVER_PORT ?? "4000"),
      },
      router,
    );
    server.start();
  } finally {
    client.$disconnect();
  }
};

main();
