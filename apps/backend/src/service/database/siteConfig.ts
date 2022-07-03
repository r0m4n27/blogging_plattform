import { siteConfigErrorMessages } from "@blog/backend/common/errorMessages";
import { HttpException } from "@blog/backend/common/router/types";
import type { PrismaClient, Prisma } from "@prisma/client";

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
        throw new HttpException(siteConfigErrorMessages.siteAlreadyInitialized);
      }
    }

    return next(params);
  };
