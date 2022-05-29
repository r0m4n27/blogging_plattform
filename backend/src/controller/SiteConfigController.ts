import { siteConfigErrorMessage } from "@/common/errorMessages";
import { HttpException, Req } from "@/common/router/types";
import {
  SiteConfigModel,
  siteConfigModelFromDb,
  siteConfigModelToDb,
} from "@/model/siteConfigModels";
import { DatabaseService } from "@/service/database";

export class SiteConfigController {
  constructor(private readonly database: DatabaseService) {}

  read = async (): Promise<SiteConfigModel> => {
    const siteConfig = await this.database.siteConfig.findFirst();

    if (siteConfig === null) {
      throw new HttpException(siteConfigErrorMessage.siteNotInitialized);
    } else {
      return siteConfigModelFromDb(siteConfig);
    }
  };

  initialize = async (req: Req<SiteConfigModel>): Promise<SiteConfigModel> => {
    const configCount = await this.database.siteConfig.count();
    if (configCount !== 0) {
      throw new HttpException(siteConfigErrorMessage.siteAlreadyInitialized);
    }

    await this.database.siteConfig.create({
      data: siteConfigModelToDb(req.body),
    });

    return req.body;
  };

  update = async (
    req: Req<Partial<SiteConfigModel>>,
  ): Promise<SiteConfigModel> => {
    const configCount = await this.database.siteConfig.count();
    if (configCount === 0) {
      throw new HttpException(siteConfigErrorMessage.siteNotInitialized);
    }

    const siteConfig = await this.database.siteConfig.update({
      where: {
        id: 1,
      },
      data: siteConfigModelToDb(req.body),
    });

    return siteConfigModelFromDb(siteConfig);
  };
}
