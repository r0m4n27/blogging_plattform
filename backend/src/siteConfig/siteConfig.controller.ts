import {
  createErrorResponse,
  RequestWithBody,
  ResponseWithError,
} from "@/common/express";
import { PrismaClient } from "@prisma/client";
import { Request } from "express";
import {
  SiteConfigModel,
  siteConfigModelFromDb,
  siteConfigModelToDb,
} from "./siteConfig.types";

export class SiteConfigController {
  private readonly siteNotInitializedMessage = "Site is not initialized!";
  private readonly siteAlreadyInitializedMessage = "Site is not initialized!";

  constructor(private readonly prisma: PrismaClient) {}

  read = async (_: Request, res: ResponseWithError<SiteConfigModel>) => {
    const siteConfig = await this.prisma.siteConfig.findFirst();

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
    const configCount = await this.prisma.siteConfig.count();
    if (configCount !== 0) {
      return createErrorResponse(res, this.siteAlreadyInitializedMessage);
    }

    await this.prisma.siteConfig.create({
      data: siteConfigModelToDb(req.body),
    });

    res.json(req.body);
  };

  update = async (
    req: RequestWithBody<Partial<SiteConfigModel>>,
    res: ResponseWithError<SiteConfigModel>,
  ) => {
    const configCount = await this.prisma.siteConfig.count();
    if (configCount === 0) {
      return createErrorResponse(res, this.siteNotInitializedMessage);
    }

    const siteConfig = await this.prisma.siteConfig.update({
      where: {
        id: 1,
      },
      data: siteConfigModelToDb(req.body),
    });

    res.json(siteConfigModelFromDb(siteConfig));
  };
}
