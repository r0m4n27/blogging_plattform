import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { SiteConfigController } from "@/controller/SiteConfigController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { siteConfigSchema } from "@/model/siteConfigModels";
import { Router } from "express";

export class SiteConfigRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/siteConfig";

  constructor(
    controller: SiteConfigController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();

    Route.get("/").handle(controller.read).apply(this.router);

    Route.post("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateBody(siteConfigSchema))
      .handle(controller.initialize)
      .apply(this.router);

    Route.patch("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateBody(siteConfigSchema.partial()))
      .handle(controller.update)
      .apply(this.router);
  }
}
