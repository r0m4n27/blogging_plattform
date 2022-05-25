import { validateBody } from "@/common/express/middleware";
import { SiteRouter } from "@/common/siteRouter";
import { Router } from "express";
import { SiteConfigController } from "./siteConfig.controller";
import { siteConfigSchema } from "./siteConfig.types";

export class SiteConfigRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/siteConfig";

  constructor(controller: SiteConfigController) {
    this.router = Router();

    this.router.get("/", controller.read);
    this.router.post(
      "/",
      validateBody(siteConfigSchema),
      controller.initialize,
    );
    this.router.patch(
      "/",
      validateBody(siteConfigSchema.partial()),
      controller.update,
    );
  }
}
