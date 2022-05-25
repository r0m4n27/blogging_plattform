import { PrismaClient, Prisma } from "@prisma/client";

// Allow only one row to be in the SiteConfig table
export const createAllowOnlyOneSiteConfigRow =
  (client: PrismaClient): Prisma.Middleware =>
  async (params, next) => {
    if (
      params.model === "SiteConfig" &&
      (params.action === "create" || params.action === "createMany")
    ) {
      const rowCount = await client.siteConfig.count();
      if (rowCount !== 0) {
        throw new Error("Row in SiteConfig already exists");
      }
    }

    return next(params);
  };
