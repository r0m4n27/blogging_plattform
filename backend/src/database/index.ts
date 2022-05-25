import { PrismaClient } from "@prisma/client";
import { createAllowOnlyOneSiteConfigRow } from "./siteConfig";
import { createAllowOnlyOneAdmin, hashUserPassword } from "./user";

export const createPrismaClient = (): PrismaClient => {
  const client = new PrismaClient();

  // Apply middleware

  client.$use(createAllowOnlyOneSiteConfigRow(client));

  client.$use(createAllowOnlyOneAdmin(client));
  client.$use(hashUserPassword);

  return client;
};
