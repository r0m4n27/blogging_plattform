import { siteConfigErrorMessages } from "@blog/backend/common/errorMessages";
import { handlePrismaNotFound } from "@blog/backend/common/prisma";
import { HttpException, Req } from "@blog/backend/common/router/types";
import {
  type SiteConfigModel,
  siteConfigModelFromDb,
  siteConfigModelToDb,
} from "@blog/backend/model/siteConfigModels";
import type { DatabaseService } from "@blog/backend/service/database";

export class SiteConfigController {
  constructor(private readonly database: DatabaseService) {}

  read = async (): Promise<SiteConfigModel> => {
    const siteConfig = await this.database.siteConfig.findFirst();

    if (siteConfig === null) {
      throw new HttpException(siteConfigErrorMessages.siteNotInitialized);
    } else {
      return siteConfigModelFromDb(siteConfig);
    }
  };

  initialize = async (req: Req<SiteConfigModel>): Promise<SiteConfigModel> => {
    await this.database.siteConfig.create({
      data: siteConfigModelToDb(req.body),
    });

    return req.body;
  };

  update = async (
    req: Req<Partial<SiteConfigModel>>,
  ): Promise<SiteConfigModel> => {
    const siteConfig = await handlePrismaNotFound(
      siteConfigErrorMessages.siteNotInitialized,
      async () => {
        return await this.database.siteConfig.update({
          where: {
            id: 1,
          },
          data: siteConfigModelToDb(req.body),
        });
      },
    );

    return siteConfigModelFromDb(siteConfig);
  };
}
