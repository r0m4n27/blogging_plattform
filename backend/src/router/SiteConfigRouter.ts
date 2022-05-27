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

    this.router.get("/", controller.read);
    this.router.post(
      "/",
      authMiddleware.userGuard("ADMIN"),
      commonMiddleware.validateBody(siteConfigSchema),
      controller.initialize,
    );
    this.router.patch(
      "/",
      authMiddleware.userGuard("ADMIN"),
      commonMiddleware.validateBody(siteConfigSchema.partial()),
      controller.update,
    );
  }
}
