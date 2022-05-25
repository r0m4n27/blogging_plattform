import { createPrismaClient } from "@/database";
import { Server } from "@/server";
import "dotenv/config";

const main = async () => {
  const client = createPrismaClient();

  try {
    const server = new Server({
      port: parseInt(process.env.SERVER_PORT ?? "4000"),
    });
    server.start();
  } finally {
    client.$disconnect();
  }
};

main();
