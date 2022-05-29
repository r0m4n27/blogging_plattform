import { ConfiguredRoute, Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { SiteConfigController } from "@/controller/SiteConfigController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { siteConfigSchema } from "@/model/siteConfigModels";

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
