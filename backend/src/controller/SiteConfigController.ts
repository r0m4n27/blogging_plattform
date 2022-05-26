import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import {
  SiteConfigModel,
  siteConfigModelFromDb,
  siteConfigModelToDb,
} from "@/model/siteConfigModels";
import { DatabaseService } from "@/service/database";
import { Request } from "express";

export class SiteConfigController {
  private readonly siteNotInitializedMessage = "Site is not initialized!";
  private readonly siteAlreadyInitializedMessage = "Site is not initialized!";

  constructor(private readonly database: DatabaseService) {}

  read = async (_: Request, res: ResponseWithError<SiteConfigModel>) => {
    const siteConfig = await this.database.siteConfig.findFirst();

    if (siteConfig === null) {
      createErrorResponse(res, this.siteNotInitializedMessage);
    } else {
      res.json(siteConfigModelFromDb(siteConfig));
    }
  };

  initialize = async (
    req: RequestWithBody<SiteConfigModel>,
    res: ResponseWithError<SiteConfigModel>,
  ) => {
    const configCount = await this.database.siteConfig.count();
    if (configCount !== 0) {
      return createErrorResponse(res, this.siteAlreadyInitializedMessage);
    }

    await this.database.siteConfig.create({
      data: siteConfigModelToDb(req.body),
    });

    res.json(req.body);
  };

  update = async (
    req: RequestWithBody<Partial<SiteConfigModel>>,
    res: ResponseWithError<SiteConfigModel>,
  ) => {
    const configCount = await this.database.siteConfig.count();
    if (configCount === 0) {
      return createErrorResponse(res, this.siteNotInitializedMessage);
    }

    const siteConfig = await this.database.siteConfig.update({
      where: {
        id: 1,
      },
      data: siteConfigModelToDb(req.body),
    });

    res.json(siteConfigModelFromDb(siteConfig));
  };
}
