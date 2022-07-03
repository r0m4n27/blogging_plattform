import { type ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { SiteConfigController } from "@blog/backend/controller/SiteConfigController";
import type { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { siteConfigSchema } from "@blog/backend/model/siteConfigModels";

// The SiteConfig can be read by everyone
// but only the admin can create and modify it
export class SiteConfigRouter implements SiteRouter {
  readonly path: string = "/siteConfig";

  private readonly readRoute: ConfiguredRoute;
  private readonly initRoute: ConfiguredRoute;
  private readonly updateRoute: ConfiguredRoute;

  constructor(
    controller: SiteConfigController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.readRoute = Route.get("/").handle(controller.read);

    this.initRoute = Route.post("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateBody(siteConfigSchema))
      .handle(controller.initialize);

    this.updateRoute = Route.patch("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateBody(siteConfigSchema.partial()))
      .handle(controller.update);
  }

  get routes() {
    return [this.readRoute, this.initRoute, this.updateRoute];
  }
}
