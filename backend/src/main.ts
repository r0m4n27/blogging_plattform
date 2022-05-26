import { Server } from "@/server";
import "dotenv/config";

const main = async () => {
  const server = new Server({
    port: parseInt(process.env.SERVER_PORT ?? "4000"),
  });
  server.start();
};

main();
