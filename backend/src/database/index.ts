import { PrismaClient } from "@prisma/client";
import { createAllowOnlyOneSiteConfigRow } from "./siteConfig";

export const createPrismaClient = (): PrismaClient => {
  const client = new PrismaClient();

  // Apply middleware

  client.$use(createAllowOnlyOneSiteConfigRow(client));

  return client;
};
