import { type ConfiguredRoute, Route } from "@blog/backend/common/router";
import type { SiteRouter } from "@blog/backend/common/siteRouter";
import type { RegisterCodeController } from "@blog/backend/controller/RegisterCodeController";
import type { AuthMiddleware } from "@blog/backend/middleware/AuthMiddleware";
import type { CommonMiddleware } from "@blog/backend/middleware/CommonMiddleware";
import { idParamsSchema } from "@blog/backend/model/commonModels";

export class RegisterCodeRouter implements SiteRouter {
  readonly path: string = "/auth/registerCodes";

  private readonly readAllRoute: ConfiguredRoute;
  private readonly createRoute: ConfiguredRoute;
  private readonly deleteRoute: ConfiguredRoute;

  constructor(
    controller: RegisterCodeController,
    authMiddleware: AuthMiddleware,
    commonMiddleware: CommonMiddleware,
  ) {
    this.readAllRoute = Route.get("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.listAll);

    this.createRoute = Route.post("/")
      .use(authMiddleware.userGuard("ADMIN"))
      .handle(controller.create);

    this.deleteRoute = Route.delete("/:id")
      .use(authMiddleware.userGuard("ADMIN"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.delete);
  }

  get routes() {
    return [this.readAllRoute, this.deleteRoute, this.createRoute];
  }
}
