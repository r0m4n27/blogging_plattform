import { createPrismaClient } from "@/database";
import { Server } from "@/server";
import "dotenv/config";
import { AuthController } from "./auth/auth.controller";
import { AuthRouter } from "./auth/auth.router";
import { RegisterCodeController } from "./registerCode/registerCode.controller";
import { RegisterCodeRouter } from "./registerCode/registerCode.router";
import { SiteConfigController } from "./siteConfig/siteConfig.controller";
import { SiteConfigRouter } from "./siteConfig/siteConfig.router";

const main = async () => {
  const client = createPrismaClient();
  const controller = new SiteConfigController(client);
  const router = new SiteConfigRouter(controller);

  const authController = new AuthController(
    client,
    process.env.JWT_SECRET ?? "",
    process.env.ADMIN_REGISTER_CODE ?? "",
  );
  const authRouter = new AuthRouter(authController);

  const registerCodeController = new RegisterCodeController(client);
  const registerCodeRouter = new RegisterCodeRouter(
    registerCodeController,
    client,
    process.env.JWT_SECRET ?? "",
  );

  try {
    const server = new Server(
      {
        port: parseInt(process.env.SERVER_PORT ?? "4000"),
      },
      router,
      authRouter,
      registerCodeRouter,
    );
    server.start();
  } finally {
    client.$disconnect();
  }
};

main();
